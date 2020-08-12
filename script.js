var List = []
if (List.length < 30) {
  var randomNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
  for(var i = 0; i < 30; i += 1){
    var Random = randomNum[Math.floor(Math.random() * randomNum.length)]
    List.push(Random)
  }
}
if (List.length == 30) {
  console.log(List)
  for(var a = 0; a < List.length; a += 1) {
    if (list[a] > 15) {
      List.splice(a,1)
    }
  }
}


/* 3 == "3"
3 === "3"
3 == "3"    --> true
3 === "3"    --> false*/
