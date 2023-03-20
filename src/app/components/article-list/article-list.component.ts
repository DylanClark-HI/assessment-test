import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../models/article';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  @Input() articles: Article[] = [];
  @Output() onViewArticle: EventEmitter<Article> = new EventEmitter();

  currentIndex = -1;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAll().subscribe((article) => this.articles = article);
  }

  getAll(): void {
    console.log("getallll");
    this.apiService.getAll()
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => console.error(err)
      });
  }

  editArticle(): void {
    console.log('Edit Article');
  }

  deleteArticle(): void {
    console.log('Delete Article');
  }

  viewAll(): void {
    console.log('View All');
  }

}
