const app = document.querySelector("#app");

const getApi = (currentId) => {
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://xkcd.com/${currentId}/info.0.json`
    )
    .then(({ data }) => {
      app.innerHTML = `
        <div class="comic">
            <h3 class="comic__name" id="name">${data.title}</h3>

            <div class="comic__block">
                <img
                    src="${data.img}"
                    alt=""
                    class="comic__image"
                    id="image"
                />
            </div>

            <div class="comic__info">
                <span class="comic__date" id="date">Дата - ${data.day}.${data.month}.${data.year}</span>
                <span class="comic__descr" id="descr">${data.transcript}</span>
            </div>
        </div>
        `;
    })
    .catch((err) => {
      console.log(err);
    });
};
