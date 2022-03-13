async function renderData() {
  //get the div
  //get data
  //render data
  var application = document.querySelector('#app');
  console.log(application);
  var data = await getData();
  application.innerHTML = `
  <div>Name: ${data.name}</div>
  <div>ID: ${data.id}</div>
  <div>Height: ${data.height}</div>
  `;
}
async function getData() {
  var result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto'); // get the data

  var data = await result.json(); // we know this data is JSON, so we can use the JSON function to get the json in javascript
  return data;
}

renderData();
