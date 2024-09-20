//update the time on the page
let nairobiDate = moment().tz("Africa/Nairobi").format("MMMM Do YYYY");
let nairobiTime = moment().tz("Africa/Nairobi").format("HH:mm:ss");
let nairobiSeason = moment().tz("Africa/Nairobi").format("A");
let dateElement = document.querySelector("#date");
let timeElement = document.querySelector("#time");
let seasonElement = document.querySelector("#season");
dateElement.innerHTML = nairobiDate;
timeElement.innerHTML = nairobiTime;
seasonElement.innerHTML = nairobiSeason;
