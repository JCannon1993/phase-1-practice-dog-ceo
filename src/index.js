console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
    getDogs() 
    getBreeds() 
    
})



function renderImages(dogs){
    dogs.forEach(function(dog){
        const container = document.getElementById("dog-image-container")
        const doggyImage = document.createElement('img')
        doggyImage.setAttribute('src', `${dog}`)
        doggyImage.setAttribute('alt', "awww pwetty doggy")
        container.appendChild(doggyImage)
    })
}

function renderBreeds(breeds){
    breeds.forEach(function(breed){
        const breedList = document.getElementById('dog-breeds')
        const li = document.createElement('li')
        li.innerText=`${breed}`
        li.setAttribute('class', "breeds")
        li.addEventListener('click', function(){
            console.log("I have been clicked")
            li.style.color = 'blue'
            
            
        })
        breedList.appendChild(li)
    })
}

function getDogs (){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp)=> resp.json())
    .then((json)=> renderImages(json.message))
}
function getBreeds (){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((json)=> renderBreeds(Object.keys(json.message)))
}

function filterDogs(){
    //let options = document.getElementById('breed-dropdown')
    const breedList = document.getElementsByClassName('breed')
   for (const breed of breedList){
        console.log(breed)
    }
}
filterDogs()