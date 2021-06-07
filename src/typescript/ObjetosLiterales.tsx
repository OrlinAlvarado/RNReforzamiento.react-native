
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion 
}

interface Direccion {
    pais: string;
    casa: number;
}

export const ObjetosLiterales = () => {
    const persona:Persona = {
        nombreCompleto: 'Orlin',
        edad: 35,
        direccion: {
          pais: 'Honduras',
          casa: 17
        }
      }
      
    return (
        <>
         <h3>Objetos literales</h3>   
         <code>
             <pre>
                 { JSON.stringify( persona, null, 2 )}
             </pre>
         </code>
        </>
    )
}
