import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  //valor:number=1;
  @Input() valor:string=""
  constructor() { }

  ngOnInit(): void {
    //this.valor=Math.trunc(Math.random()*6)+1
  }

}
