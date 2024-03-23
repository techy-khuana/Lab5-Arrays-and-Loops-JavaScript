/*
Steps 1-3 READ THE PDF!
*/
(function () {
  let videoGameForm = document.querySelector("#video-game-form");
  let allGameList = document.querySelector(".all-games");
  let allGameListItems = document.querySelectorAll(".all-games li");
  let myGameList = document.querySelector(".my-favourite-games");
  let myGames = [];

  // event listener for step 1
  videoGameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let platform = event.target.elements["platform-family"].value.toLowerCase();
    filterGames(platform);
  });

  // Function to filter games based on the selected platform
  function filterGames(platform) {
    allGameListItems.forEach((listItem) => {
      if (listItem.innerText.toLowerCase().includes(platform)) {
        listItem.classList.remove("hidden-item");
      } else {
        listItem.classList.add("hidden-item");
      }
    });
  }

  // event listener for step 2
  /* HTML for step 2 to add to the list
  <li class="list-group-item">VIDEO GAME NAME HERE</li>
  */
  allGameList.addEventListener("click", (event) => {
    let game = event.target.innerText;
    addToFavouriteGames(game);
  });

  // Function to add a game to the favorite list
  function addToFavouriteGames(game) {
    myGames.push(game);
    console.log("My Favourite Games:", myGames);
    renderFavouriteList();
  }

  // Function to remove a game from the favorite list
  function removeFromFavouriteGames(game) {
    let index = myGames.indexOf(game);
    if (index !== -1) {
      myGames.splice(index, 1);
      renderFavouriteList();
    }
  }

  // Function to render the favorite list
  function renderFavouriteList() {
    let myGamesList = document.querySelector(".my-favourite-games");
    myGamesList.innerHTML = ""; // Clear previous list items

    // Loop through myGames array and add each game to the list
    myGames.forEach(function (game) {
      let listItemHTML = "<li class='list-group-item'>" + game + "</li>";
      myGamesList.innerHTML += listItemHTML;
    });
  }

  // event listener for step 3
  myGameList.addEventListener("click", (event) => {
    let favGame = event.target.innerText;
    removeFromFavouriteGames(favGame);
  });
})();
