const URL_BASE = "https://api.adviceslip.com/advice";

const api = {
  async buscarConselho() {
    try {
      const response = await fetch(URL_BASE);
      const data = await response.json();
      const conselhoIngles = await data.slip.advice;

      const urlTraducao = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(conselhoIngles)}&langpair=en|pt-BR`;
      const resTraducao = await fetch(urlTraducao);
      const dataTraducao = await resTraducao.json();

      data.slip.advice = dataTraducao.responseData.translatedText;

      return data;
    } catch (error) {
      alert("Erro ao buscar um conselho");
      throw error;
    }
  },
};

export default api;
