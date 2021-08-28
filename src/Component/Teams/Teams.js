import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Temas.css'

const Teams = () => {
    const [teams, setTeams] = useState([])
    // Load team from Api
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])

    return (
        <section className="team-conatiner">
            <div className="container py-5">
                <div className="row">
                    {
                        teams.map(team => <Team key={team.idTeam} team={team} />)
                    }
                </div>
            </div>
        </section>
    );
};
export default Teams;