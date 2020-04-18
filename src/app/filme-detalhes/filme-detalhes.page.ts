import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoovieService } from '../moovie.service';
import { error } from 'protractor';

@Component({
  selector: 'app-filme-detalhes',
  templateUrl: './filme-detalhes.page.html',
  styleUrls: ['./filme-detalhes.page.scss'],
  providers: [MoovieService]
})
export class FilmeDetalhesPage implements OnInit {
  public filme;
  public idFilme: any;

  constructor(private route: ActivatedRoute, private router: Router, public movieProvider: MoovieService) {
    this.route.queryParams.subscribe(params => {
      let getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.idFilme = getNav.extras.state.valorParaEnviar;
      }
    });
  }

  ngOnInit() {
    console.log("filme-detalhes filme id: ", this.idFilme);
    this.movieProvider.getMoovieDetails(this.idFilme).subscribe(data=>{
      let retorno = (data as any);
      this.filme = retorno;
      console.log("Retorno", this.filme);
    }, error=>{
      console.log(error);
    })
  }

}
