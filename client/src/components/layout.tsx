import React from 'react';

export const Layout: React.FC<{header: React.ReactNode, content: React.ReactNode}> = ({header, content}) => {
  return (
    <div>
      <div className='header'>
        {header}
      </div>
      <div className='content'>
        {content} 
      </div>  
    </div>  
  );
};

