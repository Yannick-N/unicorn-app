import { Component, OnInit } from '@angular/core';
import { Unicorn } from 'src/app/shared/models/unicorn.model';
import { UnicornsService } from 'src/app/shared/services/unicorns.service';

@Component({
  selector: 'app-unicorn-list',
  templateUrl: './unicorn-list.component.html',
  styleUrls: ['./unicorn-list.component.scss'],
})
export class UnicornListComponent implements OnInit {
  public unicornList: Unicorn[] = [];
  constructor(private unicornsService: UnicornsService) {}

  ngOnInit(): void {
    this.getUnicornsList();
  }

  public getUnicornsList(): void {
    this.unicornsService.getAllWithCapacitiesLabels().subscribe((unicors) => {
      console.log(unicors);
      this.unicornList = unicors;
    });
  }

  public addUnicornToBucket(addItem: Unicorn): void {
    console.log(addItem);
  }

  public removeUnicornFromList(removeItem: Unicorn): void {
    console.log(removeItem);
  }
}
