import {AfterContentInit, Component, Input, ContentChildren, QueryList} from '@angular/core';
import {ProwebAccordionItemComponent} from '../proweb-accordion-item/proweb-accordion-item.component';

@Component({
  selector: 'app-proweb-accordion',
  templateUrl: './proweb-accordion.component.html',
  styleUrls: ['./proweb-accordion.component.css']
})
export class ProwebAccordionComponent implements AfterContentInit {

  @Input() multi: boolean;
  @ContentChildren(ProwebAccordionItemComponent) items: QueryList<ProwebAccordionItemComponent>;
  auxItems = [];

  ngAfterContentInit() {
    this.items.forEach(item => {
      item.opened = 'false';
      this.auxItems.push(item);
    });
  }

}
