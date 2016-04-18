$(document).ready(function() {

  var date = getFullDate();

  $('#date h4').text(date);
  console.log(date);


} );

getFullDate = function() {
  var today = new Date();
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return days[today.getDay()] + ', ' + months[today.getMonth()] + " " + today.getDate() + ", " + today.getUTCFullYear();
}

function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(9);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = "<input type='text' id='row-1-age' name='row-1-age' value=''>";
    cell2.innerHTML = "<input type='text' id='row-1-age' name='row-1-age' value=''>";
    cell3.innerHTML = "<button id='reception-button' type='button' name='button'>Reception</button>";
    cell4.innerHTML = "<button id='service-button' type='button' name='button'>Service</button>";
    cell5.innerHTML = "<button id='exit-button' type='button' name='button'>Exit</button>";
}
function myDeleteFunction() {
    document.getElementById("myTable").deleteRow(9);
};

$(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  });

  $(function() {
     $( "#datepicker" ).datepicker();
   });
