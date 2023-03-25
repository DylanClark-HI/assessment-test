import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleViewComponent } from './components/article-view/article-view.component';
import { HeaderComponent } from './components/header/header.component';
import { BtnComponent } from './components/btn/btn.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleItemComponent,
    ArticleFormComponent,
    ArticleViewComponent,
    HeaderComponent,
    BtnComponent,
    DialogComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
