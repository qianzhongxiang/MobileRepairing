import { Component, OnInit, Inject } from '@angular/core';
import { Models } from 'src/app/entities';
import { BrandsService } from 'src/app/service/brands.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrandsDataSource } from 'src/app/brands/brands-data-source';
import { Brand } from 'src/app/service/order-list.service';
import { ModelsService } from 'src/app/service/models.service';

@Component({
  selector: 'app-models-add',
  templateUrl: './models-add.component.html',
  styleUrls: ['./models-add.component.css']
})
export class ModelsAddComponent implements OnInit {
  public Data: Models = {};
  public Brands: BrandsDataSource;
  public Msg: string;
  constructor(private matDialogRef: MatDialogRef<ModelsAddComponent>, @Inject(MAT_DIALOG_DATA) public data,
    private brandsService: BrandsService, private modelsService: ModelsService) {
    this.Brands = new BrandsDataSource(brandsService);
    this.Brands.load('', 'asc', 0, 200);
  }

  ngOnInit() {
    this.brandsService.All();
  }
  public Save() {
    this.modelsService.Add(this.Data.brandsId, this.Data.name).subscribe(() => this.matDialogRef.close(true),
      (m) => this.Msg = m as any);
  }

  public Cancel() {
    this.matDialogRef.close(false);
  }
}
