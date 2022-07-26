// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle(props) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  // 🐨 remplaza esto llamando a React.Children.map y mapea cada hijo recibido por
  // props "props.children" para que sea clonado y ahora reciva los props que
  // necesite utilizando React.cloneElement.
  // 💰 React.Children.map(props.children, child => {/* retorna un clone de cada hijo aquí */})
  // 📜 https://reactjs.org/docs/react-api.html#reactchildren
  // 📜 https://reactjs.org/docs/react-api.html#cloneelement
  return <Switch on={on} onClick={toggle} />
}

// 🐨 Desarrolla cada uno de estos componentes

// Acepta las props `on` y `children` y retorna `children` si `on` es true
const ToggleOn = () => null

// Acepta las props `on` y `children` y retorna `children` si `on` es false
const ToggleOff = () => null

// Acepta las props `on` y `toggle` y retorna el componente <Switch /> con esas propiedades.
const ToggleButton = () => null

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
