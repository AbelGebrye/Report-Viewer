import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-designer',
  template: '<div id="designer-host"><gc-activereports-designer [report]="report"> </gc-activereports-designer></div>',
  styleUrls: ['./report-designer.component.css']
})
export class ReportDesignerComponent {
  report = { id: 'assets/report.rdlx-json', displayName: 'my report' };
}
