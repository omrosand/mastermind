import GameForm from "./GameForm";

export default function Start({
  setStep,
  setPlayer,
  setRows,
  player,
  rows,
}: any) {
  return (
    <>
      <h1>Velkommen til Master Mind</h1>
      <ul>
        <li>Informasjon om spillet</li>
        <li>Mer informasjon...</li>
      </ul>
      <GameForm
        setStep={setStep}
        setPlayer={setPlayer}
        setRows={setRows}
        player={player}
        rows={rows}
      />
    </>
  );
}
