function nVocals(){
  var frase = prompt("Introdueix la frase")
  var compara = frase.match(/[aeiou]/gi).length
  if(compara>=2){
    alert("Hi han " + compara + " vocals")
  } else if (compara==1){
    alert("Hi ha " + compara + " vocal")
  }
}
