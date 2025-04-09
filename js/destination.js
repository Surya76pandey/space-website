const moon = document.getElementById('moon')
const mars = document.getElementById('mars')
const europa = document.getElementById('europa')
const titan = document.getElementById('titan')
const destinationName = document.getElementById('destination-name');
const description = document.getElementById('description');
const destinationImage = document.getElementById('destination-image');
const destinationDistance = document.getElementById('destination-distance');
const destinationTime = document.getElementById('destination-time');



let myData = JSON.parse(sessionStorage.getItem('data')) || [];

if(myData.length == 0){
    fetch('./data.json')
    .then((res) => res.json())
    .then((data)=>{
        let receivedData = data;
        sessionStorage.setItem('data' , JSON.stringify(receivedData))
    })

}


const destinationData = myData.destinations;

moon.addEventListener('click' , ()=>{
    const activeDEstination = 
    console.log(destinationData[0].name);
    destinationName.innerText = destinationData[0].name
    description.innerText = destinationData[0].description
    destinationDistance.innerText = destinationData[0].distance
    destinationTime.innerText = destinationData[0].travel
    destinationImage.src = destinationData[0].images.png
    moon.classList.add('border-active')
    mars.classList.remove('border-active')
    europa.classList.remove('border-active')
    titan.classList.remove('border-active')

})


mars.addEventListener('click' , ()=>{
    const activeDEstination = 
    console.log(destinationData[1].name);
    destinationName.innerText = destinationData[1].name
    description.innerText = destinationData[1].description
    destinationDistance.innerText = destinationData[1].distance
    destinationTime.innerText = destinationData[1].travel
    destinationImage.src = destinationData[1].images.png
    moon.classList.remove('border-active')
    mars.classList.add('border-active')
    europa.classList.remove('border-active')
    titan.classList.remove('border-active')


})

europa.addEventListener('click' , ()=>{
    const activeDEstination = 
    console.log(destinationData[2].name);
    destinationName.innerText = destinationData[2].name
    description.innerText = destinationData[2].description
    destinationDistance.innerText = destinationData[2].distance
    destinationTime.innerText = destinationData[2].travel
    destinationImage.src = destinationData[2].images.png
    moon.classList.remove('border-active')
    mars.classList.remove('border-active')
    europa.classList.add('border-active')
    titan.classList.remove('border-active')
    

})





titan.addEventListener('click' , ()=>{
    const activeDEstination = 
    console.log(destinationData[3].name);
    destinationName.innerText = destinationData[3].name
    description.innerText = destinationData[3].description
    destinationDistance.innerText = destinationData[3].distance
    destinationTime.innerText = destinationData[3].travel
    destinationImage.src = destinationData[3].images.png
    moon.classList.remove('border-active')
    mars.classList.remove('border-active')
    europa.classList.remove('border-active')
    titan.classList.add('border-active')

})