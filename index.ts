// Import stylesheets
import './style.css';

// Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const urlAPI = 'https://restcountries.eu/rest/v2/alpha/PER';

let getData = fetch(urlAPI);

// getData.then(function(response) {
//   console.log(response.json());
// });

// getData.then(data => data.json()).then(rpta => console.log(rpta));

const examplePromise = new Promise((resolve, reject) => {
  resolve({
    name: 'Jorge',
    lastName: 'Zevallos'
  });
});

examplePromise.then(res => console.log('la promesa es: ', res));
