import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  public createTask(newTask: any): Observable<any>{
    return this.http.post("http://wwww.mocky.io/v2/5d155b9f0e0",newTask);
  }
}
