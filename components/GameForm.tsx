export default function GameForm({
  setStep,
  player,
  setPlayer,
  rows,
  setRows,
}: any) {
  const handlePlayerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event?.target.value;
    setPlayer(value);
  };
  const handleRowChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event?.target.value);
    setRows(value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!player || !Number(rows) || rows <= 0) return;
    setStep(1);
  };

  return (
    <>
      <form className="game-form" onSubmit={handleSubmit}>
        <label htmlFor="player">
          <span>Spiller</span>
          <input
            id="player"
            type="text"
            value={player}
            onChange={handlePlayerChange}
          />
        </label>
        <label htmlFor="rows">
          <span>Antall rader</span>
          <input
            id="rows"
            type="number"
            value={rows}
            onChange={handleRowChange}
          />
        </label>
        <button>Start spillet</button>
      </form>
    </>
  );
}
