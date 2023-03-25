import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  @Output() viewClick = new EventEmitter();
  @Output() editClick = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.viewClick.emit();
  }
}
