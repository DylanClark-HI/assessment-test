import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../models/article';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {
  @Input() article!: Article;

  currentIndex = -1;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }


}
