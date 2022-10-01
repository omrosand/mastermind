import GameForm from "./GameForm";

export default function Start({ handleSubmit }: any) {
  return (
    <>
      <h1>Velkommen til Master Mind</h1>
      <ul>
        <li>Informasjon om spillet</li>
        <li>Mer informasjon...</li>
      </ul>
      <GameForm handleSubmit={handleSubmit} />
    </>
  );
}
