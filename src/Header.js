import { ThemeContext } from './contexts';
import { useContext } from 'react';

export default function Header({text}) {
    const { primaryColor } = useContext(ThemeContext);

    return <h1 style={{color: primaryColor}}>{text}</h1>
}