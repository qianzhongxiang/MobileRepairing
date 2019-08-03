import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ModelsDataSource } from './models-data-source';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ModelsService } from '../service/models.service';
import { Models } from '../entities';
import { ModelsAddComponent } from './models-add/models-add.component';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTable } from '@angular/material/table';
import { BrandsService } from '../service/brands.service';
import { DelConfirmComponent } from '../del-confirm/del-confirm.component';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['select', 'brand', 'model', 'updatedTime', 'createdTime'];
  dataSource: ModelsDataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<Models>;
  selection = new SelectionModel<Models>(true, []);
  public msg = '';

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.Data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.Data.forEach(row => this.selection.select(row));
  }

  constructor(public modelsService: ModelsService, public matDialog: MatDialog) {
  }

  ngAfterViewInit(): void {
    this.dataSource = new ModelsDataSource(this.modelsService, this.paginator);
    this.paginator.page.subscribe(this.Search.bind(this)
    );
    this.Search();
  }

  ngOnInit() {
  }
  public Search() {
    this.dataSource.load('',
      'asc',
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }

  public ItemClick(item: Models) {
    // const ref = this.matDialog.open(ModelsAddComponent, { data: item, width: '95%' });
    // ref.afterClosed().subscribe(this.Search.bind(this));
  }
  public Add() {
    const ref = this.matDialog.open(ModelsAddComponent, { data: {}, width: '95%' });
    ref.afterClosed().subscribe((b: boolean) => {
      if (b) {
        this.Search();
      }
    });
  }
  public Del() {
    if (this.selection.isSelected) {
      const ref = this.matDialog.open(DelConfirmComponent, { data: {}, width: '65%' });
      ref.afterClosed().subscribe((v) => {
        if (v) {
          const ids = this.selection.selected.map(d => d.id);
          this.modelsService.Delete(ids).subscribe(this.Search.bind(this));
        }
      });
    }
  }
}
