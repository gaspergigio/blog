import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

//TODO: Last Blog ticket added --> 013.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'blog';
  constructor (public translate: TranslateService){
    const langs = ['en', 'es'];
    translate.addLangs(langs);
    let browserLang = this.translate.getBrowserLang();
    if (!langs.includes(browserLang))
      browserLang = 'en';
    translate.setDefaultLang(browserLang);
    translate.use(browserLang);
  }

  //TODO: blog-001: Corregir Responsive
  //TODO: blog-003: Implementar Angular Universal
  //TODO: blog-012: Dar soporte a articulos en diferentes idiomas.
  //TODO: blog-013: Agregar Google analytics

}

