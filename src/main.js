import api from "./api.js";

const btn = document.getElementById("btn-generate");
const adviceEmpty = document.getElementById("advice-empty");
const advice = document.getElementById("advice-text");

btn.addEventListener("click", showAdvice);

async function showAdvice() {
  try {
    btn.disabled = true;
    btn.textContent = "Carregando...";

    advice.classList.add("hidden");
    adviceEmpty.classList.remove("hidden");
    adviceEmpty.textContent = "Seu conselho está sendo gerado...";

    const data = await api.buscarConselho();

    advice.textContent = `"${data.slip.advice}"`;
    advice.classList.remove("hidden");
  } catch {
    advice.textContent = "Não foi possível carregar um conselho no momento.";
    advice.classList.remove("hidden");
  } finally {
    advice.classList.remove("hidden");
    adviceEmpty.classList.add("hidden");
    btn.disabled = false;
    btn.textContent = "Gerar conselho";
  }
}
