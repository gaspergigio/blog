import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PagesService } from 'src/app/services/pages.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  lang!: string;
  constructor(public translate: TranslateService, public pagesService: PagesService, public messageService: MessageService) { }

  ngOnInit(): void {
    this.lang = this.pagesService.getLang();
  }

  toogleLanguage(){
    const lang =  this.translate.currentLang === 'en' ? 'es' : 'en';
    this.translate.use(lang);
    this.lang = lang;
    localStorage.setItem('lang', lang);
    this.messageService.sendMessage('changeLang', lang);
  }

}
