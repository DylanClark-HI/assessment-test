import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../models/article';

const baseUrl = 'http://localhost:4200/api/articles';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://angularApi/controllers/apiController.php";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.PHP_API_SERVER}/?action=${'getArticles'}`).pipe(
      map((res: any) => {
        return res['data'];
      })
    )
  }

  getFullArticle(id: any): Observable<Article> {
    return this.http.get<Article>(`${this.PHP_API_SERVER}/?action=${'getFullArticle'}&id=${id}`).pipe(
      map((res: any) => {
        return res['data'];
      })
    )
  }

  createNewArticle(newArticle: any): Observable<any> {
    return this.http.post(`${this.PHP_API_SERVER}/?action=${'addArticle'}`, newArticle);
  }


  onEdit() {
    console.log("On edit api service fired");
  }
}
