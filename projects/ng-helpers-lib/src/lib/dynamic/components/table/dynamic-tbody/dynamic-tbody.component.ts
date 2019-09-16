import { Component, OnInit, Input, ViewChild, TemplateRef, ViewContainerRef, Output } from '@angular/core';
import { RowContext } from '../types/row-context';
import { RowData } from '../types/row-data';
import { CellContext } from '../types';
import { Subject } from 'rxjs';

type RowEvent = {rowData: RowData, index: number};
type CanOperateRowFn = (rowData: RowData, index: number) => boolean;
type RowComparisonFn = (row1: RowData, row2: RowData) => boolean;

@Component({
  selector: 'nh-dynamic-tbody',
  templateUrl: './dynamic-tbody.component.html',
  styleUrls: ['./dynamic-tbody.component.css']
})
export class NhDynamicTbodyComponent implements OnInit {

  @Input() data: RowData[];
  @Input() showProperties: string[];
  @Input() rowTemplate: TemplateRef<any>;
  @Input() cellTemplate: TemplateRef<any>;
  @Input() showSelect: boolean;
  @Input() canSelect: boolean | CanOperateRowFn = true;
  @Input() selectWidth: number;
  @Input() selectTemplate: TemplateRef<any>;
  @Input() compareSelectedRows: RowComparisonFn = (rowData1, rowData2) => rowData1 === rowData2;
  @Input() showActions: boolean;
  @Input() actionsWidth: number;
  @Input() actionsTemplate: TemplateRef<any>;
  @Input() showEdit: CanOperateRowFn | boolean = true;
  @Input() canEdit: CanOperateRowFn | boolean = true;
  @Input() editLabel = 'Edit';
  @Input() showDelete: CanOperateRowFn | boolean = true;
  @Input() canDelete: CanOperateRowFn | boolean = true;
  @Input() deleteLabel = 'Delete';
  
  @Output() select = new Subject<void>();
  @Output() edit = new Subject<RowEvent>();
  @Output() delete = new Subject<RowEvent>();

  private _selected: RowData[] | number[];
  @Input() set selected(newValue: RowData[] | number[]) {this._selected = newValue;}
  @Output() selectedChange = new Subject<RowData[] | number[]>();

  @ViewChild('template') private template: TemplateRef<any>;

  constructor(private container: ViewContainerRef) { }

  ngOnInit() {
    this.container.createEmbeddedView(this.template);
  }

  objProperties(obj: RowData): string[] {
    return Object.getOwnPropertyNames(obj)
      .filter(this.isntFunctionFilter(obj));
  }

  private isntFunctionFilter(obj: RowData) {
    return (property) => !(obj[property] instanceof Function || typeof obj[property] === 'function');
  }

  trackRows(index: number, row: RowData): string {
    return JSON.stringify(row);
  }

  createRowContextFrom(rowData: RowData, index: number): RowContext {

    return {
      rowData,
      $implicit: rowData,
      index,
      data: this.data
    }
  }

  createCellContextFrom(rowData: RowData, property: string, index: number): CellContext {
    
    return {
      cellData: rowData[property],
      $implicit: rowData[property],
      rowData,
      property,
      index,
      data: this.data
    }
  }

  isSelected(rowData: RowData, index: number): boolean {

    if (!this._selected)
      return false;

    const anySelected = <any[]>this._selected;
    return anySelected.includes(rowData) || anySelected.includes(index);
  }

  canSelectRow(rowData: RowData, index: number): boolean {

    if (typeof this.canSelect === 'boolean')
      return this.canSelect;
    
    return this.canSelect(rowData, index);
  }

  selectRow(rowData: RowData, index: number): void {

    if (!this._selected)
      this._selected = [];

    const anySelected = <any[]>this._selected;
    if (typeof this._selected[0] === 'number')
      anySelected.push(index);
    else
      anySelected.push(rowData);

    this.selectedChange.next(this._selected);
  }

  showEditButton(rowData: RowData, index: number): boolean {

    return typeof this.showEdit === 'boolean' ? this.showEdit : this.showEdit(rowData, index);
  }

  disableEditButton(rowData: RowData, index: number): boolean {

    return typeof this.canEdit === 'boolean' ? this.canEdit : this.canEdit(rowData, index);
  }

  showDeleteButton(rowData: RowData, index: number): boolean {

    return typeof this.showDelete === 'boolean' ? this.showDelete : this.showDelete(rowData, index);
  }

  disableDeleteButton(rowData: RowData, index: number): boolean {

    return typeof this.canDelete === 'boolean' ? this.canDelete : this.canDelete(rowData, index);
  }
}
