import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAppComponent } from './pages/main-app/main-app.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';

@NgModule({
  declarations: [
    AppComponent,
    MainAppComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactPageComponent,
    MovesListComponent,
    ContactFilterComponent,
    AppHeaderComponent,
    ContactEditComponent,
    LoginPageComponent,
    TransferFundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
