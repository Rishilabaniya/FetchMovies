// Replace 'YOUR_API_KEY' with the API key you got from TMDB
let pagenumber = 1;
let apiKey = '362dd379548a0267bc59fce4576c0a6e';
let apiBaseUrl = 'https://api.themoviedb.org/3';
let url = `${apiBaseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${pagenumber}`; // Fetching the first page



// Use the fetch API to get data from TMDB

const movieDiv = document.getElementById('main');

const nextPage = document.getElementById('next-page');
const prevPage = document.getElementById('prev-page');


fetch(url)

.then(response => response.json())
.then(data => {
console.log(data)
movieDiv.innerHTML = "";
data.results.map((item) =>{
    movieDiv.innerHTML += `
    <div class="movie" id="movie">
    <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" alt="${item.title}">
    <div class="movie-info">
        <h3 class="title">${item.title}</h3>
        <span class="green">${item.vote_average}</span>
    </div>
    <div class="overview">
        <h3>overview</h3>
        <p>${item.overview}</p>
    </div>
</div>
    `
})
})
.catch(error => {
console.error('Error fetching data: ', error);
});


nextPage.addEventListener("click", () =>{
pagenumber += 1;
if( pagenumber > 1){
    prevPage.style.display="block";
}
else{
    prevPage.style.display="none";
}
console.log(pagenumber)
movieDiv.innerHTML = "";
fetch(`${apiBaseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${pagenumber}`)
.then(response => response.json())
.then(data => {
    console.log(data)

    data.results.map((item) =>{
        movieDiv.innerHTML += `
        <div class="movie" id="movie">
        <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" alt="${item.title}">
        <div class="movie-info">
            <h3 class="title">${item.title}</h3>
            <span class="green">${item.vote_average}</span>
        </div>
        <div class="overview">
            <h3>overview</h3>
            <p>${item.overview}</p>
        </div>
    </div>
        `
    })
})
.catch(error => {
    console.error('Error fetching data: ', error);
});
})


prevPage.addEventListener("click", () =>{
    pagenumber -= 1;
if( pagenumber > 1){
    prevPage.style.display="block";
    return
}
else{
    prevPage.style.display="none";
}

console.log(pagenumber)
console.log("clicked")
movieDiv.innerHTML = "";
fetch(`${apiBaseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${pagenumber}`)
.then(response => response.json())
.then(data => {
    console.log(data)

    data.results.map((item) =>{
        movieDiv.innerHTML += `
        <div class="movie" id="movie">
        <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" alt="${item.title}">
        <div class="movie-info">
            <h3 class="title">${item.title}</h3>
            <span class="green">${item.vote_average}</span>
        </div>
        <div class="overview">
            <h3>overview</h3>
            <p>${item.overview}</p>
        </div>
    </div>
        `
    })
})
.catch(error => {
    console.error('Error fetching data: ', error);
});
})