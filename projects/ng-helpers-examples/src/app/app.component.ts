import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

@Component({
  selector: 'eg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-helpers-examples';
  headers = ['Header 1', 'Header 2'];
  showActions = true;
  showSelectAll = true;

  constructor(private translateService: TranslateService) {
    translateService.use('en');
  }
}
