import Countdown from "./contagem.js";

const tempoParaNiverAmor = new Countdown("19 December 2022 00:00:01 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaNiverAmor.total[index];
  });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);
