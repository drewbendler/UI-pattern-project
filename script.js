// liquid curve twice please spot near hub stem birth foster birth badge
let bitcoinLink = document.getElementById('link1');
let ethereumLink = document.getElementById('link2');
let litecoinLink = document.getElementById('link3');
let rippleLink = document.getElementById('link4');
let dogecoinLink = document.getElementById('link5');

let baseUrl = "https://rest.coinapi.io/v1/exchanges"; 

let iconDiv = document.getElementById("iconpic");

let descripton = document.getElementById('object-description');

bitcoinLink.addEventListener('click', testFunc);

function testFunc (e) {
	e.preventDefault();
	console.log('test successful');
	
}



fetch('https://rest.coinapi.io/v1/exchanges', {
    headers: {
        'x-api-key': 'DF1E61FA-326F-4FFA-BF19-5B31139A6463'
    }
});






