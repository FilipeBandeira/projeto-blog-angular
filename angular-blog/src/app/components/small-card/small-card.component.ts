import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  
  photoCover:string = ""
  
  
  cardTitle:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
