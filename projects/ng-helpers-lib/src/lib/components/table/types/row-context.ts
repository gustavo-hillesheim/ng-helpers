import { RowData } from './row-data';

export class RowContext {
  index: number;
  rowData: RowData;
  $implicit: RowData;
  data: RowData[];
}