'use client';

import { useEffect } from 'react';

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
      console.error('HTTP error : ', res.status);
      throw new Error(`HTTP error : ${res.status}}`);
    }

    const data = await res.json();
    console.log('success', data);
    return data;
  } catch (error) {
    console.error('Error during fetch in fetch function:', error);
    throw error;
  }
};

const OauthPage = () => {
  useEffect(() => {
    const fetchDataAndRedirect = async () => {
      try {
        const data = await fetchData();

        if (data && data.destination) {
          window.location.href = data.destination;
        } else {
          console.error('No data or redirectUrl found');
        }
      } catch (error) {
        console.error('Error during fetch in useEffect:', error);
      }
    };

    fetchDataAndRedirect();
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
