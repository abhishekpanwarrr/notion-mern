import { ThemeProvider } from '@mui/material'
import App from './App'
import { darkTheme, lightTheme } from "./appTheme/appTheme"
import { useState } from 'react'
const AppContainer = () => {
    const [mode, setMode] = useState<"dark" | "light">("dark")
  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
        <App setMode={setMode} mode={mode}/>
    </ThemeProvider>
  )
}

export default AppContainer