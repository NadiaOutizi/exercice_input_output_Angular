import { Component } from '@angular/core';
import { Article } from './interfaces/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstcrs';

  articles : Article[] = []

  addArticle(article : Article) {
    this.articles.push(article)
    console.log(this.articles)
  }
}
