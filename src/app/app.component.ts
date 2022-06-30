import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PagesService } from 'src/app/services/pages.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'blog';
  private isBrowser: boolean;
  constructor (
    public translate: TranslateService, 
    public pagesService: PagesService, 
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
      this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
      const langs = ['en', 'es'];
      this.translate.addLangs(langs);
      const lang = this.pagesService.getLang();
      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
      if (this.isBrowser) {
        AOS.init();
    }
  }

  //TODO: blog-003 (High): Implementar Angular Universal - Add Sitemap and Robot.txt
  //TODO: blog-013 (Low): Agregar Google analytics
}

