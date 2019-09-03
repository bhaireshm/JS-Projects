
function getWeather(woeid) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
        .then(res => {
            //console.log(res);
            return res.json();
        })
        .then(data => {
            //console.log(data);
            const today = data.consolidated_weather[0];
            console.log(`Today's weather in ${data.title} temperature is b/w ${today.min_temp} and ${today.max_temp}.`);
        })
        .catch(err => {
            console.log(err);
        })
        ;
}

// getWeather(44418);
// getWeather(2487956);
//getWeather(135485);

async function getWeather2(woeid) {

    try {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        // console.log(data);
        // const today = data.consolidated_weather[0];
        // console.log(`Today's weather in ${data.title} temperature is b/w ${today.min_temp} and ${today.max_temp}.`);

        // const tom = data.consolidated_weather[1];
        // console.log(`Tom's weather in ${data.title} temperature is b/w ${tom.min_temp} and ${tom.max_temp}.`);

        for (let i of data.consolidated_weather) {
            console.log(`DATE : ${i.applicable_date}    's Weather in ${data.title} temperature is b/w ${i.min_temp} and ${i.max_temp}.`);
        }

    } catch (error) {
        console.log(error);
    }
}

getWeather2(2487956);



























