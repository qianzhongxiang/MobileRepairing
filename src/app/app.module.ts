import { ConfigService } from './service/config.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogupComponent } from './logup/logup.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { FootMenuBarComponent } from './foot-menu-bar/foot-menu-bar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderFormCheckComponent } from './order-form-check/order-form-check.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { UserItemComponent } from './user-item/user-item.component';
import { SetCareerComponent } from './set-career/set-career.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { BookRepairingComponent } from './book-repairing/book-repairing.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderFormStoreComponent } from './order-form-store/order-form-store.component';
import { BlankOrderSubmittedComponent } from './blank-order-submitted/blank-order-submitted.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogupComponent,
    UserEntryComponent,
    FootMenuBarComponent,
    OrderFormCheckComponent,
    ManageUserComponent,
    UserItemComponent,
    SetCareerComponent,
    InfoDialogComponent,
    BookRepairingComponent,
    OrderDetailsComponent,
    OrderFormStoreComponent,
    BlankOrderSubmittedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: (configService: ConfigService) => () => configService.Load(),
      deps: [ConfigService], multi: true
    },
    HttpClient
  ],
  bootstrap: [AppComponent],
  entryComponents: [UserEntryComponent,
    InfoDialogComponent]
})
export class AppModule { }
