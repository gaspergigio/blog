import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-text',
  templateUrl: './big-text.component.html',
  styleUrls: ['./big-text.component.scss']
})
export class BigTextComponent implements OnInit {
  @Input() text!: string
  constructor() { }

  ngOnInit(): void {
  }

}
