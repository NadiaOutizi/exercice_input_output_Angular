import { Component, EventEmitter, Output } from '@angular/core';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.css'
})
export class ArticleFormComponent {

  @Output() newArticle = new EventEmitter()
  name : string = ''
  price : number = 0

  addArticle(){
    let article : Article = {name:"",price:0}
    article.name = this.name
    article.price = this.price

    this.newArticle.emit(article)

  }

}
