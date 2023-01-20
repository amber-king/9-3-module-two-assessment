// import films from "./cypress/support/intercept/films"

// import people from "./cypress/support/intercept/people"

// const baseURL = `https://resource-ghibli-api.onrender.com/films`
// const baseURL2 = `https://resource-ghibli-api.onrender.com/people`
// const newForm = document.querySelector("form")
// const filmName = document.querySelector("#titles") //pulls film data
// const newOl = document.querySelector("ol") //pulls ol data to input into html
// // const newUl = document.querySelector("ul") //pulls ul data to input into html
// const newReviews = document.querySelector("reviews") //pulls review input data into html
// // const returnedPpl = document.querySelector("show-people") // pulls people data relating to films into html
// const displayDetails = document.querySelector("#display-info") //pulls movie details to the html for films
// const selectEl = document.querySelector("select") //pulls data for select section in html
// const liPpl = document.createElement("li") //creates li for people section in html
// let title = ''
// const resetButton = document.querySelector("#reset-reviews")

// // makes spaceholders to append movie info to movie details section in html
// function movieDetail(movie) {
//     const addedH3 = document.createElement("h3")
//     const releaseYrP = document.createElement("p")
//     const descriptionP = document.createElement("p")
//     displayDetails.append(addedH3, releaseYrP, descriptionP)

//     // change is used to make the change b/t different clicked movies quicker ---v
//     selectEl.addEventListener("change", () => {
//         movie.forEach((movies) => {
//             if (selectEl.value === movies.id) {
//                 addedH3.textContent = movies.title
//                 title = movies.title
//                 releaseYrP.textContent = movies.release_date
//                 descriptionP.textContent = movies.description

//             }

//         })

//     }


//     )
// }

// // adds to the li the info in the ul section --v
// newForm.addEventListener("submit", (event) => {
//     event.preventDefault()
//     if (title === '') (alert('Please select a movie first'))
//     else {
//         const newUl = document.querySelector("ul")
//         const liReview = document.createElement("li")
//         liReview.setAttribute("class", "deleLi")
//         liReview.innerHTML = `<strong>${title}: </strong>${event.target.review.value}`
//         newUl.append(liReview)
//         newForm.reset()
//     }




// })


// // delete the the ratings as the user inputs new info --v
// resetButton.addEventListener("click", (event) => {
//     event.preventDefault()
//     const deleteLi = document.querySelectorAll(".deleLi")
//     for (let i = 0; i < deleteLi.length; i++) {
//         deleteLi[i].remove()
//     }

// })
// // adds li 


// // fetch for the films --v
// fetch(`${baseURL}`)
//     .then((films) => films.json())
//     .then((filmsJSON) => {
//         // loops through the film names to later append to the json file --v
//         for (let i = 0; i < filmsJSON.length; i++) {
//             const filmOption2 = document.createElement("option")
//             filmOption2.setAttribute("value", filmsJSON[i].id)
//             filmOption2.textContent = filmsJSON[i].title
//             selectEl.append(filmOption2)
//         }
//         movieDetail(filmsJSON)

//         //people section added in along with connected button --v
//         // returnedPpl.addEventListener("submit", (event) => {
//         //     event.preventDefault()
//             // const liPpl = document.createElement("li")
//         //     fetch(`${baseURL2}`)
//         //         .then((peoples) => peoples.json())
//         //         .then((peoplesJSON) => {
//         //             for (let i = 0; i < peoplesJSON.length; i++) {
//         //                 const liPpl = document.createElement("li")
//         //                 liPpl.setAttribute("value", peoplesJSON[i].id)
//         //                 liPpl.textContent = peoplesJSON[i].name
//         //                 filmsJSON.append(liPpl)
//         //             }

//         //         })

//         // })
//     })





// To ensure Cypress tests work as expeded, add any code/functions that you would like to run on page load inside this function

// import films from "./cypress/support/intercept/films"

function run() {
    // Add code you want to run on page load here 
    const baseURL = `https://resource-ghibli-api.onrender.com/films`
    const baseURL2 = `https://resource-ghibli-api.onrender.com/people`
    const newForm = document.querySelector("form")
    const filmName = document.querySelector("#titles") //pulls film data
    const newOl = document.querySelector("ol") //pulls ol data to input into html
    // const newUl = document.querySelector("ul") //pulls ul data to input into html
    const newReviews = document.querySelector("reviews") //pulls review input data into html
    // const returnedPpl = document.querySelector("show-people") // pulls people data relating to films into html
    const displayDetails = document.querySelector("#display-info") //pulls movie details to the html for films
    const selectEl = document.querySelector("select") //pulls data for select section in html
    const liPpl = document.createElement("li") //creates li for people section in html
    let title = ''
    const resetButton = document.querySelector("#reset-reviews")
    
    // makes spaceholders to append movie info to movie details section in html
    function movieDetail(movie) {
        const addedH3 = document.createElement("h3")
        const releaseYrP = document.createElement("p")
        const descriptionP = document.createElement("p")
        displayDetails.append(addedH3, releaseYrP, descriptionP)
    
        // change is used to make the change b/t different clicked movies quicker ---v
        selectEl.addEventListener("change", () => {
            movie.forEach((movies) => {
                if (selectEl.value === movies.id) {
                    addedH3.textContent = movies.title
                    title = movies.title
                    releaseYrP.textContent = movies.release_date
                    descriptionP.textContent = movies.description
    
                }
    
            })
    
        }
    
    
        )
    }
    
    // adds to the li the info in the ul section --v
    newForm.addEventListener("submit", (event) => {
        event.preventDefault()
        if (title === '') (alert('Please select a movie first'))
        else {
            const newUl = document.querySelector("ul")
            const liReview = document.createElement("li")
            liReview.setAttribute("class", "deleLi")
            liReview.innerHTML = `<strong>${title}: </strong>${event.target.review.value}`
            newUl.append(liReview)
            newForm.reset()
        }
    
    
    
    
    })
    
    
    // delete the the ratings as the user inputs new info --v
    resetButton.addEventListener("click", (event) => {
        event.preventDefault()
        const deleteLi = document.querySelectorAll(".deleLi")
        for (let i = 0; i < deleteLi.length; i++) {
            deleteLi[i].remove()
        }
    
    })
    // adds li 
    
    
    // fetch for the films --v
    fetch(`${baseURL}`)
        .then((films) => films.json())
        .then((filmsJSON) => {
            // loops through the film names to later append to the json file --v
            for (let i = 0; i < filmsJSON.length; i++) {
                const filmOption2 = document.createElement("option")
                filmOption2.setAttribute("value", filmsJSON[i].id)
                filmOption2.textContent = filmsJSON[i].title
                selectEl.append(filmOption2)
            }
            movieDetail(filmsJSON)
    
            //people section added in along with connected button --v
            // returnedPpl.addEventListener("submit", (event) => {
            //     event.preventDefault()
                // const liPpl = document.createElement("li")
            //     fetch(`${baseURL2}`)
            //         .then((peoples) => peoples.json())
            //         .then((peoplesJSON) => {
            //             for (let i = 0; i < peoplesJSON.length; i++) {
            //                 const liPpl = document.createElement("li")
            //                 liPpl.setAttribute("value", peoplesJSON[i].id)
            //                 liPpl.textContent = peoplesJSON[i].name
            //                 filmsJSON.append(liPpl)
            //             }
    
            //         })
    
            // })
        })
    
    
    
    
    


}

// This function will "pause" the functionality expected on load long enough to allow Cypress to fully load
// So that testing can work as expected for now
// A non-hacky solution is being researched
//DO NOT DELETE!!! --v
setTimeout(run, 1000);
