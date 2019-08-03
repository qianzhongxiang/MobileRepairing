import { DataSource } from '@angular/cdk/table';
import { Models, Brands } from '../entities';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModelsService } from '../service/models.service';
import { CollectionViewer } from '@angular/cdk/collections';
import { BrandsService } from '../service/brands.service';
import { MatPaginator } from '@angular/material/paginator';

export class BrandsDataSource extends DataSource<Brands> {
    public Data: Brands[];
    private subject = new BehaviorSubject<Brands[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    constructor(private service: BrandsService, private paginator?: MatPaginator) { super(); }
    connect(collectionViewer: CollectionViewer): Observable<Brands[]> {
        return this.subject.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.subject.complete();
        this.loadingSubject.complete();
    }

    load(filter = '', sortDirection = 'asc', pageIndex = 0, pageSize = 50, stat?: number) {
        this.loadingSubject.next(true);
        this.service.Load({ pageIndex: pageIndex, pageSize: pageSize, stat: stat }).subscribe(ds => {
            this.subject.next(this.Data = ds.data);
            if (this.paginator) { this.paginator.length = ds.count; }
        });
    }
}
