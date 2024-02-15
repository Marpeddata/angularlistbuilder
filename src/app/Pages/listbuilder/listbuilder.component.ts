import { Component, OnInit } from '@angular/core';
import {AccordionComponent} from './accordion/accordion.component';
import { ListviewComponent } from './listview/listview.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

interface Model {
  name: string;
  points: number;
  size: number;
}

@Component({
  selector: 'app-listbuilder',
  standalone: true,
  imports: [AccordionComponent, ListviewComponent, NgbDropdownModule],
  templateUrl: './listbuilder.component.html',
  styleUrls: ['./listbuilder.component.css']
})
export class ListbuilderComponent implements OnInit {

  itemser: any = [{header: 'First', body: "first body"}, {header: 'Second', body: "Second body"}, {header: 'Third', body: "Third body"}];


  
  
  listOfModels: Model[] = [
    {
      name: 'Beast Snagga Boyz',
      points: 120,
      size: 10
      
    },
    {
      name: 'Deff Dread',
      points: 150,
      size: 1
      
    },
    {
      name: 'Mozzy',
      points: 240,
      size: 1
      
    },
    {
      name: 'Nobz',
      points: 330,
      size: 15
      
    },
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
