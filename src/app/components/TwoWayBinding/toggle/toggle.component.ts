import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // checked= true

  @Input() checked!: boolean;
  @Output() checkedChanged = new EventEmitter<boolean>();

  toggle() {
    this.checked = !this.checked;
    this.checkedChanged.emit(this.checked);
  }
}
