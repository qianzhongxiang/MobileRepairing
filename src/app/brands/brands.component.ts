import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BrandsService } from '../service/brands.service';
import { BrandsDataSource } from './brands-data-source';
import { MatDialog } from '@angular/material/dialog';
import { BrandsAddComponent } from './brands-add/brands-add.component';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Brands } from '../entities';
import { DelConfirmComponent } from '../del-confirm/del-confirm.component';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['select', 'name', 'updatedTime', 'createdTime'];
  dataSource: BrandsDataSource;
  selection = new SelectionModel<Brands>(true, []);
  @ViewChild(MatPaginator)
  private paginator: MatPaginator;
  constructor(private brandsService: BrandsService, private matDialog: MatDialog) {
  }
  ngAfterViewInit(): void {
    this.dataSource = new BrandsDataSource(this.brandsService, this.paginator);
    this.paginator.page.subscribe(this.Search.bind(this)
    );
    this.Search();
  }
  public Search() {
    this.dataSource.load('',
      'asc',
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }
  ngOnInit() {
  }

  public Add() {
    const ref = this.matDialog.open(BrandsAddComponent, { data: {}, width: '95%' });
    ref.afterClosed().subscribe(() => {
      this.Search();
    });
  }
  public Del() {
    if (this.selection.isSelected) {
      const ref = this.matDialog.open(DelConfirmComponent, { data: {}, width: '65%' });
      ref.afterClosed().subscribe((v) => {
        if (v) {
          const ids = this.selection.selected.map(d => d.id);
          this.brandsService.Delete(ids).subscribe(this.Search.bind(this));
        }
      });
    }
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.Data.length;
    return numSelected === numRows;
  }
  public masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.Data.forEach(row => this.selection.select(row));
  }
}
