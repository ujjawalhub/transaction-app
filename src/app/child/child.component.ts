import { Component } from '@angular/core';
import { DataService } from '../services/DataService';
import { Router } from '@angular/router';
import { APIService } from '../services/ApiService';
import { Child } from '../services/Model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  parentId:number;
  childList:Array<Child> = [];

  constructor(private data:DataService, private router: Router, private api: APIService) {
    this.parentId = this.data.getParentId()||0;
  }

  ngOnInit() {
    if(this.parentId) {
      this.getChildData();
    } else {
      this.back();
    }
  }

  getChildData() {
    this.api.getChildData(this.parentId).then(res=> {
      if(res && res.success) {
        this.childList = res.data;
      } else {
        this.childList = [];
      }
    });
  }

  back() {
    this.router.navigate(['parent']);
  }
}
