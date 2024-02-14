import { Component, OnInit } from '@angular/core';
import {AccordionComponent} from './accordion/accordion.component';

@Component({
  selector: 'app-listbuilder',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './listbuilder.component.html',
  styleUrls: ['./listbuilder.component.css']
})
export class ListbuilderComponent implements OnInit {

  items: any = [{header: 'First', body: "first body"}, {header: 'Second', body: "Second body"}, {header: 'Third', body: "Third body"}];

  constructor() { }

  ngOnInit() {
    
  }

}
