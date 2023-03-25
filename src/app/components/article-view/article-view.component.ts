import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../models/article';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {
  @Input() currentArticle: Article = {
    title: '',
    body: ''
  };
  @Output() onDeleteArticle = new EventEmitter();
  @Output() onSetCurrentView = new EventEmitter();

  id = this.url.snapshot.params['id'];
  dialogRef?: MatDialogRef<DialogComponent>;

  constructor(
    private apiService: ApiService,
    private url: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.setCurrentView(this.id);
  }

  openDialog() {
    this.dialogRef = this.dialog.open(DialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete?"

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiService.deleteArticle(this.id).subscribe({ 
          next: (result: any) => {
            alert('Article successfully deleted.');
            this.router.navigate(['/']);
          },
          error: (err) => console.error(err)
        });
      }
    });
  }

  setCurrentView(id: number): void {
    if (id > 0) {
      this.apiService.getFullArticle(id).subscribe({
        next: (result: any) => {
          this.currentArticle = result;
          this.onSetCurrentView.emit(this.currentArticle);
        },
        error: (err) => console.error(err)
      });
    };
  }

  // deleteArticle(id: any): void {
  //   this.apiService.deleteArticle(id).subscribe({
  //     next: (result: any) => {
  //       console.log(result);
  //     },
  //     error: (err) => console.error(err)
  //   });

  //   this.onDeleteArticle.emit(this.id);
  // }

}
