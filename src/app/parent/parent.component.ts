import { Component } from '@angular/core';
import { APIService } from '../services/ApiService';
import { Parent } from '../services/Model';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/DataService';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  pageNo:number;
  pageSize:number;
  total:number;
  parentList:Array<Parent> = [];

  constructor(private api: APIService, private data:DataService, private router: Router, private route: ActivatedRoute){
    this.pageNo = this.data.getPageNo();
    this.pageSize = this.data.getPageSize();
    this.total = 0;
  }

  ngOnInit() {
    this.getParentData();
  }

  getParentData() {
    this.api.getParentData(this.pageNo, this.pageSize).then((res:any)=> {
      if(res && res.success) {
        this.parentList = res.data;
        this.total = res.total;
        this.pageNo = res.page + 1;
        this.pageSize = res.pageSize;
        this.data.setPageNo(res.page);
        this.data.setPageSize(res.pageSize);
      } else {
        this.parentList = [];
        this.total = 0;
        this.pageNo = 0;
      }
    })
  }

  onPageChange(event:any) {
    console.log(event);
    this.pageNo = event.page - 1;
    this.pageSize = event.pageSize;
    this.getParentData();
  }

  openChild(parentId:number) {
    this.data.setParentId(parentId);
    this.router.navigate([parentId], {relativeTo: this.route})
  }
}
