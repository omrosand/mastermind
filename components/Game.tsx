import Row from "./Row";

type GameProps = {
  player: string;
  rows: number;
};

export default function Game({ player, rows }: GameProps) {
  return (
    <>
      <h1>Hei {player}!</h1>
      <p>
        Du har <b>{rows}</b> forsøk.
      </p>
      <Row />
    </>
  );
}
