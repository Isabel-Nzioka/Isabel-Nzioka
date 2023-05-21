console.log("Hello Js");



const body = document.querySelector('body');
body.style.background = 'linear-gradient(to bottom, rgba(#ccc, 0.5) , rgba(#ddd, 0.5))';
body.style.backgroundImage = 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,1) 90%), url( " ./images/cloudy.jpg")';
// ,url( " ./images/cloudy.jpg")


const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  console.log(location);

  
const timestamp = Date.now();


  fetch(`http://localhost:8080/weather?address=${location}`).then((response) =>
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {

        let det = data.forecast.filter(item =>  new Date(item.dt_txt) > timestamp);
        let gote = det.slice();
        gote.splice(6)

      console.log(gote)
      //  console.log(data.forecast)

        messageOne.textContent = data.location;
        messageTwo.textContent = `${data.forecast.dt}, ${data.forecast.weather[0].main}: ${data.forecast.weather[0].description}`
      }
    })
  );
});

getCoords() 
function getCoords() {
  navigator.geolocation.getCurrentPosition((success) => {
  let {latitude, longitude} = success.coords


  })
}

const forecase = [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'},{id: '5'}, {id: '6'}, {id: '7'}, {id: '8'}]
let got = forecase.slice();
got.splice(6)

console.log(forecase)
console.log(got)



