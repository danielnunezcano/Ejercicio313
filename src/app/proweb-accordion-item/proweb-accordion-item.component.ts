import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-proweb-accordion-item',
  templateUrl: './proweb-accordion-item.component.html',
  styleUrls: ['./proweb-accordion-item.component.css']
})
export class ProwebAccordionItemComponent implements OnInit {

  @Input('label') label;
  @Input() contenido;
  @Input() opened;
  labelComponent: string;
  bool: boolean;


  constructor() {
  }

  pulsar() {
    if (this.bool) {
      this.bool = false;
      this.labelComponent = '\u21E8' + this.label;
    } else {
      this.bool = true;
      this.labelComponent = '\u21E9' + this.label;
    }
  }

  ngOnInit() {
    if (this.opened === 'true') {
      this.bool = false;
      this.labelComponent = '\u21E8' + this.label;
    } else {
      this.bool = true;
      this.labelComponent = '\u21E9' + this.label;
    }
  }

}
