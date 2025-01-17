import React from 'react';
import './ResultPage.css';

// Import house crests
import gryffindorCrest from '../assets/images/crests/gryffindor.png';
import ravenclawCrest from '../assets/images/crests/ravenclaw.png';
import hufflepuffCrest from '../assets/images/crests/hufflepuff.png';
import slytherinCrest from '../assets/images/crests/slytherin.png';

// Import house backgrounds
import gryffindorBackground from '../assets/images/backgrounds/gryffindor-bg.jpg';
import ravenclawBackground from '../assets/images/backgrounds/ravenclaw-bg.jpg';
import hufflepuffBackground from '../assets/images/backgrounds/hufflepuff-bg.jpg';
import slytherinBackground from '../assets/images/backgrounds/slytherin-bg.jpg';

const houseDetails = {
    "Gryffindor": {
        name: "Gryffindor",
        crest: gryffindorCrest,
        background: gryffindorBackground,
        colors: {
            primary: "#740001",
            secondary: "#D3A625"
        },
        description: "Gryffindor values bravery, daring, nerve, and chivalry. Known for their courage and determination, Gryffindors are often at the forefront of adventure and standing up for what's right.",
        traits: [
            "Courageous",
            "Brave",
            "Chivalrous",
            "Adventurous"
        ],
        motto: "Courage is found in unlikely places.",
        famousMembers: [
            "Harry Potter",
            "Hermione Granger",
            "Ron Weasley",
            "Albus Dumbledore"
        ],
        commonRoom: {
            location: "Gryffindor Tower",
            description: "Warm and cozy, with scarlet and gold decorations, a roaring fireplace, and comfortable armchairs."
        }
    },
    "Ravenclaw": {
        name: "Ravenclaw",
        crest: ravenclawCrest,
        background: ravenclawBackground,
        colors: {
            primary: "#0E1A40",
            secondary: "#946B2D"
        },
        description: "Ravenclaw prizes intelligence, knowledge, curiosity, creativity, and wit. They value learning and intellectual pursuits above all else.",
        traits: [
            "Intelligent",
            "Wise",
            "Creative",
            "Curious"
        ],
        motto: "Wit beyond measure is man's greatest treasure.",
        famousMembers: [
            "Luna Lovegood",
            "Cho Chang",
            "Filius Flitwick",
            "Padma Patil"
        ],
        commonRoom: {
            location: "Ravenclaw Tower",
            description: "Circular room with arched windows, filled with books, telescopes, and stunning views of the grounds."
        }
    },
    "Hufflepuff": {
        name: "Hufflepuff",
        crest: hufflepuffCrest,
        background: hufflepuffBackground,
        colors: {
            primary: "#FFD800",
            secondary: "#000000"
        },
        description: "Hufflepuff values hard work, dedication, patience, loyalty, and fair play. They are known for their kindness and strong sense of community.",
        traits: [
            "Loyal",
            "Hardworking",
            "Kind",
            "Patient"
        ],
        motto: "Hard work, patience, loyalty, and fair play.",
        famousMembers: [
            "Cedric Diggory",
            "Newt Scamander",
            "Nymphadora Tonks",
            "Hannah Abbott"
        ],
        commonRoom: {
            location: "Near the Kitchens",
            description: "Warm, welcoming space with round windows, decorated in yellow and black, close to the kitchens."
        }
    },
    "Slytherin": {
        name: "Slytherin",
        crest: slytherinCrest,
        background: slytherinBackground,
        colors: {
            primary: "#1A472A",
            secondary: "#AAAAAA"
        },
        description: "Slytherin values ambition, cunning, leadership, and resourcefulness. They are known for their determination and ability to achieve their goals.",
        traits: [
            "Ambitious",
            "Cunning",
            "Resourceful",
            "Determined"
        ],
        motto: "Ambition is our most powerful trait.",
        famousMembers: [
            "Severus Snape",
            "Draco Malfoy",
            "Merlin",
            "Andromeda Tonks"
        ],
        commonRoom: {
            location: "Dungeons",
            description: "Elegant, low-ceiling room with greenish lamps and chairs, located under the lake with greenish light filtering through the windows."
        }
    }
};

const ResultPage = ({ house, onRestart }) => {
    const houseInfo = houseDetails[house];

    return (
        <div 
            className="result-page" 
            style={{
                backgroundImage: `url(${houseInfo.background})`,
                backgroundColor: houseInfo.colors.primary,
                color: 'white'
            }}
        >
            <div className="result-content">
                <h1>You Belong in {house}!</h1>
                
                <div className="result-grid">
                    <div className="crest-section">
                        <img 
                            src={houseInfo.crest} 
                            alt={`${house} Crest`} 
                            className="house-crest" 
                        />
                    </div>
                    
                    <div className="details-section">
                        <div className="house-description">
                            <h2>{house} House</h2>
                            <p>{houseInfo.description}</p>
                        </div>

                        <div className="house-traits">
                            <h3>Key Traits</h3>
                            <ul>
                                {houseInfo.traits.map((trait, index) => (
                                    <li key={index}>{trait}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="house-motto">
                            <h3>House Motto</h3>
                            <p>"{houseInfo.motto}"</p>
                        </div>

                        <div className="famous-members">
                            <h3>Famous Members</h3>
                            <ul>
                                {houseInfo.famousMembers.map((member, index) => (
                                    <li key={index}>{member}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="common-room">
                            <h3>Common Room</h3>
                            <p><strong>Location:</strong> {houseInfo.commonRoom.location}</p>
                            <p>{houseInfo.commonRoom.description}</p>
                        </div>
                    </div>
                </div>

                <button 
                    onClick={onRestart} 
                    style={{
                        backgroundColor: houseInfo.colors.secondary,
                        color: houseInfo.colors.primary
                    }}
                >
                    Retake Quiz
                </button>
            </div>
        </div>
    );
};

export default ResultPage;