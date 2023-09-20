import { useRouter } from 'next/router';
import React, { useState,useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import myStyles from '@/styles/myStyle.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { fetchUserData, fetchYearlyRafleIdData } from '@/slices/userActions';
import { Badge } from '@mui/material';
import SideNavSweat from './SideNavSweat';
import SidaNavOwpm from './SidaNavOwpm';
const fetchApiData = require('../pages/api/sweatApi/index');

const SideNav = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>()  
  const tickets = useSelector((state: RootState) => state.user.tickets);  
  const yearlyTickets = useSelector((state: RootState) => state.user.yearlyTickets);  
  const [accessToken, setAccessToken] = useState('');
  const [sweatData, setSweatData] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    // Fetch user data when the component mounts
    dispatch(fetchUserData());
    dispatch(fetchYearlyRafleIdData());
  }, [dispatch]);


  useEffect(() => {
    // Check if we're in the browser environment before accessing localStorage
    if (typeof window !== 'undefined') {
      const storedToken = window.localStorage.getItem('email');
      const accessTokenLs = window.localStorage.getItem('access_token');      
      if (storedToken) {
        setToken(storedToken);
        setAccessToken(accessTokenLs)
      }
    }
  }, []); // Run this effect only once when the component mounts
  
  useEffect(() => {
    // Fetch user data when the component mounts
    dispatch(fetchUserData());
    const fetchData = async () => {
      try {
        const data = await fetchApiData(fetchApiData, accessToken);
        setSweatData(data)
        // Handle the API response as needed
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData()
  }, [dispatch, accessToken]);

  const isLinkActive = (path: string) => {
    return router.pathname === path ? 'active' : '';
  };
  

  const renderNav = () => {
    if (router.pathname === '/owpm') {
      return (
        <SidaNavOwpm />
      );
    } 

    else if (router.pathname === '/owpm/yearlyDraw') {
      return (
        <SidaNavOwpm />
      );
    } 
    
    else if (router.pathname === '/sweatPage') {
      return (
        <SideNavSweat sweatData={sweatData}/>
      );
    } 


    
    
    else {
      return null; // Default to no content for other routes
    }
  };



  return (
    <>
      {renderNav()}
    </>
  );
};

export default SideNav;
