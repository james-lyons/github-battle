import React from 'react';
import { battle } from '../../utils/api';
import Card from '../../components/CardComponent/Card';
import ProfileList from '../../components/ProfileListComponent/ProfileList';
import LoadingBar from '../LoadingBarContainer/LoadingBar';
import Tooltip from '../TooltipContainer/Tooltip';
import PropTypes from 'prop-types';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: null,
            loser: null,
            error: null,
            loading: true
        };
    };

    componentDidMount() {
        const { playerOne, playerTwo } = this.props;

        battle([ playerOne, playerTwo ])
            .then((players) => {
                this.setState({
                    winner: players[0],
                    loser: players[1],
                    error: null,
                    loading: false
                })
            }).catch(({ message }) => {
                this.setState({
                    error: message,
                    loading: false
                });
            });
    };

    render() {
        const { winner, loser, error, loading } = this.state

        if (loading === true) {
            return <LoadingBar text='Battling' />
        };
    
        if (error) {
            return (
                <p className='center-text error'>{ error }</p>
            );
        };

        return (
            <>
                <div className='grid space-around container-sm'>
                    <Card
                        header={winner.score === loser.score ? 'Tie' : 'Winner'}
                        subheader={`Score: ${winner.score.toLocaleString()}`}
                        avatar={winner.profile.avatar_url}
                        href={winner.profile.html_url}
                        name={winner.profile.login}
                    >
                        <ProfileList profile={ winner.profile }/>
                    </Card>
                    <Card
                        header={ winner.score === loser.score ? 'Tie' : 'Loser' }
                        subheader={ `Score: ${loser.score.toLocaleString()}` }
                        avatar={ loser.profile.avatar_url }
                        name={ loser.profile.login }
                        href={ loser.profile.html_url }
                    >
                        <ProfileList profile={ loser.profile }/>
                    </Card>
                </div>
                <button
                    onClick={ this.props.onReset }
                    className='btn dark-btn btn-space'
                >
                    Reset
                </button>
            </>
        );
    };
};

Results.propTypes = {
    playerOne: PropTypes.string.isRequired,
    playerTwo: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired
}

export default Results;