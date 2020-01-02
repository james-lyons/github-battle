import React from 'react';
import { ThemeConsumer } from '../../contexts/theme';

const NavBar = () => {
    return (
        <ThemeConsumer>
            {({ theme, toggleTheme }) => (
                <nav className="row space-between">
                    <button
                        className="btn-clear"
                        onClick={ toggleTheme }
                        style={{ fontSize: 30 }}
                    >
                        { theme === 'light' ? '🔦' : '💡' }
                    </button>
                </nav>
            )}
        </ThemeConsumer>
    );
};

export default NavBar;