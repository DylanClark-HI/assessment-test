import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleViewComponent } from './components/article-view/article-view.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/article-list', pathMatch: 'full' },
  { path: 'article-list', component: ArticleListComponent },
  { path: 'article-form/:id', component: ArticleFormComponent },
  { path: 'article-form', component: ArticleFormComponent },
  { path: 'article-view/:id', component: ArticleViewComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
