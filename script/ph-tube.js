//
// load the btn categories
function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((Response) => Response.json())
    .then((data) => {
      displayCategories(data.categories);
    });
}

function displayCategories(categories) {
  const categoriesContainer = document.getElementById("categoties-container");

  for (let cat of categories) {
    // console.log(cat);
    const div = document.createElement("div");
    div.innerHTML = `
    <button class='btn bg-[#25252533] hover:bg-[#FF1F3D] hover:text-white'>${cat.category}</button>
    `;
    categoriesContainer.appendChild(div);
  }
}
loadCategories();

//
// load videos in main body

const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((Response) => Response.json())
    .then((data) => {
      displayVideos(data.videos);
    });
};

const displayVideos = (videos) => {
  let videosContainer = document.getElementById("videos-Container");

  //use of forEach
  videos.forEach((video) => {
    // console.log(video);

    let videoCard = document.createElement("div");
    videoCard.innerHTML = `
    
 <div class="card bg-base-100 shadow-sm">
          <figure class="relative">
            <img
              class="w-full h-[200px] object-cover"
              src="${video.thumbnail} "
              alt="image"
            />
            <span
              class="absolute bottom-2 right-2 bg-black text-white px-2 rounded text-sm"
              >3hrs 56 min ago</span
            >
          </figure>
          <div class="flex gap-5 py-5">
            <div class="profile">
              <div class="avatar">
                <div
                  class="ring-primary ring-offset-base-100 w-7 rounded-full ring ring-offset-2"
                >
                  <img
                    src="${video.authors[0].profile_picture} "
                  />
                </div>
              </div>
            </div>
            <div class="intro">
              <h2 class="text-sm font-semibold">${video.title} </h2>
              <p class="flex gap-2 text-sm text-gray-400">
                ${video.authors[0].profile_name}
                <img
                  class="w-5 h-5"
                  src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png"
                  alt=""
                />
              </p>
              <p class="text-sm text-gray-400">${video.others.views} views</p>
            </div>
          </div>
        </div>
    
    
    `;
    videosContainer.appendChild(videoCard);
  });
};

loadVideos();
