document.getElementById("consultarBtn").addEventListener("click", function () {
  var inputId = document.getElementById("idConsult").value;
  var dataConsultada = localStorage.getItem(inputId);
  var array = dataConsultada.split(",");
  console.log(array, dataConsultada);
  if (dataConsultada == null) {
    alert("Ese dato no existe en la base de datos");
  } else {
    var pElement = document.getElementById("data");
    pElement.innerHTML = array[0] + "<br>";
    pElement.innerHTML = pElement.innerHTML + "Primera nota:" + array[1] + "<br>";
    pElement.innerHTML = pElement.innerHTML + "Segunda nota:" + array[2] + "<br>";
    pElement.innerHTML = pElement.innerHTML + "Tercera nota:" + array[3] + "<br>";
    pElement.innerHTML = pElement.innerHTML + "Nota Final:" + "Tu nota final es: " + promedio(parseFloat(array[1]),parseFloat(array[2]),parseFloat(array[3])) +"<br>"; 
    pElement.innerHTML = pElement.innerHTML + "<br>";
  }
});
function promedio(noteOne, secondNote,threeNote) {
  var promedioresult =(noteOne + secondNote + threeNote)/3;
  return promedioresult;
}
