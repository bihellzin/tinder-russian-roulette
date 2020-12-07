var like_button = document.querySelectorAll(".button")[2]
var dislike_button = document.querySelectorAll(".button")[0]
var info_button = document.getElementsByClassName("P(0) Trsdu($normal) Sq(28px) Bdrs(50%) Cur(p) Ta(c) Scale(1.2):h Mb(12px) Mb(8px)--s focus-button-style")[1]

var likeTurn
var dislikeTurn

russianRoulette()

function russianRoulette(){
  if (Math.random() > 0.5) {
    enableLike()
  } else{
    enableDislike()
  }
}

function enableDislike(){
  dislikeTurn = 3
  dislike_button.style=("display: block;")
  like_button.style=("display: none;")
}

function enableLike(){
  likeTurn = 3
  like_button.style=("display: block;")
  dislike_button.style=("display: none;")
}

like_button.onclick = () => {
  likeTurn--
  russianRoulette()
}

dislike_button.onclick = () => {
  dislikeTurn--
  russianRoulette()
}