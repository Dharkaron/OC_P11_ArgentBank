import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/style.css'

// Redux
import { Provider } from 'react-redux'
import { persiststore, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persiststore}>
        <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)

// ajout d'un composant "loading" ?