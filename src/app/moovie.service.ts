import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoovieService {
  private baseApiPath = "https://api.themoviedb.org/3";
  constructor(public httpCliente:HttpClient) { }

  getLatestMoovie(page = 1){
    return this.httpCliente.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=`+this.getApiKey());
  }

  getMoovieDetails(idFilme){
    return this.httpCliente.get(this.baseApiPath + `/movie/${idFilme}?api_key=`+this.getApiKey());
  }

  getApiKey(): string{
    return "56123e372ead00271532549d9f67fb7b";
  }
}
