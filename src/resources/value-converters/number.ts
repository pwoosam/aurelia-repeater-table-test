export class NumberValueConverter {
  toView(value: any): number {
    return Number(value);
  }

  fromView(value: any): number {
    return Number(value);
  }
}