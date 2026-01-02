const button = document.querySelector("#pokemonID");
const img = document.querySelector("#pokemonImage");
const errorMsg = document.querySelector("#errormessage");

button.addEventListener("click", fetchdata);

async function fetchdata() {
  try {
    const input = document.querySelector("#pokemonInput").value.toLowerCase().trim();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    {
      if (!response.ok) {
        throw new Error(`Pokemon not found!: ${response.status}`);
      }
    }
    const data = await response.json();
    console.log(data);

    const pokemonimg = data.sprites.front_default;
    img.src = pokemonimg;
    img.style.display = "block";
    errorMsg.textContent = "";
  } catch (error) {
    console.error(error);
    errorMsg.textContent = "Failed to fetch data : " + error.message;
    img.style.display = "none";
  }
}

setTimeout(() => {
  console.error("WRAP IT UP BRO 💀");
}, 5000);
