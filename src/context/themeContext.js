import React from "react"

const ThemeContext = React.createContext({
    color: 'primary',
    changeTheme: () => {}
})

ThemeContext.displayName = 'themeContext'


export default ThemeContext