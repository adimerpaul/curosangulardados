import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor1:number=0
  valor2:number=0
  valor3:number=0
  constructor(){
    this.valor1=this.returnaleatorio();
    this.valor2=this.returnaleatorio();
    this.valor3=this.returnaleatorio();
  }
  returnaleatorio(){
    return Math.trunc(Math.random()*6)+1
  }
  tirar(){
    this.valor1=this.returnaleatorio();
    this.valor2=this.returnaleatorio();
    this.valor3=this.returnaleatorio();
  }
}
