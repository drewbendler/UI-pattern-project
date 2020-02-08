// liquid curve twice please spot near hub stem birth foster birth badge
let bitcoinLink = document.getElementById('link1');
let ethereumLink = document.getElementById('link2');
let litecoinLink = document.getElementById('link3');
let rippleLink = document.getElementById('link4');
let dogecoinLink = document.getElementById('link5');

let main = document.querySelector('main')

let bitcoinUrl = "https://coinranking1.p.rapidapi.com/coin/1"; 

let ethereumUrl = "https://coinranking1.p.rapidapi.com/coin/2"; 

let rippleUrl = "https://coinranking1.p.rapidapi.com/coin/3";

let litecoinUrl = "https://coinranking1.p.rapidapi.com/coin/7";

let dogecoinUrl = "https://coinranking1.p.rapidapi.com/coin/20";

let homepageLink = document.getElementById('title');

let iconDiv = document.getElementById("iconpic");

let descripton = document.getElementById('object-description');


let stats = document.getElementById('stats');

        
let searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', search);


function search (e) {
  e.preventDefault();
  let searchBtn = document.getElementById("input");
  let searchNumb = searchBtn.value;
  console.log(searchNumb);

  let baseurl = "https://api.coinranking.com/v1/public/coins"

fetch(baseurl).then(res => {
  return res.json();
})
.then(res => {

  console.log('success', res);
	iconDiv.setAttribute('src', res.data.coins[searchNumb].iconUrl)
	iconDiv.setAttribute('height', '300')
let searchTitle = document.getElementById('object-title').innerHTML = res.data.coins[searchNumb].name;
let searchDescript = document.getElementById('object-description').innerHTML = res.data.coins[searchNumb].description;
let searchPrice = document.getElementById('price').innerHTML = '$ ' + res.data.coins[searchNumb].price;
let searchDayChange = document.getElementById('dayChange').innerHTML = res.data.coins[searchNumb].change + '%';
let searchMarketCap = document.getElementById('marketCap').innerHTML = '$ ' + res.data.coins[searchNumb].marketCap;
let searchWebsite = document.getElementById('website').innerHTML = res.data.coins[searchNumb].websiteUrl;
})
 .catch(err => {
 	console.log('failed', err)
 })
}         

bitcoinLink.addEventListener('click', displayBitcoin);

ethereumLink.addEventListener('click', displayEthereum);

rippleLink.addEventListener('click', displayRipple);

litecoinLink.addEventListener('click', displayLiteCoin);

dogecoinLink.addEventListener('click', displayDogeCoin);

let coinTitle = document.getElementById('object-title');




fetch("https://coinranking1.p.rapidapi.com/coin/1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coinranking1.p.rapidapi.com",
		"x-rapidapi-key": "7459b83286mshb816895270d9560p1c7af7jsnfba169e78b6a"
	}

})

function displayBitcoin (e) {
	e.preventDefault();
	console.log('success',);

fetch(bitcoinUrl).then(response => {
	return response.json();
	console.log(response)
})
.then(response => {

	console.log('success', response);

	iconDiv.setAttribute('src', response.data.coin.iconUrl)
	iconDiv.setAttribute('height', '300')
let bitcoinTitle = document.getElementById('object-title').innerHTML = response.data.coin.name;
let bitcoinDescript = document.getElementById('object-description').innerHTML = response.data.coin.description;
let bitcoinPrice = document.getElementById('price').innerHTML = '$ ' + response.data.coin.price;
let bitcoinDayChange = document.getElementById('dayChange').innerHTML = response.data.coin.change + '%';
let bitcoinMarketCap = document.getElementById('marketCap').innerHTML = '$ ' + response.data.coin.marketCap;
let bitcoinWebsite = document.getElementById('website').innerHTML = response.data.coin.websiteUrl;
})
.catch(err => {
	console.log('failed', err);
})

}
fetch("https://coinranking1.p.rapidapi.com/coin/2", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coinranking1.p.rapidapi.com",
		"x-rapidapi-key": "7459b83286mshb816895270d9560p1c7af7jsnfba169e78b6a"
	}

})

function displayEthereum (e) {
	e.preventDefault();
	console.log('success');

fetch(ethereumUrl).then(response => {
	return response.json();
})
.then(response => {

	console.log('success', response);

	iconDiv.setAttribute('src', response.data.coin.iconUrl)
	iconDiv.setAttribute('height', '300')
let ethereumTitle = document.getElementById('object-title').innerHTML = response.data.coin.name;
let ethereumDescript = document.getElementById('object-description').innerHTML = response.data.coin.description;
let ethereumPrice = document.getElementById('price').innerHTML = '$ ' + response.data.coin.price;
let ethereumDayChange = document.getElementById('dayChange').innerHTML = response.data.coin.change + '%';
let ethereumMarketCap = document.getElementById('marketCap').innerHTML = '$ ' + response.data.coin.marketCap;
let ethereumWebsite = document.getElementById('website').innerHTML = response.data.coin.websiteUrl;
})
.catch(err => {
	console.log('failed', err);
})

}

fetch("https://coinranking1.p.rapidapi.com/coin/3", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coinranking1.p.rapidapi.com",
		"x-rapidapi-key": "7459b83286mshb816895270d9560p1c7af7jsnfba169e78b6a"
	}

})

function displayRipple (e) {
	e.preventDefault();
	console.log('success');

fetch(rippleUrl).then(response => {
	return response.json();
})
.then(response => {

	console.log('success', response);

	iconDiv.setAttribute('src', response.data.coin.iconUrl)
	iconDiv.setAttribute('height', '300')
let rippleTitle = document.getElementById('object-title').innerHTML = response.data.coin.name;
let rippleDescript = document.getElementById('object-description').innerHTML = response.data.coin.description;
let ripplePrice = document.getElementById('price').innerHTML = '$ ' + response.data.coin.price;
let rippleDayChange = document.getElementById('dayChange').innerHTML = response.data.coin.change + '%';
let rippleMarketCap = document.getElementById('marketCap').innerHTML = '$ ' + response.data.coin.marketCap;
let rippleWebsite = document.getElementById('website').innerHTML = response.data.coin.websiteUrl;
})
.catch(err => {
	console.log('failed', err);
})

}



fetch("https://coinranking1.p.rapidapi.com/coin/7", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coinranking1.p.rapidapi.com",
		"x-rapidapi-key": "7459b83286mshb816895270d9560p1c7af7jsnfba169e78b6a"
	}

})

function displayLiteCoin (e) {
	e.preventDefault();
	console.log('success');

fetch(litecoinUrl).then(response => {
	return response.json();
})
.then(response => {

	console.log('success', response);

	iconDiv.setAttribute('src', response.data.coin.iconUrl)
	iconDiv.setAttribute('height', '300')
let rippleTitle = document.getElementById('object-title').innerHTML = response.data.coin.name;
let rippleDescript = document.getElementById('object-description').innerHTML = response.data.coin.description;
let ripplePrice = document.getElementById('price').innerHTML = '$ ' + response.data.coin.price;
let rippleDayChange = document.getElementById('dayChange').innerHTML = response.data.coin.change + '%';
let rippleMarketCap = document.getElementById('marketCap').innerHTML = '$ ' + response.data.coin.marketCap;
let rippleWebsite = document.getElementById('website').innerHTML = response.data.coin.websiteUrl;
})
.catch(err => {
	console.log('failed', err);
})

}


fetch("https://coinranking1.p.rapidapi.com/coin/20", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coinranking1.p.rapidapi.com",
		"x-rapidapi-key": "7459b83286mshb816895270d9560p1c7af7jsnfba169e78b6a"
	}

})

function displayDogeCoin (e) {
	e.preventDefault();
	console.log('success');

fetch(dogecoinUrl).then(response => {
	return response.json();
})
.then(response => {

	console.log('success', response);

	iconDiv.setAttribute('src', response.data.coin.iconUrl)
	iconDiv.setAttribute('height', '300')
let dogecoinTitle = document.getElementById('object-title').innerHTML = response.data.coin.name;
let dogecoinDescript = document.getElementById('object-description').innerHTML = response.data.coin.description;
let dogecoinPrice = document.getElementById('price').innerHTML = '$ ' + response.data.coin.price;
let dogecoinDayChange = document.getElementById('dayChange').innerHTML = response.data.coin.change + '%';
let dogecoinMarketCap = document.getElementById('marketCap').innerHTML = '$ ' + response.data.coin.marketCap;
let dogecoinWebsite = document.getElementById('website').innerHTML = response.data.coin.websiteUrl;
})
.catch(err => {
	console.log('failed', err);
})
}





