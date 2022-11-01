import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country, Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1'

  constructor( private http:HttpClient) { }


  private _paises :Pais[]=[
    {
       data:{nombre:'Mexico', capital:'Cd. Mexico', region:'Norte America'},
       cca2:'MX',
       timezones:['UTC-6', 'UTC-5'],
       bandera:'data:image/png;base64,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'
    },
    {
      data:{nombre:'Peru', capital:'Lima', region:'Sur America'},
      cca2:'PE',
      timezones:['UTC-5'],
      bandera:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/1280px-Flag_of_Peru.svg.png'
   },
  ]


  get paisLocal():Pais[]{
    return [...this._paises];
  }

  agregarPais( pais: Pais ) {
    this._paises.push( pais );
}




  buscarPais(termino:string){
    const url = `${this.apiUrl}/name/${termino}`;

    console.log(url)

    return this.http.get<Country[]>(url);

  }


}
