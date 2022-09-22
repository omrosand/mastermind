export default function Cell({ background }: any) {
  return (
    <div className="cell">
      <button
        type="button"
        className="cellButton"
        style={{ backgroundColor: background ?? "transparent" }}
      ></button>
    </div>
  );
}
