


document.querySelector('button').addEventListener('click', getFacts)
 
function getFacts(){
  const choice = document.querySelector('input').value
  const url = (`https://api.openweathermap.org/data/2.5/weather?q=${choice}&appid=bd682391561f4fd5147dbcb975c1df31`)

  fetch (url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.main.temp)
        console.log(data.sys.sunrise)
        console.log(data.sys.sunset)
      
        document.querySelector('h2').innerText = data.main.temp
        document.querySelector('h3').innerText = data.sys.sunrise
        document.querySelector('h4').innerText = data.sys.sunset
      })
      .catch(err => {
          console.log(`error ${err}`)
      })
    }
  
