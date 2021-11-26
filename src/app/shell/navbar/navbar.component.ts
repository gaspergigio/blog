import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  lang!: string;
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    this.lang = this.translate.currentLang;
  }

  toogleLanguage(){
    const lang =  this.translate.currentLang === 'en' ? 'es' : 'en';
    this.translate.use(lang);
    this.lang = lang;
  }

}
