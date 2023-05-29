import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  
  @Input() // Antes do input, adicona de forma dinâmica com o endereço local (html e ts), em seguida para o input, dinamizando no html da home
  photoCover:string = ""
  
  @Input()
  cardTitle:string = ""
  
  @Input()
  cardDescription:string = ""

  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
