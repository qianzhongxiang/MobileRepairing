import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrandsService } from 'src/app/service/brands.service';

@Component({
  selector: 'app-brands-add',
  templateUrl: './brands-add.component.html',
  styleUrls: ['./brands-add.component.css']
})
export class BrandsAddComponent implements OnInit {
  public Name = '';
  public Msg = '';
  constructor(private matDialogRef: MatDialogRef<BrandsAddComponent>, @Inject(MAT_DIALOG_DATA) public Data,
    private brandsService: BrandsService) { }

  ngOnInit() {

  }

  public Save() {
    this.brandsService.Add(this.Name).subscribe(v => {
      this.matDialogRef.close(true);
    }, e => {
      this.Msg = e.toString();
    });
  }
  public Cancel() {
    this.matDialogRef.close(false);
  }
}
