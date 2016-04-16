$(document).ready(function() {

  var date = getFullDate();

  $('#date h4').text(date);
  console.log(date);


} );

getFullDate = function() {
  var today = new Date();
  var days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return days[today.getDay()] + ', ' + months[today.getMonth()] + " " + today.getDate() + ", " + today.getUTCFullYear();
}

function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
}
