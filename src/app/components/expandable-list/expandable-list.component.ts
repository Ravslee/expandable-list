import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-expandable-list',
  templateUrl: './expandable-list.component.html',
  styleUrls: ['./expandable-list.component.css']
})
export class ExpandableListComponent implements OnInit {

  @Input() focused = false;
  @Input() title: string = "";

  @Input() level01Items: { [key: string]: any } = {};
  level1Items: any[];
  @Input() level2Items: any[] = undefined;
  @Input() level3Items: any[] = undefined;

  @Output() itemClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {


  }

  toggleCollapse0(index, name) {
    const headerElementId: string = `level-0-Header-${index}`;
    const contentElementId: string = `level-0-Content-${index}`;

    const headerEl = document.getElementById(headerElementId);
    const contentEl = document.getElementById(contentElementId);

    if (headerElementId.startsWith("level-0-Header")) {
      this.level1Items = this.level01Items[name];
    }

    headerEl.classList.toggle("active");
    // var content = headerEl.nextElementSibling as HTMLElement;


    if (contentEl.style.maxHeight) {
      contentEl.style.maxHeight = null;
    } else {
      contentEl.style.maxHeight = contentEl.scrollHeight + "px";
    }

    // this.itemClick.emit(name)
  }

}
