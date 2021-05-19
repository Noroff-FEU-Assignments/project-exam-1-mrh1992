const url = "http://localhost:8888/hollund-plants/wp-json/wp/v2/posts?_embed&per_page=12";
const postsContainer = document.querySelector(".posts-container");
const loadMore = document.querySelector(".load-more");

async function getPosts() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        console.log(results);

        postsContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            console.log(results[i].name);

            postsContainer.innerHTML += `<div class="post-card">
                                            <img src=${results[i]._embedded['wp:featuredmedia']['0'].source_url} class="blog-img">
                                            <h3>${results[i].title.rendered}</h3>
                                            <p>By: ${results[i]._embedded.author[0].name}</p>
                                            <a href="blogdetails.html?id=${results[i].id}">
                                                <button class="read-button">Read Post</button>
                                            </a>
                                        </div>`;

        loadMore.style.display = "block";
        }

    } catch(error){
        console.log(error);
    }
}

getPosts();

// load more posts

let defaultPosts = 9;

loadMore.addEventListener("click", (e) => {

    const blogPost = document.querySelectorAll(".post-card");

    for (let i = defaultPosts; i < defaultPosts + 3; i++) {
        if (defaultPosts < blogPost.length) {
            blogPost[i].style.display = "block";
        }
    }

    defaultPosts += 3;

    if (defaultPosts >= blogPost.length) {
        loadMore.style.display = "none";
    }
})


