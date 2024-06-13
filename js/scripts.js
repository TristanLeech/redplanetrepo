let form = document.forms["contact"];
form.addEventListener("submit");

function thankYou(){
    alert("Thank you for your message!");
}

function decreaseMars(){
    if(document.getElementById('ticketsMars').value !=0){
        document.getElementById('ticketsMars').value=parseInt(document.getElementById('ticketsMars').value-1);
    }
    else{
        document.getElementById('ticketsMars').value=0;
    }
}

function increaseMars(){
    document.getElementById('ticketsMars').value=parseInt(document.getElementById('ticketsMars').value)+1;
}

let totalMarsCost=0;
let totalSaturnCost=0;
let totalCost=0;

function total(){
    totalMarsCost = parseInt(document.getElementById('ticketsMars').value)*50;
    totalSaturnCost = parseInt(document.getElementById('ticketsSaturn').value)*70;
    totalCost=totalMarsCost+totalSaturnCost;
    document.getElementById('total').innerHTML="R "+totalCost;
}

function decreaseSaturn(){
    if(document.getElementById('ticketsSaturn').value !=0){
        document.getElementById('ticketsSaturn').value=parseInt(document.getElementById('ticketsSaturn').value-1);
    }
    else{
        document.getElementById('ticketsSaturn').value=0;
    }
}

function increaseSaturn(){
    document.getElementById('ticketsSaturn').value=parseInt(document.getElementById('ticketsSaturn').value)+1;
}