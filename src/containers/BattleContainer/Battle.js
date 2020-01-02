import React from 'react';
import InstructionsComponent from '../../components/InstructionsComponent/InstructionsComponent';
import PlayerInput from '../PlayerInputContainer/PlayerInput';
import PlayerPreview from '../../components/PlayerPreviewComponent/PlayerPreview';
import Results from '../ResultsContainer/Results';
import { Link } from 'react-router-dom';

class Battle extends React.Component {
    state = {
        playerOne: null,
        playerTwo: null,
        battle: false
    };

    handleSubmit = (id, player) => {
        this.setState({
            [id]: player
        });
    };

    handleReset = (id) => {
        this.setState({
            [id]: null
        });
    };

    render() {
        const { playerOne, playerTwo } = this.state;

        return (
            <>
                <InstructionsComponent />
                <div className="players-container">
                    <h1 className="center-text header-lg">Players</h1>
                    <div className="row space-around">
                        {
                            playerOne === null 
                            ? <PlayerInput 
                                label='Player One'
                                onSubmit={(player) => this.handleSubmit('playerOne', player)}
                            />
                            : <PlayerPreview
                                username={ playerOne }
                                label='Player One'
                                onReset={() =>  this.handleReset('playerOne')}
                            />
                        }

                        {
                            playerTwo === null 
                            ? <PlayerInput 
                                label='Player Two'
                                onSubmit={(player) => this.handleSubmit('playerTwo', player)}
                            />
                            : <PlayerPreview
                                username={ playerTwo }
                                label='Player Two'
                                onReset={() => this.handleReset('playerTwo')}
                            />
                        }
                    </div>
                </div>
                { playerOne && playerTwo && (
                    <Link
                        className="btn btn-dark btn-space"
                        to={{
                            pathname: `/battle/results`,
                            search: `?playerOne=${ playerOne }&playerTwo=${ playerTwo }`
                        }}
                    >
                        Battle!
                    </Link>
                )}
            </>
        );
    };
};

export default Battle;