import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatAll, from, map, mergeMap, Observable, toArray } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Capacity } from '../models/capacity.model';
import { Unicorn } from '../models/unicorn.model';
import { CapacitiesService } from './capacities.service';

@Injectable({
  providedIn: 'root',
})
export class UnicornsService {
  private urlUnicorns = `${environment.apiUrl}/unicorns`;

  constructor(private http: HttpClient, private capacitiesService: CapacitiesService) {}

  public getListUnicorns(): Observable<Unicorn[]> {
    return this.http.get<Unicorn[]>(this.urlUnicorns);
  }

  public getUnicorn(id: number): Observable<Unicorn> {
    return this.http.get<Unicorn>(this.urlUnicorns + '/' + id);
  }

  public getAllWithCapacitiesLabels(): Observable<Unicorn[]> {
    return this.getListUnicorns().pipe(
      concatAll(),
      mergeMap((unicorn: Unicorn): Observable<Unicorn> => {
        return from(unicorn.capacities).pipe(
          mergeMap((capacityId: number): Observable<Capacity> => {
            return this.capacitiesService.getCapacity(capacityId);
          }),
          map((capacity: Capacity): string => capacity.label),
          toArray(),
          map((capacitiesLabels: string[]): Unicorn => ({ ...unicorn, capacitiesLabels }))
        );
      }),
      toArray(),
      map((unicorns) => [...unicorns].sort((u1, u2) => u1.id - u2.id))
    );
  }
}
