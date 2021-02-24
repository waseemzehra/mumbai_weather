var loc = document.getElementById(".location");
var temperature = document.querySelector(".temp");

window.addEventListener("load", () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=de019ef58a782891863fede080702cd5&units=metric')
        .then((Response) => {
            return Response.json()
        .then((data) => {
            var mum = data['name'];
            var t = data['main']['temp'];

            location.innerHTML = mum;
            temp.innerHTML = t;
        })
        })
    .catch(err => alert("Did not fetch data"))
})