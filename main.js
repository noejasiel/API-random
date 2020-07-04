document.getElementById("btn").addEventListener("click", function () {
  fetch(" https://randomuser.me/api/ ")
    .then((resp) => resp.json())
    .then((resp) => {
      var element = document.getElementById("generate");
      console.log(resp.results);
      element.innerHTML = `
      <img src="${resp.results[0].picture.large}" alt="" />
      <p>Nombre: ${
        resp.results[0].name.title +
        " " +
        resp.results[0].name.first +
        " " +
        resp.results[0].name.last
      }</p>
      <p> email: ${resp.results[0].email}<p>
      `;
    });
});
