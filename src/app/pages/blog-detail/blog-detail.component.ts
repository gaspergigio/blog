import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagesService } from '../../services/pages.service';
import { Article } from '../../models/article.model';
import { Subscription } from 'rxjs';

declare function executeHomeAnimations(): any;

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit, OnDestroy, AfterViewInit {
  content: string = '';
  article: Article | undefined
  subscription: Subscription | undefined; 
  constructor(private pagesService: PagesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.subscription = this.pagesService.getPostById(id).subscribe(({article, html}) => {
        this.article = article;
        this.content = html;
        //TODO: blog-004 (High): Cambiar icono de Tecnología segun la tecnologia que traiga el articulo.
      })
    });
  }

  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }

  ngAfterViewInit(){
    executeHomeAnimations();
  }

}
