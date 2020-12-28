import '../themes/themes.css'

const THEMES = [
    { primaryColor: 'deepskyblue', secondaryColor: 'coral'},
    { primaryColor: 'orchid', secondaryColor: 'mediumseagreen'}
];

const ThemeItem = ({ theme, active, onClick }) => {
    return (
        <span onClick={onClick} style={{ cursor: 'pointer', paddingLeft: 8, fontWeight: active ? 'bold': 'normal'}}>
          <span className='theme-inline' style={{ color: theme.primaryColor }}>Primary</span>
          <span className='theme-inline' style={{ color: theme.secondaryColor }}>Secondary</span>
        </span>
    )
}

export default function ChangeTheme({ theme, setTheme }) {
    const isActive = (t) => theme.primaryColor === t.primaryColor && theme.secondaryColor === t.secondaryColor;
    return (
        <div>
            Change Theme:
            {THEMES.map((t, i) => {  
                const key = `Theme - ${i}`;
                return <ThemeItem key={key} theme={t} active={isActive(t)} onClick={() => setTheme(t)}/>
            })
          }
        </div>
    )
}