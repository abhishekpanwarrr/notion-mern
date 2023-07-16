import { createTheme } from "@mui/material";


export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fafafa",
      light: "#ffffff",
      dark: "#dddddd"
    },
    secondary: {
      main: "#CCE1FF",
      light: "#ffffff",
      dark: "#dddddd"
    },
    text:{
      primary:"#000000"
    }
  }
})

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#191919",
      light: "#222222",
      dark: "#d4d4d4"
    },
    secondary: {
      main: "#CCE1FF",
      light: "#ffffff",
      dark: "#dddddd"
    },
    text:{
      primary:"#ffffff"
    }
  }
})
