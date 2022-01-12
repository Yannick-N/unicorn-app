import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Capacity } from 'src/app/shared/models/capacity.model';
import { CapacitiesService } from 'src/app/shared/services/capacities.service';

@Component({
  selector: 'app-capacities',
  templateUrl: './capacities.component.html',
  styleUrls: ['./capacities.component.scss'],
})
export class CapacitiesComponent implements OnInit {
  public capacity: Capacity | undefined;

  constructor(private route: ActivatedRoute, private capacitiesService: CapacitiesService) {
    this.route.params.subscribe((params: Params) => {
      capacitiesService.getCapacity(params['id']).subscribe((capacity) => (this.capacity = this.capacity));
    });
  }

  ngOnInit(): void {}

  
}
