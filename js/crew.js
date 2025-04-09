const slides = document.querySelectorAll('.slide')
const slide1 = document.getElementById('slide1')
const slide2 = document.getElementById('slide2')
const slide3 = document.getElementById('slide3')
const slide4 = document.getElementById('slide4')
const role = document.getElementById('crew-role')
const crewName = document.getElementById('crew-name')
const bio = document.getElementById('crew-bio')
const crewImage = document.getElementById('crew-image')

slides.forEach(slide => {
    slide.addEventListener('click', function (e) {
      e.preventDefault(); // prevent default anchor behavior
      slides.forEach(s => s.classList.remove('active')); // remove active from all
      this.classList.add('active'); // add active to clicked
    });
  });


  
 
let myData = JSON.parse(sessionStorage.getItem('data')) || [];
const crewData = myData.crew
console.log(crewData);

if(myData.length == 0){
    fetch('./data.json')
    .then((res) => res.json())
    .then((data)=>{
        let receivedData = data;
        sessionStorage.setItem('data' , JSON.stringify(receivedData))
        console.log(data);
    })

}

slide1.addEventListener('click' , ()=>{
  role.innerText = crewData[0].role.toUpperCase()
  crewName.innerText = crewData[0].name.toUpperCase()
  bio.innerText = crewData[0].bio
  crewImage.src = crewData[0].images.png
  
  


})

slide2.addEventListener('click' , ()=>{
  role.innerText = crewData[1].role.toUpperCase()
  crewName.innerText = crewData[1].name.toUpperCase()
  bio.innerText = crewData[1].bio
  crewImage.src = crewData[1].images.png

})

slide3.addEventListener('click' , ()=>{
  role.innerText = crewData[2].role.toUpperCase()
  crewName.innerText = crewData[2].name.toUpperCase()
  bio.innerText = crewData[2].bio
  crewImage.src = crewData[2].images.png

})
  
  
slide4.addEventListener('click' , ()=>{
  role.innerText = crewData[3].role.toUpperCase()
  crewName.innerText = crewData[3].name.toUpperCase()
  bio.innerText = crewData[3].bio
  crewImage.src = crewData[3].images.png

})





