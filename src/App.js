import React from 'react';
import Popular from './containers/PopularContainer/Popular';
import Battle from './containers/BattleContainer/Battle';

class App extends React.Component {
    render() {
        return (
            <>
                <div className='container'>
                    <Battle />
                    {/* <Popular /> */}
                </div>
            </>
        );
    };
};

export default App;