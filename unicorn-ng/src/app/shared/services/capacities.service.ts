import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Capacity } from '../models/capacity.model';

@Injectable({
  providedIn: 'root',
})
export class CapacitiesService {
  private urlCapacities = `${environment.apiUrl}/capacities`;

  constructor(private http: HttpClient) {}

  public getCapacity(id: number): Observable<Capacity> {
    return this.http.get<Capacity>(this.urlCapacities + '/' + id);
  }
}
