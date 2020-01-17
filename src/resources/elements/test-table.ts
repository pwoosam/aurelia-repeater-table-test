import { bindable, computedFrom } from 'aurelia-framework';

export class TestTable {
  @bindable data: number[][];

  @computedFrom('data')
  private get _nCols() {
    if (this.data && this.data[0]) {
      return this.data[0].length;
    } else {
      return 0;
    }
  }
}