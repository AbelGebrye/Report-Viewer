import { Component, ViewChild } from '@angular/core';
import { DesignerComponent } from '@grapecity/activereports-angular';
import {
  AR_EXPORTS,
  HtmlExportService,
  PdfExportService,
  ViewerComponent,
  TabularDataExportService,
} from '@grapecity/activereports-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: AR_EXPORTS,
      useClass: PdfExportService,
      multi: true,
    },
    {
      provide: AR_EXPORTS,
      useClass: HtmlExportService,
      multi: true,
    },
    {
      provide: AR_EXPORTS,
      useClass: TabularDataExportService,
      multi: true,
    },
  ],
})
export class AppComponent {

  @ViewChild(ViewerComponent, { static: false }) reportViewer!: ViewerComponent;
  onViewerInit(): void {
      this.reportViewer.open('assets/Employee-Detail.rdlx-json');
  }
}
