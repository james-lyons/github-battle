import React from 'react';
import Nav from './components/NavBarComponent/NavBar';
import Loading from './containers/LoadingBarContainer/LoadingBar';
import { ThemeProvider } from './contexts/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from './containers/LoadingBarContainer/LoadingBar';

const Popular = React.lazy(() => import ('./containers/PopularContainer/Popular'));
const Battle = React.lazy(() => import('./containers/BattleContainer/Battle'));
const Results = React.lazy(() => import('./containers/ResultsContainer/Results'));

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
                            <React.Suspense fallback={ <LoadingBar /> }>
                                <Switch>
                                    <Route exact path='/' component={ Popular }/>
                                    <Route exact path='/battle' component={ Battle }/>
                                    <Route path='/battle/results' component={ Results }/>
                                    <Route render={() => <h1>404</h1>} />
                                </Switch>
                            </React.Suspense>
                        </div>
                    </div>
                </ThemeProvider>
            </Router>
        );
    };
};

export default App;