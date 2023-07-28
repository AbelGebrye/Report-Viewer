import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ActiveReportsModule } from '@grapecity/activereports-angular';
import { AppComponent } from './app.component';
import { ReportDesignerComponent } from './report-designer/report-designer.component';
import { ReportViewerComponent } from './report-viewer/report-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportDesignerComponent,
    ReportViewerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ActiveReportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
