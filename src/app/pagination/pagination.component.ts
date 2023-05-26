import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent {

  @Input() pageNumber: any;
  @Input() numberOfElements: any;
  @Input() totalNumbers: any;
  @Output() changeEmitter = new EventEmitter();
  @Output() sizeEmitter = new EventEmitter();
  @Input() endPage: any;
  @Input() pageSize: any;
  @Input() startingPageNumber: any;

  public pageNumberList: any = [];

  ngOnChanges(changes: { [propName: string]: any }) {
    let check = changes['endPage'];
    this.endPage = Math.ceil(this.totalNumbers / this.pageSize);
    this.pageNumberList = [];
    if (!check || check.previousValue != check.currentValue) {
      for (let i = 0; i < this.endPage; i++) {
        this.pageNumberList.push(i + 1);
      }
    }
    this.startingPageNumber = Number(this.pageNumber);
  }

  onPageSizeChange() {
    this.pageNumber = 1;
    this.onPageChange();
  }

    onPageChange() {
      if (!isNaN(this.pageNumber) && this.pageNumber <= this.endPage && this.pageNumber > 0) {
        this.endPage = Math.ceil(this.totalNumbers / this.pageSize);
        let pageData = { page: this.pageNumber, pageSize: this.pageSize, endPage: this.endPage };
        this.changeEmitter.emit(pageData);
      } else {
        this.pageNumber = null
      }
    }

    changePageNo(position:any) {
      if (this.pageNumber) {
        switch (position) {
          case 'inc':
            if (this.pageNumber != this.endPage) {
              if (this.pageNumber < this.endPage) {
                ++this.pageNumber;
              }
              this.onPageChange();
            }
            return;
          case 'dec':
            if (this.pageNumber != 1) {
              if (this.pageNumber > 1) {
                --this.pageNumber;
              }
              this.onPageChange();
            }
            return;
        }
      }
    }

    changePage(position:any) {
      switch (position) {
        case 'inc':
          if (this.pageNumber != this.endPage) {
            this.pageNumber = this.endPage;
            this.onPageChange();
          }
          return;
        case 'dec':
          if (this.pageNumber != 1) {
            this.pageNumber = 1;
            this.onPageChange();
          }
        return;
      }
    }

  refresh() {
    this.pageNumber = 1;
    this.onPageChange();
  }

}