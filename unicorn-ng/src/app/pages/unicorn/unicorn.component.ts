import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Unicorn } from 'src/app/shared/models/unicorn.model';
import { UnicornsService } from 'src/app/shared/services/unicorns.service';

@Component({
  selector: 'app-unicorn',
  templateUrl: './unicorn.component.html',
  styleUrls: ['./unicorn.component.scss'],
})
export class UnicornComponent {
  public unicorn: Unicorn | undefined;

  constructor(private route: ActivatedRoute, private unicornsService: UnicornsService) {
    this.route.params.subscribe((params: Params) => {
      unicornsService.getUnicorn(params['id']).subscribe((unicorn) => (this.unicorn = unicorn));
    });
  }
}
