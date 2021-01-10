import '../themes/themes.css'
import React, { useState, useEffect } from 'react';

const ThemeItem = ({ theme, active, onClick }) => {
    return (
        <span onClick={onClick} style={{ cursor: 'pointer', paddingLeft: 8, fontWeight: active ? 'bold': 'normal'}}>
          <span className='theme-inline' style={{ color: theme.primaryColor }}>Primary</span>
          <span className='theme-inline' style={{ color: theme.secondaryColor }}>Secondary</span>
        </span>
    )
}


export default function ChangeTheme({ theme, setTheme }) {
    const [ themes, setThemes ] = useState([]);
    const isActive = (t) => theme.primaryColor === t.primaryColor && theme.secondaryColor === t.secondaryColor;
    useEffect(() => { 
        const fetchResults = async () => {
        const resultJSON = await fetch('/api/themes');
        setThemes(await resultJSON.json())
     } 
     fetchResults();
    }, []);

    return (
        <div>
            Change Theme:
            {themes.map((t, i) => {  
                const key = `Theme - ${i}`;
                return <ThemeItem key={key} theme={t} active={isActive(t)} onClick={() => setTheme(t)}/>
            })
          }
        </div>
    )
}