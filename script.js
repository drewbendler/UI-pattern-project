// liquid curve twice please spot near hub stem birth foster birth badge
let menu = document.getElementById('nav');

fetch('https://rest.coinapi.io/v1/exchanges', {
    headers: {
        'x-api-key': 'DF1E61FA-326F-4FFA-BF19-5B31139A6463'
    }
});

menu.addEventListener('click', menuDropDown);

let baseUrl = 'https://rest.coinapi.io/v1/exchanges';

function menuDropDown (e) {
	e.preventDefault();

fetch(baseUrl).then(res => {
return res.json();
})
.then(res => {
	let exchange = '/name/';
	console.log(baseUrl + exchange, res);
})
.catch(err => {
	console.log('failed...')
})
}







