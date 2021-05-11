const url = "http://localhost:8888/hollund-plants/wp-json/wp/v2/posts?_embed";
const postsContainer = document.querySelector(".posts-container");

async function getPosts() {
    try{
        const response = await fetch(url);

        const getResults = await response.json();

        createHTML(getResults);

    } catch(error){
        console.log(error);
    }
}

getPosts();

function createHTML(posts) {
    posts.forEach(function(post){
        postsContainer.innerHTML += `<div class="blog-posts">
                                        <img src=${post._embedded['wp:featuredmedia']['0'].source_url} class="blog-img">
                                        <h3>${post.title.rendered}</h3>
                                        <p>By: ${post._embedded.author[0].name}</p>
                                        <a href="#">
                                            <button class="read-button">Read Post</button>
                                        </a>
                                    </div>`;
    })
}