import { Component, OnInit, Input } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() items: any;
  // items = [{header: 'First', body: "first body"}, {header: 'Second', body: "Second body"}, {header: 'Third', body: "Third body"}];


  constructor() { }

  ngOnInit() {
  }

}
