import React from 'react';
import Popular from './containers/PopularContainer/Popular';

class App extends React.Component {
    render() {
        return (
            <>
                <div className='container'>
                    <Popular />
                </div>
            </>
        );
    };
};

export default App;