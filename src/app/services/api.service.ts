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
    const data = {
      action: 'getAll',
      params: {}
    }
    return this.http.post<Article[]>(`${this.PHP_API_SERVER}`, data).pipe(
      map((res: any) => {
        return res['data'];
      })
    )
  }

  getFullArticle(id: number): Observable<Article> {
    const data = {
      action: 'getArticle',
      params: {
        id: id
      }
    }
    return this.http.post<Article>(`${this.PHP_API_SERVER}`, data).pipe(
      map((res: any) => {
        return res['data'];
      })
    )
  }

  createNewArticle(newArticle: any): Observable<any> {
    const data = {
      action: 'createArticle',
      params: {
        title: newArticle.title,
        body: newArticle.body
      }
    }

    return this.http.post(`${this.PHP_API_SERVER}`, data);
  }


  updateArticle(updatedArticle: any): Observable<any> {
    const data = {
      action: 'updateArticle',
      params: {
        id: updatedArticle.id,
        title: updatedArticle.title,
        body: updatedArticle.body
      }
    }
    return this.http.post(`${this.PHP_API_SERVER}`, data);
  }

  deleteArticle(id: number): Observable<any> {
    const data = {
      action: 'deleteArticle',
      params: {
        id: id
      }
    }

    return this.http.post(`${this.PHP_API_SERVER}`, data);
  }
}
