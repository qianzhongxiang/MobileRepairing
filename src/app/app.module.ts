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
import { MatDialogModule } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderFormCheckComponent } from './order-form-check/order-form-check.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { UserItemComponent } from './user-item/user-item.component';
import { SetCareerComponent } from './set-career/set-career.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogupComponent,
    UserEntryComponent,
    FootMenuBarComponent,
    OrderFormComponent,
    OrderFormCheckComponent,
    ManageUserComponent,
    UserItemComponent,
    SetCareerComponent,
    InfoDialogComponent,
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
  entryComponents: [OrderFormComponent, OrderFormCheckComponent, UserEntryComponent,
    InfoDialogComponent]
})
export class AppModule { }
