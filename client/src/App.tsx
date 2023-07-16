import './App.css'
import { Box, useTheme } from '@mui/material'
import { Dispatch, SetStateAction } from 'react';
import Navbar from './components/Navbar';
import ContentArea from './Pages/ContentArea/ContentArea';

export interface AppProps {
  mode: string
  setMode: Dispatch<SetStateAction<"light" | "dark">>
}
function App({ setMode, mode }: AppProps) {
  const theme = useTheme()
  return (

    <Box sx={{
      backgroundColor: theme.palette.primary.main,
      height: "100vh",
      display: "flex",
    }}>

      <Navbar setMode={setMode} mode={mode} />
      <ContentArea />

    </Box>
  )
}

export default App
