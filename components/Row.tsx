import Cell from "./Cell";

const rowData = {
  number: 1,
  cells: [
    {
      cellName: "cell-1",
      background: "red",
    },
    {
      cellName: "cell-2",
      background: "blue",
    },
    {
      cellName: "cell-3",
      background: "yellow",
    },
    {
      cellName: "cell-4",
      background: "green",
    },
  ],
};

export default function Row() {
  return (
    <div className="row-inner-wrapper">
      <div className="row">
        <p>{rowData.number}</p>
        <div className="cells">
          {rowData.cells.map((cell) => (
            <Cell key={cell.cellName} background={cell.background} />
          ))}
        </div>
      </div>
    </div>
  );
}
