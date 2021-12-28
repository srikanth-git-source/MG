import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OverlayContainer } from "@angular/cdk/overlay";
import { CustomOverlayContainer } from "./theme/utils/custom-overlay-container";
import { AgmCoreModule, GoogleMapsAPIWrapper, AgmMarker } from "@agm/core";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { SharedModule } from "./shared/shared.module";
import { PipesModule } from "./theme/pipes/pipes.module";
import { routing } from "./app.routing";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { NotFoundComponent } from "./me/not-found/not-found.component";
import { AppSettings } from "./app.settings";
import { LoginComponent } from "./login/login.component";
import { SidenavComponent } from "./theme/components/sidenav/sidenav.component";
import { VerticalMenuComponent } from "./theme/components/menu/vertical-menu/vertical-menu.component";
import { HorizontalMenuComponent } from "./theme/components/menu/horizontal-menu/horizontal-menu.component";
import { BreadcrumbComponent } from "./theme/components/breadcrumb/breadcrumb.component";
import { FlagsMenuComponent } from "./theme/components/flags-menu/flags-menu.component";
import { FullScreenComponent } from "./theme/components/fullscreen/fullscreen.component";
import { ApplicationsComponent } from "./theme/components/applications/applications.component";
import { MessagesComponent } from "./theme/components/messages/messages.component";
import { UserMenuComponent } from "./theme/components/user-menu/user-menu.component";
import { ModalModule } from "ngx-bootstrap";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { ConfirmationPopoverModule } from "angular-confirmation-popover";
import { PasswordDialogComponent } from "./theme/components/user-menu/password-dialog/password-dialog.component";
import { ProfileDialogComponent } from "./theme/components/user-menu/profile-dialog/profile-dialog.component";
import { MglTimelineModule } from "angular-mgl-timeline";
import { ConfirmDialogComponent } from "./shared/confirm-dialog/confirm-dialog.component";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { ToasterModule } from "angular2-toaster";
import { DragDropModule } from "primeng/dragdrop";
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { TooltipModule } from "ngx-tooltip";
import { AddNoteDialogComponent } from "./shared/add-note-dialog/add-note-dialog.component";
import { DataTableModule } from "angular2-datatable";
import { UniversalFilterComponent } from "./layout/universal-filter/universal-filter.component";
import { AlertService } from "./shared/services/alert.service";
import {MessageCenterComponent} from './message-center/message-center.component';
import { DndModule } from 'ngx-drag-drop';
import {ChartsModule} from 'ng2-charts';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {
  AgmJsMarkerClustererModule,
  ClusterManager
} from "@agm/js-marker-clusterer";
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ChecklistComponent } from './checklist/checklist.component';
import { CalenderComponent } from './calender/calender.component';
import { AssignComponent } from "./assign/assign.component";
import { QuestionsComponent } from './questions/questions.component';
import { AddChecklistComponent } from './add-checklist/add-checklist.component';
import { AuditsComponent } from "./audits/audits.component";
import { DashboardComponent } from "./me/dashboard/dashboard.component";
import { CreateticketsComponent } from "./tickets/createtickets/createtickets.component";
import { TicketreportsComponent } from "./tickets/ticketreports/ticketreports.component";
import { UpdateticketComponent } from "./tickets/updateticket/updateticket.component";
import { TicketsComponent } from "./tickets/tickets.component";
import { ChecklistDashboardComponent } from "./checklist-dashboard/checklist-dashboard.component";
import { ParameterSetupComponent } from "./parameter-setup/parameter-setup.component";
import { ParameterDashboardComponent } from './parameter-dashboard/parameter-dashboard.component';
import { MetricComponent } from "./checklist-dashboard/metric/metric.component";
import { ParameterSetupNewComponent } from "./parameter-setup-new/parameter-setup-new.component";
import { ParMetricComponent } from "./parameter-dashboard/par-metric/par-metric.component";
import { NewDashboardComponent } from './new-dashboard/new-dashboard.component';
import { MasterDataComponent } from "./me/admin/master-data/master-data.component";



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true,
};

@NgModule({
  imports: [
    BrowserModule,
   
    BrowserAnimationsModule,
    
    FormsModule,
    TooltipModule,
    ReactiveFormsModule,
    MatCarouselModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyD1rdFVTvmZLUDZI4F5FCGY-XC0_VvQZXg",
    }),
    PerfectScrollbarModule,
    ToasterModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SharedModule,
    PipesModule,
    TabViewModule,
    routing,
    ModalModule.forRoot(),
    HttpClientModule,
    MglTimelineModule,
    DragDropModule,
    HttpClientJsonpModule,
    TableModule,
    DndModule,
    AgmJsMarkerClustererModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: "danger", // set defaults here
    }),
    DataTableModule,
    ChartsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    
    NotFoundComponent,
    SidenavComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    FlagsMenuComponent,
    FullScreenComponent,
    ApplicationsComponent,
    MessagesComponent,
    UserMenuComponent,
    ParameterSetupNewComponent,
    LoginComponent,
    PasswordDialogComponent,
    ConfirmDialogComponent,
    ProfileDialogComponent,
    AddNoteDialogComponent,
    UniversalFilterComponent,
    MessageCenterComponent,
    ForgotPasswordComponent,
    ChecklistComponent,
    CalenderComponent,
    AssignComponent,
    QuestionsComponent,
    AddChecklistComponent,
    AuditsComponent,
    DashboardComponent,
    TicketreportsComponent,
    CreateticketsComponent,
    UpdateticketComponent,
    TicketsComponent,
    ChecklistDashboardComponent,
    MetricComponent,
    ParMetricComponent,
    ParameterSetupComponent,
    ParameterDashboardComponent,
    NewDashboardComponent,
    MasterDataComponent,
    
  ],
  entryComponents: [
    VerticalMenuComponent,
    PasswordDialogComponent,
    ConfirmDialogComponent,
    ProfileDialogComponent,
    AddNoteDialogComponent,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AppSettings,
    GoogleMapsAPIWrapper,AlertService,ClusterManager,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
