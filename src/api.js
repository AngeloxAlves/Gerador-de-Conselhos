const URL_BASE = "https://api.adviceslip.com/advice";

const api = {
  async buscarConselho() {
    try {
      const response = await fetch(URL_BASE);
      return await response.json();
    } catch (error) {
      alert("Erro ao buscar um conselho");
      throw error;
    }
  },
};

export default api;
