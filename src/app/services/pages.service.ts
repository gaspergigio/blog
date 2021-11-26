import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article.model';
import { filter, map, skip, take, takeLast } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  
  constructor(private http: HttpClient) { }

  getPostById(id: string){
    return forkJoin({
      article: this.getPosts(1, 0).pipe(
        map(res => res.find(x => x.id === id))
      ), 
      html: this.http.get('assets/posts/' + id + '.html', { responseType: 'text' })} 
    );
  }

  getPosts(pageNumber: number = 1, pageSize: number = environment.pageSize){
    //TODO: blog 010 (Medium): Permitir filtro por tecnologia.
    const offset = pageSize * (pageNumber - 1);
    let end: number | undefined;
    if (pageSize > 0)
      end = offset + pageSize;
    return this.http.get<Article[]>('assets/articles/articles.json').pipe(
        map(res => res.filter(x => x.active)
          .sort((a, b) => {
            return a.date < b.date ? 1 : -1;
          })
          .slice(offset, end)
        )
    );
  }

  
}
