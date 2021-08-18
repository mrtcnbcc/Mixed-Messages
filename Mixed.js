const allMovies = {
    horrorGenre: ["PSYCHO", "THE SILENCE OF THE LAMBS", "Carrie", "It", "A Nightmare on Elm Street", "The Ring", "Scream"],
    animatedGenre: ["Attack on Titan", "Gintama", "Black Clover", "My Neighbor Totoro", "Spirited Away", "Princess Mononoke"],
    fantasyGenre: ["The Lord of the Rings", "Star Wars", "Harry Potter", "Jumanji", "X-Man", "The Seventh Seal", "Pan’s Labyrinth", "The NeverEnding Story"],
    actionGenre: ["Venom", "Tenet", "Monster Hunter", "Deadpool", "Spider-Man", "Train to Busan", "Lucy", "John Wick", "Avengers", "Tomb Raider"] 
    
    }

const allBooks = {
    educationalBooks: ["Educated", "Invaluable", "The School of Life", "Introducing Sociology"],
    comicBooks: ["300", "Astro City", "Batman: The Dark Knight Returns", "City of Glass", "Hellboy", "Invincible"],
    mysteriesBooks: ["And Then There Were None",  "The Big Sleep", "Gone Girl", "The Postman Always Rings Twice", " Woman in White", "Anatomy of a Murder" ]
}
const randomNumberGenerator = (arrLength) => Math.floor(Math.random()*arrLength);


const randomKeySelector = function(obj) {
    let keyArr = Object.keys(obj);
    let keyNum = randomNumberGenerator(keyArr.length);
    for(element in keyArr){

            switch(keyNum) {
                case 0:
                element = Object.keys(obj)[0];
                break;
        
                case 1:
                element = Object.keys(obj)[1];;
                break;
        
                case 2:
                element = Object.keys(obj)[2];;
                break;
        
                case 3:
                element = Object.keys(obj)[3];;
                break;
        }
        
    return element;

}
};

const randomRecommendationSelector = function(genre) {
    
       let choosenKey = randomKeySelector(genre);
       let choosenGenre = randomNumberGenerator(genre[choosenKey].length);
       return console.log("Today's recommendation to check out: " +  genre[choosenKey][choosenGenre]);
    
}


randomRecommendationSelector(allMovies);
randomRecommendationSelector(allBooks);
