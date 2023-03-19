import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleViewComponent } from './components/article-view/article-view.component';
import { HeaderComponent } from './components/header/header.component';
import { BtnComponent } from './components/btn/btn.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleItemComponent,
    ArticleFormComponent,
    ArticleViewComponent,
    HeaderComponent,
    BtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
