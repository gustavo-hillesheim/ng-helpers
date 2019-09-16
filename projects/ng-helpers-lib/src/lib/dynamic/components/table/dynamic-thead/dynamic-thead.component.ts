import { Component, OnInit, Input, ViewChild, TemplateRef, ViewContainerRef, Optional, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { HeaderContext } from './../types/header-context';

@Component({
  selector: 'nh-dynamic-thead',
  templateUrl: './dynamic-thead.component.html',
  styleUrls: ['./dynamic-thead.component.css']
})
export class NhDynamicTheadComponent implements OnInit {

  @Input() headers: string[];
  @Input() headersPrefix: string;
  @Input() headersSuffix: string;
  @Input() headersWidth: number | number[] | {[key: number]: number} | {[key: string]: number};
  @Input() useTranslation: boolean;
  @Input() headerTemplate: TemplateRef<any>;
  @Input() showSelectAll: boolean;
  @Input() canSelectAll = true;
  @Input() selectAllWidth: number;
  @Input() selectAllHeader = 'Select All';
  @Input() selectAllTemplate: TemplateRef<any>;
  @Input() showActions: boolean;
  @Input() actionsWidth: number;
  @Input() actionsHeader = 'Actions';
  @Input() actionsTemplate: TemplateRef<any>;
  //@Input() syncWith: NhDynamicTBodyComponent;

  //@Output() clickHeader = new Subject();

  _selectAll = false;
  @Input() set selectAll(newValue: boolean) {this._selectAll = newValue;}
  @Output() selectAllChange = new Subject<boolean>();

  @ViewChild('template') private template: TemplateRef<any>;
  private absoluteHeaders: string[];

  constructor(
    private container: ViewContainerRef,
    @Optional() private translateService: TranslateService) { }

  ngOnInit() {
    this.container.createEmbeddedView(this.template);
  }

  getHeaders(): Observable<string[]> {

    if (this.useTranslation && this.translateService) {
      return this.translateService
        .get(this.headers)
        .pipe(
          this.convertTranslatedHeaders,
          tap(headers => this.absoluteHeaders = headers)
        );
    } else {
      return of(this.headers);
    }
  }

  private convertTranslatedHeaders = map(translatedHeaders => {
    return this.headers.map(header => translatedHeaders[header]);
  });

  createContextFrom(header: string, index: number): HeaderContext {

    return {
      header,
      $implicit: header,
      index,
      width: this.getWidth(header, index),
      headers: this.absoluteHeaders
    }
  }

  private getWidth(header: string, index: number): number {

    if (!this.headersWidth)
      return null;

    if (typeof this.headersWidth === 'number')
      return this.headersWidth;
    else
      return this.headersWidth[index] || this.headersWidth[header];
  }

  changeSelectAll(): void {

    this._selectAll = !this._selectAll;
    this.selectAllChange.next(this._selectAll);
  }

  trackHeaders(index: number, header: string): string {
    return header;
  }
}
