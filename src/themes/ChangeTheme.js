import '../themes/themes.css'
import React, { useEffect } from 'react';
import { useResource } from 'react-request-hook';

const ThemeItem = ({ theme, active, onClick }) => {
    return (
        <span onClick={onClick} style={{ cursor: 'pointer', paddingLeft: 8, fontWeight: active ? 'bold': 'normal'}}>
          <span className='theme-inline' style={{ color: theme.primaryColor }}>Primary</span>
          <span className='theme-inline' style={{ color: theme.secondaryColor }}>Secondary</span>
        </span>
    )
}


export default function ChangeTheme({ theme, setTheme }) {
    const [ themes, getThemes ] = useResource(() => ({
       url: '/themes',
       method: 'get'
    }));
    const { data, isLoading } = themes;
    useEffect(getThemes, []);
    const isActive = (t) => theme.primaryColor === t.primaryColor && theme.secondaryColor === t.secondaryColor;

    return (
        <div>
            { isLoading && 'Loading themes ...'}
            Change Theme:
            {data && data.map((t, i) => {  
                const key = `Theme - ${i}`;
                return <ThemeItem key={key} theme={t} active={isActive(t)} onClick={() => setTheme(t)}/>
            })
          }
        </div>
    )
}