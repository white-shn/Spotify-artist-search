const accessToken = "BQDvBzWL11fg9V9dYJie5WwE9ituiDDuZKeSqojLMM6KCUWlkNdDIPHbChprOLy-Np4RTh4sXAoXAkYHkhBGUVPUdRY3KoEHgjAwZZ3-z5Yg0JHTiuo-oFcH6fwfRezjPe3fs-kiiR0n";

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

    console.log(response.status);

    const data = await response.json();
    console.log(data);

    const artistData = data.artists.items[0];
    console.log("artistData:", artistData);
    console.log("followers:", artistData.followers);

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
