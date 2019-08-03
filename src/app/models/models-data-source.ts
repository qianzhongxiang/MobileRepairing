import { DataSource } from '@angular/cdk/table';
import { Models } from '../entities';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModelsService } from '../service/models.service';
import { CollectionViewer } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';

export class ModelsDataSource extends DataSource<Models> {
    private modelsSubject = new BehaviorSubject<Models[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public Data: Models[] = [];
    constructor(private modelsService: ModelsService, private paginator: MatPaginator) { super(); }
    connect(collectionViewer: CollectionViewer): Observable<Models[]> {
        return this.modelsSubject.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.modelsSubject.complete();
        this.loadingSubject.complete();
    }

    load(filter = '', sortDirection = 'asc', pageIndex = 0, pageSize = 50, stat?: number) {
        this.loadingSubject.next(true);
        this.modelsService.Load({ pageIndex: pageIndex, pageSize: pageSize, stat: stat }).subscribe(ds => {
            this.Data = ds.data;
            this.modelsSubject.next(ds.data);
            if (this.paginator) { this.paginator.length = ds.count; }
        });
    }

}
