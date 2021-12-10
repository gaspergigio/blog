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
  technology: string | undefined = '';
  techLogo: string = '';
  techClass: string = '';
  subscription: Subscription | undefined; 
  constructor(private pagesService: PagesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.subscription = this.pagesService.getPostById(id).subscribe(({article, html}) => {
        this.article = article;
        this.technology = article?.categories[0];
        if (this.technology){
          switch (this.technology) {
            case 'angular':
              this.techLogo = 'logo__angular--white.png';
              break;
            case 'react':
              this.techLogo = '4691292_react native_react_icon-modified.png';
              break;
            case 'node':
              this.techLogo = 'dev_node_icon_160853.png';
              this.techClass = 'invert-image';
              break; 
            case 'typescript':
              this.techLogo = 'typescript_icon_131914.png';
              this.techClass = 'bg-white';
              break; 
            case 'redux':
              this.techLogo = 'redux_icon_132038.png';
              this.techClass = 'invert-image';
              break;  
            case 'rxjs':
              this.techLogo = '_rxjs-removebg-preview.png';
              this.techClass = 'invert-image image-space';
              break;              
            default:
              break;
          }
        }

        this.content = html;
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
