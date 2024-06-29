const DOGFACTS_URL = "https://dogapi.dog/api/v2/facts"
const DOGPIC_URL = "https://dog.ceo/api/breeds/image/random"

const dogFactDiv = document.getElementById("dog_fact_div")
const dogImageEle = document.getElementById("dog_image")
const nextButton = document.getElementById("next_button")

// initial fact and pic
updatePage();


document.addEventListener("keydown", (e)=>{
    switch(e.key){
        case "ArrowRight":
            console.log("Right arrow pressed")
            updatePage();
            break;
    }
})

nextButton.addEventListener("click", (e) => {
    updatePage();
})


async function updatePage(){
    var fact = await getFactsData();
    var pic = await getDogPic();
    Promise.all([fact, pic]).then((values)=>{    
        dogImageEle.src = values[1]
        dogFactDiv.textContent = values[0]})


}

async function getDogPic(){
    const response = await fetch(DOGPIC_URL);
    if (!response) {
        throw new Error("Network response was not ok")
    }
    var result = await response.json()
    var dogImage = result["message"]
    // dogImageEle.src = dogImage
    return dogImage
}

async function getFactsData(){
    const response = await fetch(DOGFACTS_URL);
    if (!response) {
        throw new Error("Network response was not ok")
    }
    var result = await response.json()
    var data = result["data"]
    var fact = data[0]["attributes"]["body"]
    var processed_data = JSON.stringify(fact)
    // dogFactDiv.textContent = processed_data
    console.log(processed_data)

    return processed_data
    
}