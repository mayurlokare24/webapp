import { Component, OnInit } from '@angular/core';
import { ValueMap } from '../model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  menuTitle: string;
  menuDB:ValueMap[] = [];

  constructor() { }

  ngOnInit() {
  }

  addMenu() {
    if (this.menuTitle.length > 0 && !this.hasItem(this.menuDB, this.menuTitle)) {
      let obj = new ValueMap(this.menuTitle);
      this.menuDB.push(obj);
    }
  }

  hasItem(arr: ValueMap[], value: string) {
    let result = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].key === value) {
        result = true;
        break;
      }
    }
    return result;
  }
}
