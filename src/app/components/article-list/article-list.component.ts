import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../models/article';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  @Input() articles: Article[] = [];
  @Output() onViewArticle: EventEmitter<Article> = new EventEmitter();

  currentIndex = -1;

  constructor(
    private apiService: ApiService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.apiService.getAll().subscribe((article) => this.articles = article);
  }

  editArticle(updatedArticle: Article): void {
    console.log('Edit Article');
  }

  exportDb(): void {
    console.log('Export DB');
  }

}
