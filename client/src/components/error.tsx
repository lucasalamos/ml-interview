import React from 'react';
import '../styles/error.scss'

export const Error: React.FC = () => {
  return (
    <div className='error'>
      Ha ocurrido un error. Asegurate que la ruta este correcta y vuelve a intentarlo.
    </div>
  );
};