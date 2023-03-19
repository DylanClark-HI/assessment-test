import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
