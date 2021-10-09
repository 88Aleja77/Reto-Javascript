document.getElementById("saveDataBtn").addEventListener("click", function (e) {
  e.preventDefault();
  var studentId = document.getElementById("studentId").value;
  var studentName = document.getElementById("studentName").value;
  var noteOne = document.getElementById("noteOne").value;
  var secondNote = document.getElementById("secondNote").value;
  var threeNote = document.getElementById("threeNote").value;
  console.log(studentId, studentName, noteOne, secondNote, threeNote);
  if (
    studentId == "" ||
    studentName == "" ||
    noteOne == "" ||
    secondNote == "" ||
    threeNote == ""
  ) {
    alert("Debe completar todos los campos!");
  } else {
    localStorage.setItem(studentId, [
      studentName,
      noteOne,
      secondNote,
      threeNote,
    ]);
    alert("Sus datos quedaron guardados");
  }
});
