$(".s").text(`YOUR SCORE：${localStorage.getItem('GAME_RESULT')}`)

//--------------------------------
//           分數設定
//--------------------------------
//分數range：-50~250分
//-50~0 末期失智症
//1~50 深度失智症
//51~100 重度失智症
//101~150 中度失智症
//151~200 輕度失智症
//201~250 沒有失智
var GameResult = localStorage.getItem('GAME_RESULT')

if (GameResult < 1 && GameResult > -51) {
  $(".result").text(`只有${localStorage.getItem('GAME_RESULT')}分，也太爛了吧ㄎㄎಠ◡ಠ`)
}
else if (GameResult < 51 && GameResult > 0) {
  $(".result").text(`${localStorage.getItem('GAME_RESULT')}是什麼分數啦..._(:_」∠)_`)
}
else if (GameResult < 101 && GameResult > 50) {
  $(".result").text(`ㄟ${localStorage.getItem('GAME_RESULT')}分，好啦、好啦...還算有點東西(￣ー￣〃)`)
}
else if (GameResult < 151 && GameResult > 100) {
  $(".result").text(`${localStorage.getItem('GAME_RESULT')}分...應該可了啦(•ิ_•ิ)?`)
}
else if (GameResult < 201 && GameResult > 150) {
  $(".result").text(`挖啊啊啊啊啊ε=ε=ε= ᕕ( ᐛ )ᕗ${localStorage.getItem('GAME_RESULT')}分，不錯ㄟ！`)
}
else {
  $(".result").text(`拿到${localStorage.getItem('GAME_RESULT')}分，放個煙火了ㄅ(=ﾟωﾟ)っ∠※ Kaboom!`)
}

//--------------------------------
//           最佳分數
//--------------------------------
// var BestResult = localStorage.getItem('BEST_GAME_RESULT') ? localStorage.getItem('BEST_GAME_RESULT') : 0

// if (GameResult > BestResult) {
//   localStorage.setItem('BEST_GAME_RESULT', GameResult)
//   BestResult = GameResult
// }

// $(".best").text(`BEST SCORE：${BestResult}`)

BestResult = localStorage.getItem('BEST_GAME_RESULT') ? localStorage.getItem('BEST_GAME_RESULT') : 0
console.log(BestResult)
console.log(GameResult)

if (parseInt(GameResult) > parseInt(BestResult)) {
  console.log("破紀錄")
  localStorage.setItem('BEST_GAME_RESULT', GameResult)
  GameResult = BestResult
  $(".best").text(`BEST SCORE：${GameResult}`)
} else {
  console.log("沒破紀錄")
  $(".best").text(`BEST SCORE：${BestResult}`)
}

