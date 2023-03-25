import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Article } from '../../models/article';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  @Output() onCreateArticle: EventEmitter<Article> = new EventEmitter();
  @Input() currentArticle: Article ={
    id: '',
    title: '',
    body: ''
  };
  @Input() article: Article = {
    title: '',
    body: ''
  };

  id = this.url.snapshot.params['id'];

  constructor(
    private apiService: ApiService,
    private url: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if(this.id > 0) {
      this.apiService.getFullArticle(this.id).subscribe({
        next: (result: any) => {
          this.currentArticle = result;
          this.article.title = this.currentArticle.title;
          this.article.body = this.currentArticle.body;
        },
        error: (err) => console.error(err)
      });
    }
  }

  onSubmit(): void {
    if (!this.article.title || !this.article.body) {
      console.log('Please fill in all fields');
      return;
    }

    if(this.id > 0) {

      const updatedArticle = {
        id: this.id,
        title: this.article.title,
        body: this.article.body
      }

      this.apiService.updateArticle(updatedArticle).subscribe({
        next: (result: any) => {
          if (result.status == "success") {
            alert('Article updated successfully');
            this.router.navigate(['/article-view/' + this.id]);
          }
        },
        error: (err) => console.error(err)
      });

    } else {
      const newArticle = {
        title: this.article.title,
        body: this.article.body
      }

      this.apiService.createNewArticle(newArticle).subscribe({
        next: (result: any) => {
          if (result.status == "success") {
            alert('New Article created successfully');
            console.log(result);
            this.router.navigate(['/article-view/' + result.data[0].id]);
          }
        },
        error: (err) => console.error(err)
        });
      }
  }
}
