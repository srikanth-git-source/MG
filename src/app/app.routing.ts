import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./morris_garrage_admin/not-found/not-found.component";
import { MessageCenterComponent } from "./message-center/message-center.component";
import { ForgotPasswordComponent } from "./login/forgot-password/forgot-password.component";
import { ChecklistComponent } from "./checklist/checklist.component";
import { CalenderComponent } from "./calender/calender.component";
import { AssignComponent } from "./assign/assign.component";
import { QuestionsComponent } from "./questions/questions.component";
import { AddChecklistComponent } from "./add-checklist/add-checklist.component";
import { AuditsComponent } from "./audits/audits.component";
import { DashboardComponent } from "./morris_garrage_admin/dashboard/dashboard.component";
import { TicketreportsComponent } from "./tickets/ticketreports/ticketreports.component";
import { CreateticketsComponent } from "./tickets/createtickets/createtickets.component";
import { UpdateticketComponent } from "./tickets/updateticket/updateticket.component";
import { TicketsComponent } from "./tickets/tickets.component";
import { ChecklistDashboardComponent } from "./checklist-dashboard/checklist-dashboard.component";
import { ParameterSetupComponent } from "./parameter-setup/parameter-setup.component";
import { ParameterDashboardComponent } from "./parameter-dashboard/parameter-dashboard.component";
import { MetricComponent } from "./checklist-dashboard/metric/metric.component";

import { ParMetricComponent } from "./parameter-dashboard/par-metric/par-metric.component";
import { NewDashboardComponent } from "./new-dashboard/new-dashboard.component";
import { MasterDataComponent } from "./morris_garrage_admin/admin/master-data/master-data.component";
import { RadarStatisticsComponent } from "./morris_garrage_admin/radar/radar-statistics/radar-statistics.component";
import { RadarComponent } from "./morris_garrage_admin/radar/radar.component";
import { SetPasswordComponent } from "./login/set-password/set-password.component";

export const routes: Routes = [
  
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent,data:{breadcrumb:"Login"}},
  { path: "forgotpassword", component: ForgotPasswordComponent, data: {breadcrumb:"Not Found"}},
  { path: "setpassword", component: SetPasswordComponent, data: {breadcrumb:"Not Found"}},
  {
    path: "",
    component: LayoutComponent,
    children: [
      // {path:"dashboard",component:DashboardComponent,loadChildren:'./morris_garrage_admin/dashboard/dashboard.module#DashboardModule',data:{breadcrumb:'Dashboard'}},
      {path:"radar",component:RadarComponent,loadChildren:'./morris_garrage_admin/radar/radar.module#RadarModule',data:{breadcrumb:'Dashboard'}},
      { path: "", redirectTo: "radar", pathMatch: "full" },      
      { path: 'admin', loadChildren: './morris_garrage_admin/admin/admin.module#AdminModule', data: { breadcrumb: 'Carriers' } },
      { path: 'admin/organisation', loadChildren: './morris_garrage_admin/admin/organisations/organisations.module#OrganisationsModule', data: { breadcrumb: 'Carriers' } },
      { path: 'admin/master-data', loadChildren: './morris_garrage_admin/admin/master-data/master-data.module#MasterDataModule', data: { breadcrumb: 'Master Data' } },
      { path: "message-center", component:MessageCenterComponent, data: { breadcrumb: "Message Center" }},   
      // { path: "checklist", component:ChecklistComponent,  data: { breadcrumb: "Audit Bench-Checklists" }},   
      { path: "calender", component:CalenderComponent,data: { breadcrumb: "Calender" }},   
      { path: "assign", component:AssignComponent,data: { breadcrumb: "Audit Bench-Checklists" }},   
      { path: "questions", component:QuestionsComponent,data: { breadcrumb: "Audit Bench-Checklists" }}, 
      { path: "addchecklist", component:AddChecklistComponent,  data: { breadcrumb: "Add Checklist" }},  
      { path: "audits", component:AuditsComponent,loadChildren: './audits/audits.module#AuditsModule', data: { breadcrumb: "Audits" }}, 
      // { path: "new-dashboard", component:NewDashboardComponent,loadChildren: './new-dashboard/new-dashboard.module#NewDashboardModule', data: { breadcrumb: "Dashboard" }},, 
      // { path: "parameter-setup", component:ParameterSetupNewComponent,loadChildren: './parameter-setup-new/parameter-setup-new.module#ParameterSetupNewModule', data: { breadcrumb: "Audit Bench-Parameters" }},  
      // { path: "auditreports", component:AuditreportsComponent,loadChildren: './audits/auditreports/auditreports.module#AuditreportsModule', data: { breadcrumb: 'Audit Report' } }, 
      { path: "new-dashboard",component:NewDashboardComponent, loadChildren:'./new-dashboard/new-dashboard.module#NewDashboardModule', data: { breadcrumb: 'Dashboard' } }, 
      { path: "ticketreports", component:TicketreportsComponent,loadChildren:'./tickets/ticketreports/ticketreports.module#TicketreportsModule', data: { breadcrumb: 'Ticket Report' } }, 
      { path: "create-tickets", component:CreateticketsComponent, data: { breadcrumb: "Create Tickets" }}, 
      { path: "update-tickets", component:UpdateticketComponent, data: { breadcrumb: "Update Ticket" }}, 
      { path: "tickets", component:TicketsComponent, data: { breadcrumb: "Tickets" }}, 
      { path: "checklist-dashboard", component:ChecklistDashboardComponent,loadChildren: './checklist-dashboard/checklist-dashboard.module#ChecklistDashboardModule', data: { breadcrumb: "Audits" }}, 
      { path: "checklist-dashboard/metric", component:MetricComponent,loadChildren: './checklist-dashboard/metric/metric.module#MetricModule', data: { breadcrumb: "Audits" }}, 
      { path: "parameter-dashboard", component:ParameterDashboardComponent,loadChildren: './parameter-dashboard/parameter-dashboard.module#ParameterDashboardModule', data: { breadcrumb: "Audits" }}, 
      { path: "parameter-dashboard/metric", component:ParMetricComponent,loadChildren: './parameter-dashboard/par-metric/par-metric.module#ParMetricModule', data: { breadcrumb: "Audits" }}, 
      { path: "parameter-setup", component:ParameterSetupComponent,loadChildren: './parameter-setup/parameter-setup.module#ParameterSetupModule',data: { breadcrumb: "Audit Bench-Parameters" }},
      { path: "checklist", component:ChecklistComponent,loadChildren:'./checklist/checklist.module#ChecklistModule',  data: { breadcrumb: "Audit Bench-Checklists" }},    
    ],
  },
  {
    path:"simc",component:LayoutComponent,
    children:[
      // {
      //   path:"dashboard",loadChildren:'./me/client/client-dashboard/client-dashboard.module#ClientDashboardModule',data:{breadcrumb:"Dashboard"},
      // },
      // {
      //   path:"user",loadChildren:'./me/client/user/user.module#UserModule',data:{breadcrumb:"Jobs Managment"}
      // }
    ]
  },
  {
    path: "**",
    component: NotFoundComponent,
    data: { breadcrumb: "Not found" },
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    //  preloadingStrategy: PreloadAllModules, 
  // useHash: true
});
