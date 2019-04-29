import { ManageUserComponent } from './manage-user/manage-user.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderListComponent } from './order-list/order-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IntroducingComponent } from './inctoducing/introducing.component';
import { NgbModule, NgbCarouselModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { SetCareerComponent } from './set-career/set-career.component';
import { BookRepairingComponent } from './book-repairing/book-repairing.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OrderFormCheckComponent } from './order-form-check/order-form-check.component';
import { OrderFormStoreComponent } from './order-form-store/order-form-store.component';

const routes: Routes = [
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  { path: 'introducing', component: IntroducingComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'orderInStore', component: OrderFormStoreComponent },
  // { path: 'book', component: BookRepairingComponent },
  { path: 'manageuser', component: ManageUserComponent },
  { path: 'setcareer', component: SetCareerComponent },
  { path: 'order', component: OrderFormComponent }
];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    NgbModule,
    NgbCarouselModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [IntroducingComponent,
    OrderListComponent,
    OrderItemComponent,
    OrderFormComponent,
    ImageCarouselComponent
  ],
  providers: [NgbCarouselConfig],
  entryComponents: [OrderFormCheckComponent]
})
export class AppRoutingModule { }
