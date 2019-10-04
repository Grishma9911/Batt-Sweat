function getData() {
    var queryURL = "https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2019?key=ade33bf6779d4808bf49fef0e77ebe7e"


    //queryURL provides the teams information that will be displayed on the home.html page
    $.ajax({
            url: queryURL,
            method: "GET",
        })
        .then(function (response) {


            //this is the data that will be displayed on the top 3 teams in the home.html

            console.log("Date: " + response[80].Date);
            console.log("Away Team: " + response[80].AwayTeam);
            console.log("Home Team: " + response[80].HomeTeam);
            console.log("Points Spread" + response[80].PointSpread);
            console.log("Over Under: " + response[80].OverUnder);
            console.log("Weather: " + response[80].ForecastDescription);


            $(".date1").append(response[80].Date);
            $(".awayTeam1").append(response[80].AwayTeam);
            $(".homeTeam1").append(response[80].HomeTeam);
            $(".pointSpread1").append(response[80].PointSpread);
            $(".overUnder1").append(response[80].OverUnder);
            $(".forecastDescription1").append(response[80].ForecastDescription);

            //-------------------------------------------------
            // -----------this is data for the second team-----------

            console.log("Date: " + response[79].Date);
            console.log("Away Team: " + response[79].AwayTeam);
            console.log("Home Team: " + response[79].HomeTeam);
            console.log("Points Spread" + response[79].PointSpread);
            console.log("Over Under: " + response[79].OverUnder);
            console.log("Weather: " + response[79].ForecastDescription);


            $(".date2").append(response[79].Date);
            $(".awayTeam2").append(response[79].AwayTeam);
            $(".homeTeam2").append(response[79].HomeTeam);
            $(".pointSpread2").append(response[79].PointSpread);
            $(".overUnder2").append(response[79].OverUnder);
            $(".forecastDescription2").append(response[79].ForecastDescription);


            //-------------------------------------------------------------------
            //------------------------this is data for the third team-----------


            console.log("Date: " + response[78].Date);
            console.log("Away Team: " + response[78].AwayTeam);
            console.log("Home Team: " + response[78].HomeTeam);
            console.log("Points Spread" + response[78].PointSpread);
            console.log("Over Under: " + response[78].OverUnder);
            console.log("Weather: " + response[78].ForecastDescription);


            $(".date3").append(response[78].Date);
            $(".awayTeam3").append(response[78].AwayTeam);
            $(".homeTeam3").append(response[78].HomeTeam);
            $(".pointSpread3").append(response[78].PointSpread);
            $(".overUnder3").append(response[78].OverUnder);
            $(".forecastDescription3").append(response[78].ForecastDescription);



        });

}



function weeklyGames() {

    // this function will displayed all the teams that are playing that week

    var queryURL = "https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2019?key=ade33bf6779d4808bf49fef0e77ebe7e"

    $.ajax({
            url: queryURL,
            method: "GET",
        })
        .then(function (response) {
            console.log("Away Team: " + response[67].AwayTeam, response[68].AwayTeam, response[69].AwayTeam, response[70].AwayTeam, response[71].AwayTeam, response[72].AwayTeam, response[73].AwayTeam, response[74].AwayTeam, response[75].AwayTeam, response[76].AwayTeam, response[77].AwayTeam, response[78].AwayTeam, response[79].AwayTeam);


            console.log("Home Team: " + response[67].HomeTeam, response[68].HomeTeam, response[69].HomeTeam, response[70].HomeTeam, response[71].HomeTeam, response[72].HomeTeam, response[73].HomeTeam, response[74].HomeTeam, response[75].HomeTeam, response[76].HomeTeam, response[77].HomeTeam, response[78].HomeTeam, response[79].HomeTeam);


            $(".aT-Main").append(response[67].AwayTeam, response[68].AwayTeam, response[69].AwayTeam, response[70].AwayTeam, response[71].AwayTeam, response[72].AwayTeam, response[73].AwayTeam, response[74].AwayTeam, response[75].AwayTeam, response[76].AwayTeam, response[77].AwayTeam, response[78].AwayTeam, response[79].AwayTeam);
            $(".hT-Main").append(response[67].HomeTeam, response[68].HomeTeam, response[69].HomeTeam, response[70].HomeTeam, response[71].HomeTeam, response[72].HomeTeam, response[73].HomeTeam, response[74].HomeTeam, response[75].HomeTeam, response[76].HomeTeam, response[77].HomeTeam, response[78].HomeTeam, response[79].HomeTeam);



        });
}