
var fs = require('fs');

fs.readFile("./Game_of_Thrones.json", 'utf8', processFile);

function processFile(error, content) {
	if (error) {
		console.log("Sorry can't load file");
	} else {
		var episodes = JSON.parse(content);
		sortEpisodesByNumber(episodes);

    	episodes = filterGoodEpisodes(episodes, 8.5);
    	episodes = filterEpisodesByCharacter(episodes, "Robert");

    	printEpisodes(episodes);
	}
}

// Returns episodes that include the 'character'
function filterEpisodesByCharacter(episodes, character) {

	var episodesWithCharacter = [];

	episodes.forEach(function (episode) {
		// episode includes character ?
		var index = episode.description.indexOf(character);
		// may be >= 0 or < 0
		if (index >= 0) {
			// character IS in the episode
			episodesWithCharacter.push(episode);
		}
	});

	return episodesWithCharacter;
}

// Returns episodes that include the 'character'
function filterEpisodesByCharacter2(episodes, character) {

	var episodesWithCharacter =
	  episodes.filter(function (episode) {
		// episode includes character ?
		var index = episode.description.indexOf(character);
		// may be >= 0 or < 0
		return index >= 0;
	});

	return episodesWithCharacter;
}

// Returns only the episodes with 'minRating' or higher
function filterGoodEpisodes(episodes, minRating) {

	var goodEpisodes = episodes.filter(function (episode) {
		// return true if should be included
		return episode.rating >= minRating;
	});

    // you can do an inline refactor if you want
	return goodEpisodes;
}


function sortEpisodesByNumber(episodes) {

	episodes.sort(function (ep1, ep2) {

		// if ep1 should come first, return positive number
		// if ep2 should come first, return negative number
		// if they have the same order return 0

		// return ep1.episode_number - ep2.episode_number;		

		if (ep1.episode_number > ep2.episode_number) {
			return 1; 
		} else if (ep1.episode_number < ep2.episode_number) {
			return -1;
		} else {
			return 0;
		}
	});
}

function printEpisodes(episodes) {

	episodes.forEach(function (episode) {
		printEpisode(episode);
	});
}

function printEpisode(episode) {

	console.log(episode.title + " - Episode #" + episode.episode_number);
	console.log(episode.description);
	var numberOfStars = Math.floor(episode.rating);
	var stars = getStars(numberOfStars);
	console.log("Rating: " + episode.rating + " " + stars);
	console.log("");
}

// Returns a string made of 'number' stars ("*")
// Example: getStars(3) returns "***"
function getStars(number) {
	var stars = "";
	for (var i=0; i<number; i++) {
		stars += "*";
	}
	return stars;
}


