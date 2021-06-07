import React from 'react'
import { Formularios } from './components/Formularios'
// import { Usuarios } from './components/Usuarios'
// import { Contador } from './components/Contador'
// import { Funciones } from './typescript/Funciones'
// import { ObjetosLiterales } from './typescript/ObjetosLiterales'
// import { TiposBasicos } from './typescript/TiposBasicos'
// import { ContadorConHook } from './components/ContadorConHook';
// import { Login } from './components/Login';

const App = () => {
 
  return (
    <div className="mt-2">
      <h1>Introduccion a TS -  React</h1>
      <hr/>
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      {/* <Contador /> */}
      {/* <ContadorConHook /> */}
      {/* <Login /> */}
      {/* <Usuarios /> */}
      <Formularios />
    </div>
  )
}

export default App;