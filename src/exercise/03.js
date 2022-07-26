// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {Switch} from '../switch'

// 🐨 crea tu contexto ToggleContext aquí
// 📜 https://reactjs.org/docs/context.html#reactcreatecontext

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  // 🐨 elimina todo esto 💣 y en cambio retorna <ToggleContext.Provider value={value}> donde
  // el valor "value" es un objeto que contiene `on` y `toggle` en el.
  return React.Children.map(children, child => {
    return typeof child.type === 'string'
      ? child
      : React.cloneElement(child, {on, toggle})
  })
}

// 🐨 todavía obtendremos el valor de children desde los props
//(ya que nos lo proporcionan los desarrolladores que utilizan nuestro componente),
// pero ahora obtendremos `on` implicitamente desde nuestro ToggleContext
// 🦉 Puedes crear un custom hook useToggle para obtener el contexto aquí. Gracias a eso,
// tu contexto no va a ser expuesto al usuario.
// 💰 `const context = React.useContext(ToggleContext)`
// 📜 https://reactjs.org/docs/hooks-reference.html#usecontext
function ToggleOn({on, children}) {
  return on ? children : null
}

// 🐨 Haz los mismo que realizaste para el componente ToggleOn en este componente
function ToggleOff({on, children}) {
  return on ? null : children
}

// 🐨 obten `on` y `toggle`de tu contexto ToggleContext utilizando `useContext`
function ToggleButton({on, toggle, ...props}) {
  return <Switch on={on} onClick={toggle} {...props} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <div>
          <ToggleButton />
        </div>
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
