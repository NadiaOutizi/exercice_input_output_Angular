import { Component, Input } from '@angular/core';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {

  @Input() listArticle : Article[] = []

  ngOnInit() {
    console.log(this.listArticle);
    
  }
}
