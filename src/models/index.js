const Actor = require("./Actor");
const Director = require("./Director");
const Genre = require("./Genre");
const Movie = require("./Movie");

//una película puede tener varios directores
Movie.belongsToMany(Director, { through: "MovieDirector" });
Director.belongsToMany(Movie, { through: "MovieDirector" });

//una película pude tener varios géneros
Movie.belongsToMany(Genre, { through: "MovieGenre" });
Genre.belongsToMany(Movie, { through: "MovieGenre" });

//una película tiene varios actores
Movie.belongsToMany(Actor, { through: "MovieActor" });
Actor.belongsToMany(Movie, { through: "MovieActor" });
