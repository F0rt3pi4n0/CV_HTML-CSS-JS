function clock() {

var today = new Date();

var day = today.getDate();
if (day<10) day="0"+day;

var mth = today.getMonth()+1;
if (mth<10) mth="0"+mth;

var year = today.getFullYear();

var hour = today.getHours();
if (hour<10) hour="0"+hour;

var min = today.getMinutes();
if (min<10) min="0"+min;

var sec = today.getSeconds();
if (sec<10) sec="0"+sec;

time.innerHTML = "Done by F0rt3pi4n0 &copy;"+day+"/"+mth+"/"+year+" "+hour+":"+min+":"+sec;

setTimeout('clock()', 1000);

}

const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const popup = document.getElementById("popup");

openBtn.addEventListener("mouseover", () => { 
    popup.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    popup.classList.remove("open");
});


function openPopup () {
    
}


function listExpand () {

    var navName = document.getElementById("navLinks");
    var userScreen = screen.width;
    if ( navName.className === "col-12 topNav" && userScreen <= 768 ) { navName.className += " expand"; }
    else { navName.className = "col-12 topNav";}

}