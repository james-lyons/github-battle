import React from 'react';
import Popular from './containers/PopularContainer/Popular';
import Battle from './containers/BattleContainer/Battle';
import Results from './containers/ResultsContainer/Results';
import Nav from './components/NavBarComponent/NavBar';
import { ThemeProvider } from './contexts/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
            <Router>
                <ThemeProvider value={ this.state }>
                    <div className={this.state.theme}>
                        <div className='container'>
                            <Nav />
                            <Switch>
                                <Route exact path='/' component={ Popular }/>
                                <Route exact path='/battle' component={ Battle }/>
                                <Route path='/battle/results' component={ Results }/>
                                <Route render={() => <h1>404</h1>} />
                            </Switch>
                        </div>
                    </div>
                </ThemeProvider>
            </Router>
        );
    };
};

export default App;