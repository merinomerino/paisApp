import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  termino:string = '';

  @Output() onEnter:EventEmitter<string>= new EventEmitter();
  @Output() onDebounce:EventEmitter<string>= new EventEmitter();


  @Input() placeholder:string = 'algo';

  debouncer :Subject<string> = new Subject();


  constructor() { }

  ngOnInit() {
    this.debouncer
    .pipe(
      debounceTime(300)
      )
    .subscribe(valor=>{
      //console.log('debouncer' , valor);
      this.onDebounce.emit(valor);
    })
  }

  buscar(){
    //console.log(this.termino);
    this.onEnter.emit(this.termino);
  }

    teclaPresionada(){
        // const valor = event.target.value;
        // console.log(valor);
        // console.log(this.termino)

        this.debouncer.next(this.termino);
    
      }

}
