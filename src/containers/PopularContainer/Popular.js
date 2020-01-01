import React from 'react';

class Popular extends React.Component {
    render() {

        const languages = ['All', 'JavaScript', 'Ruby', 'Python', 'CSS']

        return (
            <>
                <ul className="flex-center">
                    {languages.map((language) => (
                        <li key={ language }>
                            <button className="btn-clear nav-link">
                                { language }
                            </button>
                        </li>
                    ))}
                </ul>
            </>
        );
    };
};

export default Popular;