import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReportDesignerComponent } from './report-designer/report-designer.component';
import { ReportViewerComponent } from './report-viewer/report-viewer.component';



const routes: Routes = [
    {path:'',redirectTo:'/report',pathMatch:'full'},
    {path:'report',component:ReportViewerComponent},
    {path:'designer',component:ReportDesignerComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }