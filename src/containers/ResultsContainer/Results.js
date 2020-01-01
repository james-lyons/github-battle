import React from 'react';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    };

    render() {
        return (
            <>
                <div>
                    <pre>{JSON.stringify(this.props, null, 2)}</pre>
                </div>
            </>
        );
    };
};

export default Results;