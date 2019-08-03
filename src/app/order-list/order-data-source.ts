import { Order } from '../entities';
import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';
import { OrderListService } from '../service/order-list.service';
import { MatPaginator } from '@angular/material/paginator';

export class OrderDataSource extends DataSource<Order> {
    private ordersSubject = new BehaviorSubject<Order[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    constructor(private orderListService: OrderListService, private paginator?: MatPaginator) { super(); }
    connect(collectionViewer: CollectionViewer): Observable<Order[]> {
        return this.ordersSubject.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.ordersSubject.complete();
        this.loadingSubject.complete();
    }

    loadOrders(filter = '', sortDirection = 'asc', pageIndex = 0, pageSize = 50, stat?: number) {
        this.loadingSubject.next(true);
        this.orderListService.Refresh({ pageIndex: pageIndex, pageSize: pageSize, stat: stat }).subscribe(ds => {
            this.ordersSubject.next(ds.data);
            if (this.paginator) { this.paginator.length = ds.count; }
        });
    }

}
