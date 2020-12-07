var like = document.querySelectorAll(".button")[2]
var dislike = document.querySelectorAll(".button")[0]
var info = document.getElementsByClassName("P(0) Trsdu($normal) Sq(28px) Bdrs(50%) Cur(p) Ta(c) Scale(1.2):h Mb(12px) Mb(8px)--s focus-button-style")[1]

var likes = 0
var dislikes = 3

checkDislikes()
checkLikes()

// info.onclick = () => {
//   checkDislikes()
//   checkDislikes()
// }

// if (backAppeared) {
//   back = document.getElementsByClassName("End(12px) B(-20px) Pos(a) Z(2) CenterAlign Bdrs(50%) P(0) Scale(1.1):h Trsdu($normal) focus-button-style")[0]
// }

function checkLikes(){
  if (likes == 0){
    enableDislikes()
    return false
  }
  like = document.querySelectorAll(".button")[2]
  return true
}

function checkDislikes(){
  if (dislikes == 0) {
    enableLikes()
    return false
  }
  dislike = document.querySelectorAll(".button")[0]
  return true
}

function enableDislikes(){
  dislikes = 3
  dislike.style=("display: block;")
  like.style=("display: none;")
}

function enableLikes(){
  likes = 3
  like.style=("display: block;")
  dislike.style=("display: none;")
}

like.onclick = () => {
  likes--
  checkLikes()
}

dislike.onclick = () => {
  dislikes--
  checkDislikes()
}