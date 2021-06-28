import { Component, OnInit } from '@angular/core';
import { WellList } from './well-list.model';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.scss']
})
export class WellListComponent implements OnInit {

  wellList: WellList[] = [];
  wellSourceKey: any = '';
  constructor() { }

  ngOnInit(): void {

    this.wellList = [
      { name: 'Byron	Perkins', type: 'Type1', sourceKey: '1001' },
      { name: 'Maria	Nelson', type: 'Type2', sourceKey: '1002' },
      { name: 'Roman	Anderson', type: 'Type1', sourceKey: '1003' },
    ];
  }

  fnClickWell(id): any {
    this.wellSourceKey = id;
  }

  addWellDetails(value): any {
    this.wellList.unshift(value);
    this.wellSourceKey = '';

  }
}
