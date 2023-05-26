import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private parentId:number|null = null;
  private pageNo:number = 0;
  private pageSize:number = 2;

  setParentId(id:number) {
    this.parentId = id;
  }

  getParentId():number|null {
    return this.parentId;
  }

  setPageNo(page:number) {
    this.pageNo = page;
  }

  getPageNo():number {
    return this.pageNo;
  }

  setPageSize(size:number) {
    this.pageSize = size;
  }

  getPageSize():number {
    return this.pageSize;
  }

}