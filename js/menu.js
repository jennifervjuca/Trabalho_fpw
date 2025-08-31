let navBar = document.querySelector("#header"); //Tag que criei no header para trabalhar aqui no JS
//addEventListener para capturar quando o usuário utilizar o scroll
//arrow function () =>
document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY; //Variável scrollTop recebe a rolagem do eixo Y da minha janela

  if (scrollTop > 0) {
    navBar.classList.add("rolar");
  } else {
    navBar.classList.remove("rolar");
  }
});
