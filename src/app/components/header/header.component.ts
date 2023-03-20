import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() text!: string;
  @Input() article!: Article;
  @Output() onViewArticle: EventEmitter<Article> = new EventEmitter();
  @Output() editClick = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
