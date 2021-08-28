import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';


const Team = (props) => {

    const { strTeam, strTeamBadge, strSport, idTeam } = props.team;

    const history = useHistory()

    return (
        <article className="col-md-4 mt-3 mb-4">
            <Card className="text-center pt-4 pb-5 px-1">
                <Card.Img variant="top" src={strTeamBadge} alt={strTeam} className="mx-auto" />
                <Card.Body>
                    <div >
                        <Card.Title className="team-title">{strTeam}</Card.Title>
                        <Card.Text className="">Sports type: {strSport} </Card.Text>
                        <Button variant="warning" onClick={() => history.push(`/team/${idTeam}`)}>Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </div>
                </Card.Body>
            </Card>
        </article>
    );
};

export default Team;