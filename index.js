var menu = document.querySelector('.menu')
var barra = document.querySelector('.barra-menu')

function ativo(){
  if (barra.classList.contains('ativo')) {
    menu.src='img_portfolio/menu.png'
    barra.classList.remove('ativo')
  }else{
    menu.src='img_portfolio/x.png'
  barra.classList.add('ativo')
  }
}

menu.addEventListener("click", ativo)

var btnServicos = document.getElementById('btnServicos')

function clique(){
  barra.classList.remove('ativo')
}
btnServicos.addEventListener("click",clique )