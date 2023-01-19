// import films from "./cypress/support/intercept/films"

const baseURL = `https://resource-ghibli-api.onrender.com/films`
const baseURL2 = `https://resource-ghibli-api.onrender.com/people`
const newForm = document.querySelector("form")
const filmName = document.querySelector("#titles") //pulls film data
const newOl = document.querySelector("ol") //pulls ol data to input into html
const newUl = document.querySelector("ul") //pulls ul data to input into html
const newReviews = document.querySelector("reviews") //pulls review input data into html
const returnedPpl = document.querySelector("show-people") // pulls people data relating to films into html
const displayDetails = document.querySelector("#display-info") //pulls movie details to the html for films
const selectEl = document.querySelector("select")
const liPpl = document.createElement("li")
const liReview = document.createElement("li")

function movieDetail(movie) {
    const addedH3 = document.createElement("h3")
    const releaseYrP = document.createElement("p")
    const descriptionP = document.createElement("p")
    displayDetails.append(addedH3, releaseYrP, descriptionP)

    selectEl.addEventListener("change", () => {
        movie.forEach((movies) => {
            if (selectEl.value === movies.id) {
                addedH3.textContent = movies.title
                releaseYrP.textContent = movies.release_date
                descriptionP.textContent = movies.description

            }

        })
    }


    )
}

// fetch for the films --v
fetch(`${baseURL}`)
    .then((films) => films.json())
    .then((filmsJSON) => {
        for (let i = 0; i < filmsJSON.length; i++) {
            const filmOption2 = document.createElement("option")
            filmOption2.setAttribute("value", filmsJSON[i].id)
            filmOption2.textContent = filmsJSON[i].title
            selectEl.append(filmOption2)
        }
        movieDetail(filmsJSON)









    })








// if (filmOption2.target.value === filmsJSON[i].id)
//     displayDetails.innerHTML = ""
// addedH3.textContent = `${filmsJSON[i].title}`

// if (target.value === filmsJSON[i].id)
// for (let i = 0; i < .length; i++) {
//     const movieDisInfo = document.createElement("option")
//     movieDisInfo.textContent = filmsJSON[i].description
//     selectEl.append(movieDisInfo)


// }

// .catch()

//people section w/li,ol made
//         const peopleInfoCard = document.createElement("section")
//         peopleInfoCard.setAttribute("class", "card")




// To ensure Cypress tests work as expeded, add any code/functions that you would like to run on page load inside this function

// import films from "./cypress/support/intercept/films"

function run() {
    // Add code you want to run on page load here 



}

// This function will "pause" the functionality expected on load long enough to allow Cypress to fully load
// So that testing can work as expected for now
// A non-hacky solution is being researched
//DO NOT DELETE!!! --v
setTimeout(run, 1000);
