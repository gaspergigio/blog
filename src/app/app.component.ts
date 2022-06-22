import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'blog';
  constructor (public translate: TranslateService, public pagesService: PagesService){
    const langs = ['en', 'es'];
    translate.addLangs(langs);
    const lang = pagesService.getLang();
    translate.setDefaultLang(lang);
    translate.use(lang);
  }

  //TODO: blog-003 (High): Implementar Angular Universal
  //TODO: blog-013 (Low): Agregar Google analytics
  //TODO: blog-002 (Urgent): respetar fecha - testing general.
  //TODO: blog-004: (High): Agregar dominio
}

