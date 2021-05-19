const detailContainer = document.querySelector(".blogdetail-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url ="http://localhost:8888/hollund-plants/wp-json/wp/v2/posts/" + id;

console.log(url);

async function fetchBlog() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHTML(details);
    } 
    catch(error) {
        console.log();
    }
}

fetchBlog();

function createHTML(details) {
    detailContainer.innerHTML = `<div class="posts-container">
                                    <h1>${details.title.rendered}</h1>
                                    <div>${details.content.rendered}</div>
                                </div>`;
}