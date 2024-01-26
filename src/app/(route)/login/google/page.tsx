'use client';

import { useEffect, useState } from 'react';
import { setTokens } from 'utils/cookieUtils';

const fetchData = async () => {
  try {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');

    if (!code) {
      console.error('No code found');
      return null;
    }

    const res = await fetch(`/api/auth/callback/google?code=${code}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      credentials: 'include',
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();
    console.log('success', data);
    return data;
  } catch (error) {
    console.error('Error during fetch:', error);
    throw error;
  }
};

const OauthPage = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const data = await fetchData();
        setResponseData(data);
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchDataAndSetState();
  }, []);
  return (
    <div>
      <p className="w-96 h-10 bg-gradient-to-r from-[#4EF4FF] to-[#608CFF]">
        Redirecting...
      </p>
      <p className=" bg-gradient-to-r from-[#4EF4FF] to-[#608CFF]"></p>
    </div>
  );
};

export default OauthPage;
