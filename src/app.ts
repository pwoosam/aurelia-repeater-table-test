import { autoinject, TaskQueue } from 'aurelia-framework';
import { generateTableData } from 'resources/services/data-generator';
import * as Stopwatch from 'statman-stopwatch';

@autoinject()
export class App {
  private _nTables: number;
  private _tableDatas: number[][][];

  private _stopwatch: any = new Stopwatch();

  private _nRowsPerTable: number = 10;
  private _nColsPerTable: number = 10;

  private get _stopwatchTime(): number {
    const time = this._stopwatch.read();
    return Number.isNaN(time) ? 0 : time;
  }

  constructor(private _tq: TaskQueue) {
    this._tableDatas = [];
  }

  attached() {
    this._nTables = 1;
  }

  _renderTables() {
    this._stopwatch.reset();
    if (!this._tableDatas) {
      return;
    }

    this._tableDatas = [];

    // Queue task so repeater has a chance to clear tables
    this._tq.queueTask(() => {
      this._stopwatch.start();
      this._tableDatas = generateTableData(this._nTables, {
        nRows: this._nRowsPerTable,
        nCols: this._nColsPerTable
      });

      // Queue task so repeater has a chance to render tables
      this._tq.flushTaskQueue();
      this._tq.queueTask(() => {
        this._stopwatch.stop();
      })
    });
  }
}
