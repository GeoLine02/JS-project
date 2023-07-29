// add burger menu

function burgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const u_list = document.querySelector(".u_list");
  hamburger.classList.toggle("active");
  u_list.classList.toggle("active");
}

// item filtrator
// შევქმენი ფუნქცია
function itemFilter() {
  let input, filter, i, cards, textValue; // შევქმენი ცვლადები

  input = document.getElementById("input"); // ავიღე ინპუთი
  filter = input.value.toUpperCase(); // filter-ს აყავს შეტანილი ტექსტი uppercase-ში.
  cards = document.querySelectorAll(".card"); // ავიღე cardRow-ს card კლასი.

  for (i = 0; i < cards.length; i++) {
    let card = cards[i];
    let title = card.getElementsByTagName("h1")[0];
    textValue = title.textContent || title.innerText;

    if (title.textContent.toUpperCase().indexOf(filter) > -1) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  }
}

async function resolveWeatherInfo() {
  let cityName = document.getElementById("cityName").value;
  let result = document.getElementById("result");
  let DataFromAPI = await fetch(
    `https://geocode.maps.co/search?q=${cityName}`,
    {
      method: "GET",
    }
  );

  let DataFromAPItoJson = await DataFromAPI.json();

  let latitute = DataFromAPItoJson[0].lat;
  let longitude = DataFromAPItoJson[0].lon;

  let weatherForcityResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitute}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`,
    {
      method: "GET",
    }
  );

  let weatherResponse = await weatherForcityResponse.json();

  result.innerHTML = `<p> Temperature Of ${cityName} is ${weatherResponse.current_weather.temperature} &deg;C</p>`;
}

function logOut() {
  sessionStorage.removeItem("sessionToken");
  history.replaceState(null, "", "index.html");
  window.location.href = "index.html";
}
