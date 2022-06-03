import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';
import { Article } from 'src/app/models/article.model';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

declare function executeHomeAnimations(): any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy, AfterViewInit {
  articles: Article[] = [];
  loading = false;
  allData = false;
  page = 1;
  timeout = 1000;
  subscription: Subscription | undefined; 
  constructor(private pageService: PagesService) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }

  ngAfterViewInit(){
    executeHomeAnimations();
  }

  loadData(){
    this.loading = true;
    this.subscription = this.pageService.getPosts(this.page).subscribe(articles =>{
      if (articles.length < environment.pageSize)
        this.allData = true;

        setTimeout(() => {
          this.articles = [...this.articles, ...articles];
          this.loading = false;
        }, this.timeout);
    });
  }

  onScroll() {
    console.log(this.articles);
    if(this.allData)
      return;
    this.page++;
    console.log(this.articles);
    this.loadData();
  }

}
