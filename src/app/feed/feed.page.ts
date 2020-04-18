import { Component, OnInit } from '@angular/core';
import { MoovieService } from '../moovie.service';
import { LoadingController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [
    MoovieService
  ]
})
export class FeedPage implements OnInit {
  public objeto_feed = {
    titulo: "Madison, WI",
    subtitulo: "Silas Fernando Prime",
    descricao: "Madison é a capital do estado norte-americano do Wisconsin, no Condado de Dane. Foi fundada em 1836, e incorporada em 1848. O Aeroporto Regional do Condado de Dane serve a cidade."
  }
  public nomeUsuario: string = "Silas do codigo";
  public listaFilmes = new Array<any>();
  public loader;
  public carregando = false;
  public atualizar;
  public atualizando: boolean = false;
  public page = 1;
  public infiniteScroll;

  constructor(
    private movieService: MoovieService,
    public loadingController: LoadingController,
    private router: Router
  ) {
  }

  async abreCarregamentoAtual() {
    this.carregando = true;
    this.loadingController.create({
      message: 'Carregando Filmes...'
    }).then(loader => {
      loader.present().then(() => {
        if (!this.carregando) {
          loader.dismiss();
        }
      });
    });
  }

  async fechaCarregamentoAtual() {
    this.carregando = false;
    this.loadingController.getTop().then(loader => {
      if (loader) {
        loader.dismiss();
      }
    });
  }

  atualize(atualizar) {
    this.atualizar = atualizar;
    this.atualizando = true;
    this.carregarFilmes();
  }

  naoAtualize() {
    if (this.atualizando) {
      this.atualizar.target.complete();
      this.atualizando = false;
    }
  }

  ngOnInit() {
    this.carregarFilmes();
  }

  abrirDetalhes(filme) {
    let navigationExtras: NavigationExtras = {
      state: {
        valorParaEnviar: filme.id
      }
    };
    console.log(filme);
    console.log("FeedPages filme id: ", navigationExtras);
    this.router.navigate(['/filme-detalhes'], navigationExtras);
  }

  loadData(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
  }

  carregarFilmes(newpage: boolean = false) {
    //this.SomaDoisNumeros(10, 20);
    this.abreCarregamentoAtual();
    this.movieService.getLatestMoovie(this.page).subscribe(
      data => {
        const response = (data as any);
        //const objeto_retorno = JSON.parse(response._body);
        if (newpage) {
          this.listaFilmes = this.listaFilmes.concat(response.results);
          console.log("Page: ", this.page);
          console.log("ListaFilmes: ", this.listaFilmes);
         
          this.infiniteScroll.target.complete();
        } else {
          this.listaFilmes = response.results;
        }

        this.fechaCarregamentoAtual();
        this.naoAtualize();
      }, error => {
        console.log(error);

        this.fechaCarregamentoAtual();
        this.naoAtualize();
      }
    )
  }
}