import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  displaySubscribe: boolean = false; //TODO: blog 009: quitar esto cuando se haga la subscripcion
  constructor() { }

  ngOnInit(): void {
  }

}
