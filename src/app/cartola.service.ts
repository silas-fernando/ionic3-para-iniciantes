import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CartolaService {
  basePath = "/apicartola";
  constructor(
    public httpCliente:HttpClient,
    private platform: Platform
    ) { 
      if(this.platform.is("cordova")){
        this.basePath = "https://api.cartolafc.globo.com";
      }
    }

  atletas(){
    return this.httpCliente.get(`${this.basePath}/atletas/mercado`);
  }
}
