const getSportTeamsDataByURL = async(url) => {
    const response = await fetch(url);
    const data = await response.json();
    displaySportTeamsData(data);
}

const displaySportTeamsData = (data) => {
    const sportTeams = data.teams;
    const teamsContainer = document.getElementById("teamsContainer");
    sportTeams.forEach(sportTeam => {
        const teamName = sportTeam.strTeam;
        const teamCountry = sportTeam.strCountry;
        const teamShortDescription = sportTeam.strDescriptionEN.slice(0, 120);
        const teamLeague = sportTeam.strLeague;
        const teamSportsType = sportTeam.strSport;
        const teamJersey = sportTeam.strTeamJersey;

        const newTeamCardDiv = document.createElement('div');
        newTeamCardDiv.classList.add('col');
        newTeamCardDiv.innerHTML = `<div class="card h-100">
                <img src="${teamJersey}" class="card-img-top img-fluid px-5 pt-3" alt="${teamName} Jersey Image">
                <div class="card-body text-center">
                    <h4 class="card-title">${teamName}</h4>
                    <p class="card-text">${teamShortDescription}</p>
                    <p class="text-muted"><strong>League</strong>: ${teamLeague}</p>
                    <p class="text-muted"><strong>Country</strong>: ${teamCountry} | <strong>Sport</strong>: ${teamSportsType}</p>
                    <button type="button" class="btn btn-success w-100 py-2">Lean More</button>
                </div>
            </div>`;

        teamsContainer.appendChild(newTeamCardDiv);
    });
    document.getElementById("preloaderSection").style.display = "none";
}

const url = 'https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English Premier League';
getSportTeamsDataByURL(url);