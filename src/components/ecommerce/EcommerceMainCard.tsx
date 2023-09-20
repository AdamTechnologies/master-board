import React from 'react';
import Badge from '@mui/material/Badge';

const EcommerceMainCard = () => {
  const divStyle = {
    borderRadius: '12px',
    border: '1px dotted #d8d8d8',
    padding: '16px',
  };

  const hrStyle = {
    marginTop:'8px',
    marginBottom:'8px',
    opacity: 0.2,    
  };
  

  return (
    <div style={divStyle}>
      <h4>
        E-Commerce <span>-&gt;</span>
      </h4>
      <hr style={hrStyle} />
      <p>
        Categorey request{' '}
        <Badge
          sx={{
            '& .MuiBadge-badge': {
              backgroundColor: '#6b0b18',
              color: '#fff',
            },
            marginLeft: '0.7rem',
          }}
          badgeContent={4}
        />
      </p>
    </div>
  );
};

export default EcommerceMainCard;
