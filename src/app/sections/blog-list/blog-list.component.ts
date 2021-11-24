import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  @Input() articles!: Article[];
  constructor() { }

  ngOnInit(): void {
  }

}
