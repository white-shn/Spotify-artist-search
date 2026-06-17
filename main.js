const accessToken = "PASTE_YOUR_ACCESS_TOKEN_HERE";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function searchArtist(artist) {

    const response = await fetch(
        `https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=1`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    );

    const data = await response.json();

    const artistData = data.artists.items[0];

    document.querySelector(".artist-name").innerHTML =
        artistData.name;

    document.querySelector(".followers").innerHTML =
        "Followers: " +
        artistData.followers.total.toLocaleString();

    document.querySelector(".genres").innerHTML =
        "Genres: " +
        artistData.genres.join(", ");

    document.querySelector(".artist-image").src =
        artistData.images[0].url;

    document.querySelector(".artist").style.display =
        "block";
}

searchBtn.addEventListener("click", () => {
    searchArtist(searchBox.value);
});
