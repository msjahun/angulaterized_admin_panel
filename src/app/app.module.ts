import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { WidgetPageComponent } from './widget-page/widget-page.component';
import { ChartjsPageComponent } from './chartjs-page/chartjs-page.component';
import { FlotPageComponent } from './flot-page/flot-page.component';
import { InlinePageComponent } from './inline-page/inline-page.component';
import { MorrisPageComponent } from './morris-page/morris-page.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { InvoicePageComponent } from './invoice-page/invoice-page.component';
import { InvoicePrintPageComponent } from './invoice-print-page/invoice-print-page.component';
import { LockscreenPageComponent } from './lockscreen-page/lockscreen-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PacePageComponent } from './pace-page/pace-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AdvancedPageComponent } from './advanced-page/advanced-page.component';
import { EditorsPageComponent } from './editors-page/editors-page.component';
import { GeneralPageComponent } from './general-page/general-page.component';
import { BoxedPageComponent } from './boxed-page/boxed-page.component';
import { CollapesedSidebarPageComponent } from './collapesed-sidebar-page/collapesed-sidebar-page.component';
import { FixedPageComponent } from './fixed-page/fixed-page.component';
import { TopNavPageComponent } from './top-nav-page/top-nav-page.component';
import { ComposePageComponent } from './compose-page/compose-page.component';
import { MailboxPageComponent } from './mailbox-page/mailbox-page.component';
import { ReadMailPageComponent } from './read-mail-page/read-mail-page.component';
import { DataPageComponent } from './data-page/data-page.component';
import { SimplePageComponent } from './simple-page/simple-page.component';
import { ButtonsPageComponent } from './buttons-page/buttons-page.component';
import { IconsPageComponent } from './icons-page/icons-page.component';
import { ModalsPageComponent } from './modals-page/modals-page.component';
import { SlidersPageComponent } from './sliders-page/sliders-page.component';
import { TimelinePageComponent } from './timeline-page/timeline-page.component';
import { ErrorNotFoundPageComponent } from './error-not-found-page/error-not-found-page.component';
import { ErrorInternalServerPageComponent } from './error-internal-server-page/error-internal-server-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    WidgetPageComponent,
    ChartjsPageComponent,
    FlotPageComponent,
    InlinePageComponent,
    MorrisPageComponent,
    BlankPageComponent,
    InvoicePageComponent,
    InvoicePrintPageComponent,
    LockscreenPageComponent,
    LoginPageComponent,
    PacePageComponent,
    ProfilePageComponent,
    RegisterPageComponent,
    AdvancedPageComponent,
    EditorsPageComponent,
    GeneralPageComponent,
    BoxedPageComponent,
    CollapesedSidebarPageComponent,
    FixedPageComponent,
    TopNavPageComponent,
    ComposePageComponent,
    MailboxPageComponent,
    ReadMailPageComponent,
    DataPageComponent,
    SimplePageComponent,
    ButtonsPageComponent,
    IconsPageComponent,
    ModalsPageComponent,
    SlidersPageComponent,
    TimelinePageComponent,
    ErrorNotFoundPageComponent,
    ErrorInternalServerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
