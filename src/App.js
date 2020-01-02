import React from 'react';
import Popular from './containers/PopularContainer/Popular';
import Battle from './containers/BattleContainer/Battle';
import Nav from './components/NavBarComponent/NavBar';
import { ThemeProvider } from './contexts/theme';

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
            <ThemeProvider value={ this.state }>
                <div className={this.state.theme}>
                    <div className='container'>
                        <Nav />
                        <Battle />
                        <Popular />
                    </div>
                </div>
            </ThemeProvider>
        );
    };
};

export default App;