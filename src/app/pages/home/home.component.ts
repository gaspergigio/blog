import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from '../../models/article.model';
import { PagesService } from '../../services/pages.service';

declare function executeHomeAnimations(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  lastArticle!: Article;
  articles: Article[] = [];
  loading = true;
  timeout = 1000;
  subscription: Subscription | undefined; 
  constructor(private pageService: PagesService) { }

  //TODO: Agregar Testimonials

  ngOnInit(): void {
      this.subscription = this.pageService.getPosts(1, 4).subscribe(articles =>{
        setTimeout(() => {
          if (articles){
            this.lastArticle = articles[0];
            this.articles = articles.splice(1);
          }
          this.loading = false;
        }, this.timeout);
    })
  }

  ngAfterViewInit(){
    executeHomeAnimations();
  }

  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }

}


