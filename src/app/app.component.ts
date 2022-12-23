import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  a! : number;
  b! : number;

  sumar!: boolean;
  restar!: boolean;
  multiplicar!: boolean;
  dividir!: boolean;
  resultado!: number;

  enviar() {
    if (this.sumar === true){
      this.resultado = this.a + this.b;
    } else if (this.restar === true){
      this.resultado = this.a - this.b;
    } else if (this.multiplicar === true){
      this.resultado = this.a * this.b;
    } else if (this.dividir === true) {
      this.resultado = this.a / this.b;
    }
  }




}
