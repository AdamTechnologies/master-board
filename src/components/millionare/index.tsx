import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { fetchUserData, userLoginData } from '@/slices/userActions'


const Millionare = () => {

  const dispatch = useDispatch<AppDispatch>()
  
  const user = useSelector((state: RootState) => state.user.user); // Annotate RootState
  const tickets = useSelector((state: RootState) => state.user.tickets);

  const loading = useSelector((state: RootState) => state.user.loading);
  const error = useSelector((state: RootState) => state.user.error);




  useEffect(() => {
    // Fetch user data when the component mounts
    dispatch(fetchUserData());
  }, [dispatch]);


//     const [badgeContent, setBadgeContent] = useState({ data: { total_count: 0 } });
//     const [Comments, setComments] = useState([]);

//     const fetchComment = async () => {
//       const response = await fetch('../../pages/api/millionare')
//       const data = await response.json()
//       console.log('dataaaaaaaaaaa', data)
//     }

// console.log('bbbbbbbbbbb', badgeContent?.data?.total_count)


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
       Millionare <span>-&gt;</span>
      </h4>
      <hr style={hrStyle} />
      <p>
     <a className="no-underline text-gray-600  hover:text-black" href={'/owpm'}>  <span style={{cursor:'pointer'}} >New Draws{' '}</span></a>
        <Badge
          sx={{
            '& .MuiBadge-badge': {
              backgroundColor: '#6b0b18',
              color: '#fff',
            },
            marginLeft: '0.7rem',
          }}
          badgeContent={tickets?.total_count}
        />
      </p>
    </div>
  );
};

export default Millionare;
