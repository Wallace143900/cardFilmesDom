const moviesList = [
    {
      title: "Matrix",
      poster: "./img/matrix-poster.jpg",
      genre: "Ficção Científica",
      synopsis: `O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro.`,
    },
    {
      title: "O Poderoso Chefão",
      poster: "./img/poderoso-chefao-poster.jpg",
      genre: "Drama",
      synopsis: `Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.`,
    },
    {
      title: "A Origem",
      poster: "./img/a-origem-poster.jpg",
      genre: "Ação",
      synopsis: `Dom Cobb é um ladrão com a rara habilidade de roubar segredos do inconsciente, obtidos durante o estado de sono. Impedido de retornar para sua família, ele recebe a oportunidade de se redimir ao realizar uma tarefa aparentemente impossível: plantar uma ideia na mente do herdeiro de um império. Para realizar o crime perfeito, ele conta com a ajuda do parceiro Arthur, o discreto Eames e a arquiteta de sonhos Ariadne. Juntos, eles correm para que o inimigo não antecipe seus passos.`,
    },
    {
      title: "Pulp Fiction",
      poster: "./img/pulp-fiction-poster.jpg",
      genre: "Crime",
      synopsis: `Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é convidado a acompanhá-la, um boxeador descumpre sua promessa de perder uma luta e um casal tenta um assalto que rapidamente sai do controle.`,
    },
    {
      title: "Interestelar",
      poster: "./img/interestellar-poster.jpg",
      genre: "Aventura",
      synopsis: `As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.`,
    },
  ];

  const watchlistList = [];
  
  function createCard(object){   
      const movieCard = document.createElement("li");
      const moviePoster = document.createElement("img");
      const movieContent = document.createElement("div");
      const movieInfo = document.createElement("div");
      const movieTitle = document.createElement("h3");
      const movieGenre = document.createElement("h4");
      const movieRating = document.createElement("span");
      const movieStarsDiv = document.createElement("div"); 
      const movieSynopsis = document.createElement("p");
      const movieActions = document.createElement("div");
      const buttonWatchlist = document.createElement("button");
      const buttonRentMovie = document.createElement("button");

      
      moviePoster.src = object.poster;
      moviePoster.alt = `poster do ${object.title}`;
      
      movieTitle.innerText = object.title
      movieGenre.innerText = object.genre;
      movieSynopsis.innerText = object.synopsis;
      movieRating.innerText = object.rated;
      buttonWatchlist.innerText = "Adicionar à Watchlist";
      buttonRentMovie.innerText = "Alugar";

      for (let i = 1; i <= 5; i++) {
        const starIcon = document.createElement("i");
    
        starIcon.classList.add("fa", "fa-star");
    
        if (i <= object.stars) {
          starIcon.classList.add("star-checked");
        }
    
        movieStarsDiv.appendChild(starIcon);
      }
      
      movieCard.className = "movie";
      moviePoster.classList.add("movie-poster");
      movieInfo.classList.add("movie-info");
      movieTitle.classList.add("movie-title");
      movieGenre.classList.add("movie-genre");
      movieSynopsis.classList.add("movie-synopsis");
      movieContent.classList.add("movie-content");
      movieRating.classList.add("movie-rating");
      movieStarsDiv.classList.add("movie-star-rating");
      movieActions.classList.add("movie-actions");
      buttonWatchlist.classList.add("movie-action-button");
      buttonRentMovie.classList.add("movie-action-button");

      if (object.rated == "R") {
        movieRating.classList.add("movie-rating-r");
      } else if (object.rated == "PG-13") {
        movieRating.classList.add("movie-rating-pg-13");
      } else {
        movieRating.classList.add("movie-rating-g");
      }

      buttonWatchlist.addEventListener("click", function(){
        watchlistList.push(object);

        renderWatchlistCards(watchlistList);
      });
      
      movieActions.append(buttonWatchlist, buttonRentMovie);
      movieInfo.append(movieTitle, movieGenre, movieRating, movieStarsDiv, movieSynopsis);
      movieContent.append(movieInfo, movieActions);
      movieCard.append(moviePoster, movieContent);
      
      return movieCard
    }  
    
    
    function renderCards(array){
        const movieUl = document.querySelector(".movies-list");

        for(let i = 0; i < array.length; i++){
          const currentObject = array[i];
          const card = createCard(currentObject);
          movieUl.appendChild(card);
    }
}
renderCards(moviesList);

function createWatchlistCard(object){   
  const movieCard = document.createElement("li");
  const moviePoster = document.createElement("img");
  const movieInfo = document.createElement("div");
  const movieTitle = document.createElement("h3");
  const movieGenre = document.createElement("h4");
  
  
  moviePoster.src = object.poster;
  moviePoster.alt = `poster do ${object.title}`;
  
  movieTitle.innerText = object.title;
  movieGenre.innerText = object.genre;
  movieCard.className = "movie";
  moviePoster.classList.add("movie-poster");
  movieInfo.classList.add("movie-info");
  movieTitle.classList.add("movie-title");
  movieGenre.classList.add("movie-genre");

  movieInfo.append(movieTitle, movieGenre);
  movieCard.append(moviePoster, movieInfo);

  return movieCard;
}

function renderWatchlistCards(array){
  const movieUl = document.querySelector(".watchlist-list");

  movieUl.innerHTML = "";

  for(let i = 0; i < array.length; i++){
    const currentObject = array[i];
    const card = createWatchlistCard(currentObject);
    movieUl.appendChild(card);
}
}