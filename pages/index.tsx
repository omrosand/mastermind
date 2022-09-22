import type { NextPage } from "next";
import { useState } from "react";
import Game from "../components/Game";
import Start from "../components/Start";

// const steps = [
//   { name: "Spill", component: <Start setStep={setStep} /> },
//   { name: "Game", component: <Game /> },
// ];

const Home: NextPage = () => {
  const [step, setStep] = useState(0);
  const [player, setPlayer] = useState("");
  const [rows, setRows] = useState(0);

  return (
    <main>
      {step === 0 ? (
        <Start
          setStep={setStep}
          setPlayer={setPlayer}
          setRows={setRows}
          player={player}
          rows={rows}
        />
      ) : (
        <Game player={player} rows={rows} />
      )}
    </main>
  );
};

export default Home;
