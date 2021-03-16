let currentId = 1;
let prevLink = document.querySelector("#prev");
let randomLink = document.querySelector("#random");
let nextlink = document.querySelector("#next");

const locationResolver = (location) => {
  switch (location) {
    case "#/prev/":
      currentId = currentId > 1 ? currentId - 1 : currentId;

      getApi(currentId);

      window.location.replace(location + `${currentId}`);
      prevLink.href = location + `${currentId}`;

      break;
    case "#/random/":
      currentId = Math.floor(Math.random() * (2000 - 1));
      getApi(currentId);

      window.location.replace(location + `${currentId}`);
      randomLink.href = location + `${currentId}`;

      break;
    case "#/next/":
      currentId += 1;

      window.location.replace(location + `${currentId}`);
      nextlink.href = location + `${currentId}`;

      getApi(currentId);

      break;
    default:
      return 0;
  }
};

window.addEventListener("load", () => {
  const location = window.location.hash;

  getApi(currentId);

  if (location) {
    locationResolver(location);
  }
});
