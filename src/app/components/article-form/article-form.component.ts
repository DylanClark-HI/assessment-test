import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Article } from '../../models/article';
import { Router } from '@angular/router';
@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  @Output() onCreateArticle: EventEmitter<Article> = new EventEmitter();
  @Input() currentArticle!: Article;
  @Input() newArticle: Article = {
    title: '',
    body: ''
  };

  addForm: any;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.newArticle.title || !this.newArticle.body) {
      console.log('Please fill in all fields');
      return;
    }

    const newArticle = {
      title: this.newArticle.title,
      body: this.newArticle.body
    }

    console.log(this.newArticle);

    this.apiService.createNewArticle(newArticle).subscribe({
      next: (result: any) => {
        console.log(result);
      },
      error: (err) => console.error(err)
      });
    
  }

  saveArticle() {
    console.log("article save in article-fomr fired");
    // this.apiService.onEdit().subscribe(
    //   (data: any) => {
    //     console.log(data);
    //     this.router.navigate(['/']);
    //   },
    //   error => {
    //     alert(error);
    //   });
    }
}
