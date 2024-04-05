'use client';

import { useEffect, useState } from "react";
import { errorMessage, successMessage } from "./utils/utils";

export default function Home() {
  const [scoreFrancisco, setScoreFrancisco] = useState(0)
  const [scoreGonzalo, setScoreGonzalo] = useState(0)

  const handleWinner = async (winner) => {
    // Update the winner by the API create in Next.js

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "name": winner
    });

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    // Haz un fetch a /api/saveWinner con las opciones requestOptions
    // Además necesito que muestres un mensaje de éxito o error con SweetAlert2

    const response = await fetch("/api/saveWinner", requestOptions) // Fetch a /api/saveWinner
    const respuesta = await response.json()

    if(respuesta.data.name === "Francisco Perez") setScoreFrancisco(scoreFrancisco + 1)
    if(respuesta.data.name === "Gonzalo Posse") setScoreGonzalo(scoreGonzalo + 1)

    respuesta?.error?.length === 0 ? successMessage() : errorMessage()
  }

  const getWinners = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    const response = await fetch("/api/saveWinner", requestOptions) 
    const respueta = await response.json()

    setScoreFrancisco(respueta.data[0].score)
    setScoreGonzalo(respueta.data[1].score)
  }


  useEffect(() => {
    getWinners()
  } , [])


  return (
    <main className="flex justify-center flex-col align-middle h-full min-h-screen w-screen">
      <div className="flex flex-col justify-center align-middle">
        <h1 className="text-4xl font-bold text-center py-2 text-slate-200 hover:text-slate-500 hover:animate-bounce">Bienvenido a la estadística de nuestro juego</h1>
        <p className="text-wrap text-center">Una app de contador del juego Piedra Papel y Tijeras, para luego poder hacer
          <br/>una estadística de las partidas jugadas por 
          <span className="text-[#971FEA] font-black"> Francisco Perez </span>& <span className="text-[#4A54DF] font-black">Gonzalo Posse</span></p>
        <div className="flex justify-center align-middle py-5">
          <a href="/stadistic" className="bg-red-200 hover:bg-red-500 text-black font-bold py-2 px-4 rounded">Ver estadísticas</a>
        </div>
      </div>

      <article className="flex flex-col justify-center align-middle">
        <h3 className="text-4xl font-bold text-center py-2 text-slate-200 hover:text-slate-500 hover:animate-bounce">
          <span className="text-[#971FEA] font-black mx-2 md:mx-0">Francisco Perez</span> <span className="opacity-0 md:opacity-100">|</span> <span className="text-[#4A54DF] font-black">Gonzalo Posse</span>
        </h3>

        <div className="flex justify-center align-middle py-5 md:gap-[320px] gap-[30px]">
          <div className="flex justify-center flex-col align-middle gap-5">
            <button onClick={() => { handleWinner("Francisco Perez") }} href="/game" className="bg-[#971FEA] hover:bg-[#AA4DEA] text-white font-bold py-2 px-4 rounded">+1</button>
            <p href="/game" className="border border-[#971FEA] hover:bg-[#AA4DEA] text-white font-bold py-2 px-4 rounded">{scoreFrancisco} Ganadas</p>
          </div>
          <div className="flex justify-center flex-col align-middle gap-5">
            <button onClick={() => { handleWinner("Gonzalo Posse") }} className="bg-[#4A54DF] hover:bg-[#7179E1] text-white font-bold py-2 px-4 rounded">+1</button>
            <p href="/game" className="border border-[#4A54DF] hover:bg-[#7179E1] text-white font-bold py-2 px-4 rounded">{scoreGonzalo} Ganadas</p>
          </div>
        </div>
      </article>
    </main>
  );
}

