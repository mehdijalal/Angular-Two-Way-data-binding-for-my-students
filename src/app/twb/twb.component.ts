import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-twb',
  templateUrl: './twb.component.html',
  styleUrls: ['./twb.component.scss']
})
export class TwbComponent {

  @Input()  size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

}
