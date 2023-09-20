import { useEffect, useState } from 'react'; // Import these hooks

const TopNav = () => {
  // Initialize token as an empty string, or any default value you prefer
  const [token, setToken] = useState('');

  useEffect(() => {
    // Check if we're in the browser environment before accessing localStorage
    if (typeof window !== 'undefined') {
      const storedToken = window.localStorage.getItem('email');
      if (storedToken) {
        setToken(storedToken);
      }
    }
  }, []); // Run this effect only once when the component mounts

  return (
    <nav style={{ backgroundColor: '#e0e2e2' }} className="bg-blue-500 pt-4 pb-2">
      <div className="container-fluid mx-auto">
        <ul className="flex justify-between items-center space-x-4">
        <li className="nav-item">
            <a className="text-black hover:text-blue-300 no-underline" href="/login"><b>DASHBOARD</b></a>
          </li>          
          <li  style={{ backgroundColor: '#cf0020', border:'1px solid #cf0020', borderRadius:'8px' }}   className="nav-item p-1.5 text-xs" >
            {/* <a className="text-white hover:text-blue-300 no-underline" href="/login"><b>MILLIONARE</b></a> */}
          </li>
          <li className="nav-item">
            <a className="text-black hover:text-blue-300 no-underline text-xs" href="#">{token}</a>
          </li>
          {/* Additional <li> items */}
        </ul>
      </div>
    </nav>
  );
}

export default TopNav;
