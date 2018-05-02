import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ButtonsPageComponent } from './buttons-page/buttons-page.component';
import { SimplePageComponent } from './simple-page/simple-page.component';
import { DataPageComponent } from './data-page/data-page.component';
import { GeneralPageComponent } from './general-page/general-page.component';
import { IconsPageComponent } from './icons-page/icons-page.component';
import { ModalsPageComponent } from './modals-page/modals-page.component';
import { SlidersPageComponent } from './sliders-page/sliders-page.component';
import { TimelinePageComponent } from './timeline-page/timeline-page.component';
import { MailboxPageComponent } from './mailbox-page/mailbox-page.component';
import { ComposePageComponent } from './compose-page/compose-page.component';
import { TopNavPageComponent } from './top-nav-page/top-nav-page.component';
import { ReadMailPageComponent } from './read-mail-page/read-mail-page.component';
import { FixedPageComponent } from './fixed-page/fixed-page.component';
import { CollapesedSidebarPageComponent } from './collapesed-sidebar-page/collapesed-sidebar-page.component';
import { BoxedPageComponent } from './boxed-page/boxed-page.component';
import { EditorsPageComponent } from './editors-page/editors-page.component';
import { AdvancedPageComponent } from './advanced-page/advanced-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PacePageComponent } from './pace-page/pace-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LockscreenPageComponent } from './lockscreen-page/lockscreen-page.component';
import { InvoicePrintPageComponent } from './invoice-print-page/invoice-print-page.component';
import { InvoicePageComponent } from './invoice-page/invoice-page.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { MorrisPageComponent } from './morris-page/morris-page.component';
import { InlinePageComponent } from './inline-page/inline-page.component';
import { FlotPageComponent } from './flot-page/flot-page.component';
import { ChartjsPageComponent } from './chartjs-page/chartjs-page.component';
import { WidgetPageComponent } from './widget-page/widget-page.component';
import { ErrorInternalServerPageComponent } from './error-internal-server-page/error-internal-server-page.component';
import { ErrorNotFoundPageComponent } from './error-not-found-page/error-not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pages/widget', component: WidgetPageComponent },
  { path: 'pages/chartjs', component: ChartjsPageComponent },
  { path: 'pages/flot', component: FlotPageComponent },
  { path: 'pages/inline', component: InlinePageComponent },
  { path: 'pages/morris', component: MorrisPageComponent },
  { path: 'pages/404', component: ErrorNotFoundPageComponent },
  { path: 'pages/500', component: ErrorInternalServerPageComponent },
  { path: 'pages/blank', component: BlankPageComponent },
  { path: 'pages/invoice', component: InvoicePageComponent },
  { path: 'pages/invoice-print', component: InvoicePrintPageComponent },
  { path: 'pages/lockscreen', component: LockscreenPageComponent },
  { path: 'pages/login', component: LoginPageComponent },
  { path: 'pages/pace', component: PacePageComponent },
  { path: 'pages/profile', component: ProfilePageComponent },
  { path: 'pages/register', component: RegisterPageComponent },
  { path: 'pages/advanced', component: AdvancedPageComponent },
  { path: 'pages/editors', component: EditorsPageComponent },
  { path: 'pages/general', component: GeneralPageComponent },
  { path: 'pages/boxed', component: BoxedPageComponent },
  { path: 'pages/collapesed-sidebar', component: CollapesedSidebarPageComponent },
  { path: 'pages/fixed', component: FixedPageComponent },
  { path: 'pages/top-nav', component: TopNavPageComponent },
  { path: 'pages/compose', component: ComposePageComponent },
  { path: 'pages/mailbox', component: MailboxPageComponent },
  { path: 'pages/read-mail', component: ReadMailPageComponent },
  { path: 'pages/data', component: DataPageComponent },
  { path: 'pages/simple', component: SimplePageComponent },
  { path: 'pages/buttons', component: ButtonsPageComponent },
  { path: 'pages/general', component: GeneralPageComponent },
  { path: 'pages/icons', component: IconsPageComponent },
  { path: 'pages/modals', component: ModalsPageComponent },
  { path: 'pages/sliders', component: SlidersPageComponent },
  { path: 'pages/timeline', component: TimelinePageComponent },
  { path: '**', component: ErrorNotFoundPageComponent }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})



export class AppRoutingModule { }
