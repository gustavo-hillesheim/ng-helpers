import { RowData } from './row-data';

export class CellContext {
  cellData: any;
  $implicit: any; //cellData
  rowData: RowData;
  data: RowData[];
  index: number;
  property: string;
}