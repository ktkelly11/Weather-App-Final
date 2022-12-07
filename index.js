function currentTime(now) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];

  let date = now.getDate();

  let hours = now.getHours();

  let minutes = now.getMinutes();

  return `${day} ${months} ${date} ${hours}:${minutes}`;
}

let currentDate = document.querySelector("#current-date");
let currentTime = new Date();
currentDate.innerHTML = currentTime(currentDate);

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-name");
  let displayCity = document.querySelector("#city-new");
  displayCity.innerHTML = city;
}

let search = document.querySelector("#search-bar");
search.addEventListener("submit", searchBar);
