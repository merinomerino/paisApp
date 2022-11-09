import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino:string ='';
  paises : Country[]=[];
  hayError:boolean = false;

  constructor(
    private paisService:PaisService,
    private router:Router
    ) { }

  ngOnInit(): void {
   
  }

  buscar(){
    this.hayError= false;
    this.paisService.buscarPais(this.termino)
          .subscribe(paises=>{
            // console.log(paises)
            this.paises=paises;
          },(err =>{
            this.hayError= true;
            this.paises=[];
            // this.router.navigate(['/ejemplo']);
          }) )

  }

}
