const btnEl = document.getElementById('btn');
const joke_ele = document.getElementById('joke')

const api_key = "pSjvBkjykFRTwkwobUptCA==WfHDtokBl53OMHiU";

const options = {
    method: "GET",
    headers: {
        "X-APi-Key" : api_key,
    },
}; 

const api_Url = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    joke_ele.innerText = "Updating..";

    btnEl.disabled = true;
    btnEl.innerText = "Loading...";

    const response = await fetch(api_Url, options)
    const data = await response.json()

    btnEl.disabled = false;
    btnEl.innerText = "Tell Me a Joke";

    joke_ele.innerText = data[0].joke;
}
btnEl.addEventListener("click", getJoke); 