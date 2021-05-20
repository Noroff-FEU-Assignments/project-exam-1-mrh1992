const detailContainer = document.querySelector(".blogdetail-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url ="http://localhost:8888/hollund-plants/wp-json/wp/v2/posts/" + id + "?_embed";

console.log(url);

async function fetchBlog() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);


        const convertDate = new Date (details.date).toLocaleString("en-GB", {day: "numeric", month: "long", year: "numeric",});

        detailContainer.innerHTML += `<div class="posts-container">
                                        <h1>${details.title.rendered}</h1>
                                        <div class="author-info">
                                            <p class="posted-date">Posted: ${convertDate}<p>
                                            <p>Written by: ${details._embedded.author[0].name}</p>
                                        </div>
                                        <div class="blog-content">${details.content.rendered}</div>
                                    </div>`;
    } 
    catch(error) {
        console.log();
    }
}

fetchBlog();

