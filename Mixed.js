const allMovies = {
    horrorGenre: ["PSYCHO (1960) by Alfred Hitcock", "THE SILENCE OF THE LAMBS (1991) by Jonathan Demme"],
    animatedGenre: ["Attack on Titan", "Gintama", "Black Clover"],
    fantasyGenre: ["The Lord of the Rings", "Star Wars", "Harry Potter"],
    actionGenre: ["Hello"] 
    
    
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

const randomMovieSelector = function(genre) {
    
       let choosenKey = randomKeySelector(genre);
       let choosenGenre = randomNumberGenerator(genre[choosenKey].length);
       return console.log("Today's recommendation to watch: " +  genre[choosenKey][choosenGenre])
    
}


randomMovieSelector(allMovies);
