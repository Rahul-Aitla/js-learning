const form = document.querySelector('form');
// this usecase will give you empty value
//const height = parseInt(document.querySelector('#height').value)
console.log("hii");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const discri = document.querySelector('#discription');

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid height ${height}`
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight ${weight}`
    }else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;

       if (bmi < 18.6) {
        discri.innerHTML = `<span>You are under weight</span>`
       }else if (bmi > 18.6 && bmi < 24.9) {
        discri.innerHTML = `<span>Your weigt is within Range</span>`
       }else {
        discri.innerHTML = `<span>You are over weight</span>`
       }
    }
})
// bmi < 18.6 && discri.innerHTML = `You are under weight`
// bmi > 18.6 && bmi < 24.9 && console.log("Within Range");
// bmi > 24.9 && console.log("You are over weight");