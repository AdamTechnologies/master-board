import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import myStyles from '@/styles/myStyle.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { fetchUserData, fetchYearlyRafleIdData } from '@/slices/userActions';
import { Badge } from '@mui/material';

const SidaNavOwpm = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>()  
  const tickets = useSelector((state: RootState) => state.user.tickets);  
  const yearlyTickets = useSelector((state: RootState) => state.user.yearlyTickets);  


  useEffect(() => {
    // Fetch user data when the component mounts
    dispatch(fetchUserData());
    dispatch(fetchYearlyRafleIdData());
  }, [dispatch]);


  const isLinkActive = (path: string) => {
    return router.pathname === path ? 'active' : '';
  };
  

  return (
    <>


<div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mt-0">
        <a href="/owpm" aria-current="true" type="button" className="w-full px-4 py-2 font-medium text-left text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600 no-underline ">
          New Draws
          <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/30 ml-2"><strong>{tickets?.total_count}</strong> </span>
        </a>
        <a href="/owpm/yearlyDraw" type="button" className="w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white no-underline ">
          Yearly Draws
          <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/30 ml-2"><strong>{yearlyTickets?.totalCount}</strong> </span>
        </a>
        <div className="w-full px-4 py-2 font-medium text-left bg-blue-100 rounded-b-lg cursor-not-allowed dark:bg-gray-600 dark:text-gray-400 pb-2">
       MILLIONARE
    </div>
      </div>

    </>
  );
};

export default SidaNavOwpm;
