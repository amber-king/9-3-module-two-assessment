





// To ensure Cypress tests work as expeded, add any code/functions that you would like to run on page load inside this function

function run() {
    // Add code you want to run on page load here
    const baseURL = `https://resource-ghibli-api.onrender.com/`
    fetch(`${baseURL}`)
    .then(()=>())
    .then(()=>{

    })
}

// This function will "pause" the functionality expected on load long enough to allow Cypress to fully load
// So that testing can work as expected for now
// A non-hacky solution is being researched
//do not delete --v
setTimeout(run, 1000);
