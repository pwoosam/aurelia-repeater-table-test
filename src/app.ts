import { autoinject, TaskQueue } from 'aurelia-framework';
import { generateTableData } from 'resources/services/data-generator';

@autoinject()
export class App {
  private _nTables: number;
  private _tableDatas: number[][][];

  private _nRowsPerTable: number = 10;
  private _nColsPerTable: number = 10;

  constructor(private _tq: TaskQueue) {
    this._tableDatas = [];
  }

  attached() {
    this._nTables = 1;
  }

  _renderTables() {
    if (!this._tableDatas) {
      return;
    }

    this._tableDatas = [];

    this._tq.queueTask(() => {
      this._tableDatas = generateTableData(this._nTables, {
        nRows: this._nRowsPerTable,
        nCols: this._nColsPerTable
      });
    });
  }
}
