button = document.getElementById('button');
input = document.getElementById('urltext');
img = document.getElementById('img');

button.addEventListener("click", function(e){
    const urltext = input.value    
    fetchData(urltext);
    input.value = '';
})

async function fetchData(urltext) {
    try {
    const url = `https://api.qrserver.com/v1/create-qr-code/?data=${urltext}&size=100x100`;
    const response = await fetch(url);
    console.log(response);
    
    if (!response.ok) {
        throw new Error("Could not fetch resource");
    }
    img.src = response.url

    } catch (error) {
        console.log(error);
    }
}