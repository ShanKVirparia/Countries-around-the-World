class Country {
  constructor(name, language, hello, colors) {
    this.name = name;
    this.language = language;
    this.hello = hello;
    this.colors = colors;
  }

  displayColors() {
    document.body.style.backgroundColor = this.colors[0];
    document.getElementById("country-name").innerText = this.name;
    document.getElementById("language").innerText = this.language;
    document.getElementById("hello").innerText = this.hello;
  }
}

const countries = [
  new Country("United States", "English", "Hello World!", ["red", "white", "blue"]),
  new Country("France", "French", "Bonjour monde!", ["blue", "white", "red"]),
  new Country("Spain", "Spanish", "Hola mundo!", ["red", "yellow", "red"]),
  new Country("Germany", "German", "Hallo Welt!", ["black", "red", "yellow"]),
  new Country("Japan", "Japanese", "こんにちは世界!", ["red", "white"])
];

function displayCountry() {
  const countryName = prompt("Which country would you like to display?");
  const selectedCountry = countries.find(
    country => country.name.toLowerCase() === countryName.toLowerCase()
  );
  if (selectedCountry) {
    selectedCountry.displayColors();
  } else {
    alert("Country not found.");
  }
}
