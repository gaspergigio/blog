import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article.model';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  
  constructor(private http: HttpClient, public translate: TranslateService) { }

  getLang(){
    const storageLang = localStorage.getItem('lang');
    let lang = storageLang ?? 'en';
    if (!lang){
      const browserLang = this.translate.getBrowserLang();
      lang = browserLang ?? 'en';
    }
    return lang
  }

  getPostById(id: string){
    const lang = this.getLang();
    return forkJoin({
      article: this.getPosts(1, 0).pipe(
        map(res => res.find(x => x.id === id))
      ), 
      html: this.http.get(`assets/posts/${id}.${lang}.html`, { responseType: 'text' })} 
    );
  }

  getPosts(pageNumber: number = 1, pageSize: number = environment.pageSize){
    //TODO: blog 010 (Medium): Permitir filtro por tecnologia.
    const offset = pageSize * (pageNumber - 1);
    let end: number | undefined;
    if (pageSize > 0)
      end = offset + pageSize;
    const tomorrow = new Date();
    tomorrow.setHours(24,0,0,0);
    console.log('tomorrow:', tomorrow);
    return this.http.get<Article[]>('assets/articles/articles.json').pipe(
        map(res => res.filter(x => x.active && new Date(x.date) < tomorrow)
          .sort((a, b) => {
            return a.date < b.date ? 1 : -1;
          })
          .slice(offset, end)
        )
    );
  }

  
}
