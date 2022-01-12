import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Unicorn } from 'src/app/shared/models/unicorn.model';

@Component({
  selector: 'app-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent {
  @Input() unicorn!: Unicorn;
  @Output() unicornRemove = new EventEmitter<Unicorn>();

  constructor() {}

  public removeUnicorn(): void {
    // console.log(this.unicorn);
    this.unicornRemove.emit(this.unicorn);
  }
}
