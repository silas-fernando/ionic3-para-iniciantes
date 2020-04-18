import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {
  constructor(
    private router: Router,
    private menuController: MenuController
  ) { 
  }
  
  ngOnInit() {
  }

  abrirPerfil(){
    this.router.navigate(['/perfil']);
  }

  abrirSobre(){
    this.router.navigate(['/sobre']);
  }

  async abrirMenu(){
    await this.menuController.toggle();
  }
}
