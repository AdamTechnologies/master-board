import { useRouter } from 'next/router';
import React, { useState ,useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import myStyles from '@/styles/myStyle.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { fetchUserData, fetchYearlyRafleIdData } from '@/slices/userActions';
import { Badge } from '@mui/material';
const {fetchSweatData,fetchnoOfRecipies} = require('.././pages/api/sweatApi/index');

const SideNavSweat = ({ sweatData }) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>()
  const tickets = useSelector((state: RootState) => state.user.tickets);
  const yearlyTickets = useSelector((state: RootState) => state.user.yearlyTickets);

  const [sweatNoOfRecipe, setSweatNoOfRecipe] = useState('');


  useEffect(() => {
    // Fetch user data when the component mounts
    dispatch(fetchUserData());
    dispatch(fetchYearlyRafleIdData());
  }, [dispatch]);


  const isLinkActive = (path: string) => {
    return router.pathname === path ? 'active' : '';
  };

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchNoOfRecipe = async () => {
      try {
        const data = await fetchSweatData();
        // const data = await fetchApiData();
        setSweatNoOfRecipe(data.data.length)
        // Handle the API response as needed
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchNoOfRecipe()
  }, [sweatData]);

  return (
    <>
      {/* <ul className="nav nav-pills flex-column">
        <li className={`nav-item ${isLinkActive('/')}`}>
          <a className={`${myStyles.myNewStyle} nav-link ${myStyles.active}` } href="/sweatPage#home">New Reciepe  
          <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/30 ml-1"><strong>{sweatData?.data?.length}</strong> </span>
          </a>
        </li>
        <li className={`nav-item ${isLinkActive('/owpm/yearlyDraw')}`}>
          <a className={`${myStyles.myNewStyle} nav-link`} href="/owpm/yearlyDraw">Total Points
          <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/30 ml-1"><strong>{yearlyTickets?.totalCount}</strong> </span>
          
          </a>
        </li>
        <li className={`nav-item ${isLinkActive('/owpm/contact')}`}>
          <a className={`${myStyles.myNewStyle} nav-link`} href="/owpm/contact">TodaysPoint</a>
        </li>
      </ul> */}


      <div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mt-6">
        <a href="/sweatPage" aria-current="true" type="button" className="w-full px-4 py-2 font-medium text-left text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600 no-underline ">
          New Reciepe
          <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/30 ml-2"><strong>{sweatNoOfRecipe}</strong> </span>
        </a>
        <a href="/sweatPage" type="button" className="w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white no-underline ">
          Total Recipe
          <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/30 ml-2"><strong>{yearlyTickets?.totalCount}</strong> </span>
        </a>

        <a href="/sweatPage" type="button" className="w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white no-underline ">
          Today's Point
          <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/30 ml-2"><strong>{yearlyTickets?.totalCount}</strong> </span>
        </a>
        <div className="w-full px-4 py-2 font-medium text-left bg-blue-100 rounded-b-lg cursor-not-allowed dark:bg-gray-600 dark:text-gray-400 pb-2">
       SWEAT
    </div>
      </div>


    </>
  );
};

export default SideNavSweat;
