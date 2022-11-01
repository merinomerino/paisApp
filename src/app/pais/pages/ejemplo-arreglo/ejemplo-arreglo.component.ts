import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ejemplo-arreglo',
  templateUrl: './ejemplo-arreglo.component.html',
  styleUrls: ['./ejemplo-arreglo.component.css']
})
export class EjemploArregloComponent implements OnInit {

 @Input() nuevoPais:Pais ={
          data:{nombre:'' , capital:'' ,region:''},
          bandera:'',
          cca2:'',
          timezones:[]
  }


  constructor(private paisService: PaisService) { }

  get paisLocal(){
    return this.paisService.paisLocal;
  }

  agregar(){
    this.paisService.agregarPais(this.nuevoPais);
    this.nuevoPais={
      data:{nombre:'' , capital:'' ,region:''},
      bandera:'',
      cca2:'',
      timezones:[]
    }
  }


  ngOnInit(): void {
  }

}
