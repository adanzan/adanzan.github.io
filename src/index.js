import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import './styles/index.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'

// TODO: Remove if there are no props
const props = {}

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a8cc9'
    },
    secondary: {
      main: '#1ac959'
      // #209CEE
    },
    tertiary: {
      main: '#571ac9'
    },
    icon: {
      main: '#FFFFFF'
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App {...props}/>
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
