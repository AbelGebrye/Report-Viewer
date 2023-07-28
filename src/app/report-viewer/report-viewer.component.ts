import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AR_EXPORTS,
  HtmlExportService,
  PdfExportService,
  ViewerComponent,
  TabularDataExportService,
} from '@grapecity/activereports-angular';
@Component({
  selector: 'app-report-viewer',
  templateUrl: './report-viewer.component.html',
  styleUrls: ['./report-viewer.component.css'],
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

export class ReportViewerComponent  {
  @ViewChild(ViewerComponent, { static: false }) reportViewer!: ViewerComponent;
  onViewerInit(): void {
      this.reportViewer.open('assets/report.rdlx-json');
  }

}
