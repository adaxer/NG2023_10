import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: []
})
export class LedComponent {
  @Input() color: string = '#4CAF50';  // default to green color
  @Output() colorChanged = new EventEmitter<string>();

  updateColor(newColor: string): void {
    this.color = newColor;
    this.colorChanged.emit(this.color);
  }
}
