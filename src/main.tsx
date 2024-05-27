import '@assets/css/app.css'
import '@assets/css/font.css'
import '@assets/css/global.css'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { ToastContainer } from 'react-toastify'
import App from './App.tsx'
import mainTheme from './config/mantineTheme'
import StoreProvider from './StoreProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <ColorSchemeScript defaultColorScheme="light" />
      <MantineProvider theme={mainTheme} defaultColorScheme="light">
        <App />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <ToastContainer />
      </MantineProvider>
    </StoreProvider>
  </React.StrictMode>,
)
