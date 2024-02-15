import { Component, OnInit, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';




@Component({
  selector: 'app-listview',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css'],
})
export class ListviewComponent implements OnInit {

  @Input()  listOfModels: any;


  constructor() { }

  ngOnInit() {
  }

}
