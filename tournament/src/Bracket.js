// src/components/Bracket.js
import React, { useState } from 'react';

const Bracket = () => {
  const [teams, setTeams] = useState([]);
  const [matches, setMatches] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [bulkTeamNames, setBulkTeamNames] = useState("");

  const addTeam = () => {
    if (teamName.trim() === "") return;
    const newTeam = { id: teams.length + 1, name: teamName };
    setTeams([...teams, newTeam]);
    setTeamName("");
  };

  const bulkAddTeams = () => {
    const names = bulkTeamNames.split("\n").map((name) => name.trim()).filter((name) => name !== "");
    const newTeams = names.map((name, index) => ({ id: teams.length + index + 1, name }));
    setTeams([...teams, ...newTeams]);
    setBulkTeamNames("");
  };

  const createBracket = () => {
    if (teams.length % 2 !== 0) {
      alert("Please add an even number of teams.");
      return;
    }

    const initialMatches = [];
    for (let i = 0; i < teams.length; i += 2) {
      initialMatches.push({ id: initialMatches.length + 1, team1: teams[i], team2: teams[i + 1], winner: null });
    }

    setMatches([...initialMatches, { id: initialMatches.length + 1, team1: null, team2: null, winner: null }]); // Add final match
  };

  const handleMatchClick = (matchId, winner) => {
    const updatedMatches = matches.map((match) => {
      if (match.id === matchId) {
        return { ...match, winner };
      }
      return match;
    });

    // Update the final match with the winners of the first matches
    if (matchId < matches.length - 1) {
      const finalMatch = updatedMatches[updatedMatches.length - 1];
      if (matchId === 1) {
        finalMatch.team1 = winner;
      } else {
        finalMatch.team2 = winner;
      }
    }

    setMatches(updatedMatches);
  };

  const renderMatches = (roundMatches) => {
    return roundMatches.map((match) => (
      <div key={match.id} className="match">
        <div>
          {match.team1 ? (
            <button onClick={() => handleMatchClick(match.id, match.team1)}>
              {match.team1.name}
            </button>
          ) : (
            <span> TBD </span>
          )}
        </div>
        <div>vs</div>
        <div>
          {match.team2 ? (
            <button onClick={() => handleMatchClick(match.id, match.team2)}>
              {match.team2.name}
            </button>
          ) : (
            <span> TBD </span>
          )}
        </div>
        {match.winner && <div>Winner: {match.winner.name}</div>}
      </div>
    ));
  };

  return (
    <div className="App">
      <h1>Sports Tournament Bracket</h1>
      <div className="bracket">
        <div className="column">
          <h2>Add Teams</h2>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Enter team name"
          />
          <button onClick={addTeam}>Add Team</button>
          <br />
          <textarea
            value={bulkTeamNames}
            onChange={(e) => setBulkTeamNames(e.target.value)}
            placeholder="Enter team names (one per line)"
            rows="4"
            cols="50"
          />
          <button onClick={bulkAddTeams}>Bulk Add Teams</button>
          <button onClick={createBracket}>Create Bracket</button>
          <div>
            <h2>Teams</h2>
            <ul>
              {teams.map((team) => (
                <li key={team.id}>{team.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="column">
          <h2>Bracket</h2>
          {renderMatches(matches)}
        </div>
      </div>
    </div>
  );
};

export default Bracket;
