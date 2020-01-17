const generateSingleTable = (options?: TableGeneratorOptions) => {
  let nRows = Math.floor(Math.random() * 100);
  let nCols = Math.floor(Math.random() * 8);

  if (options) {
    if (options.nRows) {
      nRows = options.nRows;
    }
    if (options.nCols) {
      nCols = options.nCols;
    }
  }
  
  const data = [];
  
  for (let rowIndex = 0; rowIndex < nRows; rowIndex++) {
    const rowData = [];
    for (let colIndex = 0; colIndex < nCols; colIndex++) {
      rowData.push(Math.random() * 10000);
    }
    data.push(rowData);
  }
  
  return data;
}

export type TableGeneratorOptions = { nRows?: number, nCols?: number };

export const generateTableData = (nTables: number, options?: TableGeneratorOptions): number[][][] => {
  const data = [];
  for (let i = 0; i < nTables; i++) {
    data.push(generateSingleTable(options));
  }
  return data;
}