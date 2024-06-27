const DOGFACTS_URL = "https://dogapi.dog/api/v2/breeds"

const body = document.getElementById("main_body")
const newDiv = document.createElement("div")
body.appendChild(newDiv)
response = getBreedFacts()


console.log(response)

async function getBreedFacts(){
    const response = await fetch(DOGFACTS_URL);
    if (!response) {
        throw new Error("Network response was not ok")
    }
    const data = await response.json()
    newDiv.textContent = JSON.stringify(data)
    console.log(data)

    return data
    
}