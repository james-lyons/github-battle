import React from 'react';
import Popular from './containers/PopularContainer/Popular';
import Battle from './containers/BattleContainer/Battle';
import { ThemeProver } from './contexts/theme';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light',
            toggleTheme: () => {
                this.setState(({ theme }) => ({
                    theme: theme === 'light' ? 'dark' : 'light'
                }))
            }
        };
    };

    render() {
        return (
            <ThemeProver value={ this.state }>
                <div className='container'>
                    <Battle />
                    <Popular />
                </div>
            </ThemeProver>
        );
    };
};

export default App;