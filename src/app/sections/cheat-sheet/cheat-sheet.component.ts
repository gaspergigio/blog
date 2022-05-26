import { Component, OnInit, Input } from '@angular/core';
import { Cheatsheet } from 'src/app/models/cheatsheet.model';

@Component({
  selector: 'app-cheat-sheet',
  templateUrl: './cheat-sheet.component.html',
  styleUrls: ['./cheat-sheet.component.scss']
})
export class CheatSheetComponent implements OnInit {
  @Input() cheatsheets!: Cheatsheet[];
  constructor() { }

  ngOnInit(): void {
  }

}
