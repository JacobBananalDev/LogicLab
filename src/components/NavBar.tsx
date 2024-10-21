import React, { useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const NavBar: React.FC = () => {
    const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

    // Toggle between light and dark themes
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    // useEffect to update the body class when theme changes
    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
    }, [theme]);

    return (
        <div className={` overflow-hidden flex flex-row justify-between top-0 left-0 min-w-full p-2 ${theme === 'light' ? 'bg-gray-800' : 'bg-gray-200'}`}>
            <h1 className={`text-2xl font-bold ${theme === 'light' ? 'text-white' : 'text-black'}`}>LogicLab</h1>
            <div className='flex flex-row'>
                <button
                    className='bg-gray-700 hover:bg-gray-600 text-white font-bold p-2 rounded'
                    onClick={toggleTheme}
                >
                    {theme === 'light' ? <FaMoon /> : <FaSun />}
                </button>
            </div>
        </div>
    );
};

export default NavBar;
