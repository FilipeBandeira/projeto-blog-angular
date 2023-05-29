import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png";
  contentTitle:string = "Título";
  contentDescription:string = "Notícia";

  constructor() { }

  ngOnInit(): void {
  }

}
