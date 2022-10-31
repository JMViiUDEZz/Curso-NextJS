// import { FC } from "react"
// Cuando definimos los CHILDREN se definia con los FC de react, pero en la nueva versión de REACT 18 esto se sacó y según la documentación se soluciona de la siguiente manera:
import React, { PropsWithChildren } from 'react';

type Props = {};

export const DarkLayout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px'
    }}>
        <h3>Dark-Layout</h3>
        <div>
            {children}
        </div>
    </div>
  )
}
