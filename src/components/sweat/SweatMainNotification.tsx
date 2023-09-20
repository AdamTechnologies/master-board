import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { fetchUserData, userLoginData } from '@/slices/userActions'


const SweatMainNotification = ({sweatData}) => {

  const divStyle = {
    borderRadius: '12px',
    border: '1px dotted #d8d8d8',
    padding: '16px',
    // marginRight:'8px',
  };


  const hrStyle = {
    marginTop:'8px',
    marginBottom:'8px',
    opacity: 0.2,    
  };

  return (
    <div style={divStyle}>
      <h4>
       Im Sweat <span>-&gt;</span>
      </h4>
      <hr style={hrStyle} />
      <p>
     <a className="no-underline text-gray-600  hover:text-black" href={'/sweatPage'}>  <span style={{cursor:'pointer'}} >New Recipe {' '}</span></a>
        <Badge
          sx={{
            '& .MuiBadge-badge': {
              backgroundColor: '#6b0b18',
              color: '#fff',
            },
            marginLeft: '0.7rem',
          }}
          badgeContent={sweatData?.data?.length}

        />
      </p>
    </div>
  );
};

export default SweatMainNotification;
