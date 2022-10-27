import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1'

  constructor( private http:HttpClient) { }

  buscarPais(termino:string){
    const url = `${this.apiUrl}/name/${termino}`;

    console.log(url)

    return this.http.get<Country[]>(url);

  }


}
