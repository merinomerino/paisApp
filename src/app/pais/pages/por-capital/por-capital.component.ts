import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino:string ='';
  paises : Country[]=[];
  hayError:boolean = false;

  constructor(
    private paisService:PaisService,
  
    ) { }

  ngOnInit(): void {
   
  }

  buscar(termino:string){
    this.hayError= false;
    this.termino=termino;
    this.paisService.buscarCapital(termino)
          .subscribe(paises=>{
            // console.log(paises)
            this.paises=paises;
          },(err =>{
            this.hayError= true;
            this.paises=[];
            // this.router.navigate(['/404']);
          }) )


  }


  


}

