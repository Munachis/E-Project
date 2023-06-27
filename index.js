dropdownButton = document.querySelector(".bi-list");
dropdownList = document.querySelector(".hamburger");

 dropdownButton.addEventListener("click", function(){
     if(dropdownList.style.height == '90vh'){
         dropdownList.style.height = '0';
     }
     else{
         dropdownList.style.height = '90vh';
     }
 })

 // Function to update the ticker content
function updateTicker() {
    var ticker = document.getElementById("ticker");
    var currentDate = new Date();
    var location = "Your Location"; // Replace with your desired location
  
    var tickerText = "Date: " + currentDate.toDateString() + " | Time: " + currentDate.toLocaleTimeString() + " | Location: " + location;
    ticker.innerText = tickerText;
  }
  
  // Update the ticker initially
  updateTicker();
  
  // Update the ticker every second
  setInterval(updateTicker, 1000);
  

   
