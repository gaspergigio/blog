import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  getDisplay(tec: string){
      //TODO: "Read More" de cada tecnologia se muestra si hay articulos de esa tecnologia.
    return false;
  }

  //TODO: Crear pagina de Cheat Sheet. Similar a Blog pero en vez de cards, con los cheat sheet.

}
