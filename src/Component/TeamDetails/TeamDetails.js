import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import './TeamDetails.css';
import maleImage from './../../Images/male.png';
import femaleTeamImage from './../../Images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faFlag, faFutbol, faMars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const TeamDetails = () => {
    const { teamId } = useParams();
    const [teamDetails, setTeamDetails] = useState({});

    //load team detais by id
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
    }, [teamId])

    //destructuring data from teamDeatils Arary
    const { strTeam, strCountry, strTeamBanner, strTeamBadge, intFormedYear, strSport, strDescriptionEN, strGender, strTwitter, strYoutube, strFacebook } = teamDetails

    // style for team details dynamic details
    const productDetailsBanner = {
        backgroundPosition: "center",
        backgroundImage: `url(${strTeamBanner})`,
        backgroundSize: "cover"
    }

    return (
        <section>
            {/* Start Team Details Banner Area */}
            <article style={productDetailsBanner}>
                <div className=" productDetailsBannerOverly align-items-center d-flex justify-content-center">
                    <img src={strTeamBadge} alt={strCountry} />
                </div>
            </article>
            {/* End Team Details Banner Area */}

            {/* Start Team Details Description Area */}
            <article className="productDetailsDescription py-5">
                <div className="container">
                    <div className="team-info rounded">
                        <div className="row align-items-center py-2  pl-4 pr-3">
                            <div className="col-md-7 text-white">
                                <h2 >{strTeam}</h2>
                                <h6><FontAwesomeIcon icon={faMapMarkerAlt} />  Founded: {intFormedYear}</h6>
                                <h6><FontAwesomeIcon icon={faFlag} />  Country: {strCountry}</h6>
                                <h6><FontAwesomeIcon icon={faFutbol} />  Sport Type: {strSport}</h6>
                                <h6><FontAwesomeIcon icon={faMars} />  Gender: {strGender}</h6>
                            </div>
                            <div className="col-md-5 py-4 pt-md-0">
                                <img className="w-100" src={strGender === "Male" ? maleImage : femaleTeamImage} alt={strTeam} />
                            </div>
                        </div>
                    </div>
                    <p className="text-white mt-4">{strDescriptionEN}</p>
                    {/* start social icon */}
                    <div className="socail-icon-container text-center mt-4">
                        <Link to={"/"}><FontAwesomeIcon icon={faArrowLeft} /></Link>
                        <a target="_blank" href={`https://${strTwitter}`} rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className="twitter-icon" /></a>
                        <a target="_blank" href={`https://${strFacebook}`} rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} className="facebook-icon" /></a>
                        <a target="_blank" href={`https://${strYoutube}`} rel="noreferrer"><FontAwesomeIcon icon={faYoutube} className="youtube-icon" /></a>
                    </div>
                    {/* End social icon */}
                </div>
            </article>
        </section>
    );
};

export default TeamDetails;
