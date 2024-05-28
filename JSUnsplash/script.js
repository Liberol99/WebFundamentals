let getButton = document.querySelector('#getButton');
let div = document.createElement('div');

getButton.addEventListener('click', getImages);

async function getImages() {
    try {
        let searchInput = document.querySelector('#searchInput').value;
        const url = `https://api.unsplash.com/search/photos?query=${searchInput.trim().toLowerCase()}`;
        const token = "16Pjcru-W3tomObzeY__8OF6nEdgPwO3sxSMqG-96Mo";
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Client-ID ${token}` // Token burada ekleniyor
            },
        });
        const responseData = await response.json();

        let src = responseData.results[0].urls.small;

        let imageText = `<img class="img-fluid mt-3" src=${src}/>`;
        div.innerHTML = imageText;
        document.querySelector('.jumbotron').append(div);

        console.log(responseData);
    } catch (error) {
        console.error('Hata:', error);
    }
}