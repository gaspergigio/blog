import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-featured-blog',
  templateUrl: './featured-blog.component.html',
  styleUrls: ['./featured-blog.component.scss']
})
export class FeaturedBlogComponent implements OnInit {
  @Input() article!: Article;
  constructor() { }

  ngOnInit(): void {
  }

  backgroundImage() {
    return {
        'background-image': 'url(' + this.article.image + ')',
    };
}

}
