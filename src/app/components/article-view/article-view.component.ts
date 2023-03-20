import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../models/article';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {
  @Input() article!: Article;
  @Input() currentArticle: Article = {
    title: '',
    body: ''
  };
  @Output() onSetCurrentView = new EventEmitter();

  id = this.url.snapshot.params['id'];

  constructor(
    private apiService: ApiService,
    private url: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.setCurrentView(this.id);
  }

  setCurrentView(id: number): void {
    if (id > 0) {
      this.apiService.getFullArticle(id).subscribe({
        next: (result: any) => {
          this.currentArticle = result[0];

          this.onSetCurrentView.emit(this.currentArticle);
        },
        error: (err) => console.error(err)
      });
    };

  }

}
