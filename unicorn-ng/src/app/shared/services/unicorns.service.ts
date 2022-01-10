import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Unicorn } from '../models/unicorn.model';

@Injectable({
  providedIn: 'root',
})
export class UnicornsService {
  private urlUnicorns = `${environment.apiUrl}/unicorns`;
  constructor(private http: HttpClient) {}

  public getListUnicorns(): Observable<Unicorn[]> {
    return this.http.get<Unicorn[]>(this.urlUnicorns);
  }
}
