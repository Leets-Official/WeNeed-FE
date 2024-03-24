'use client';

import GlobalError from '(route)/error';
import Loading from '(route)/loading';
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
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const fetchDataAndRedirect = async () => {
      try {
        const data = await fetchData();
        console.log('data', data);
        console.log('data.destination', data.destination);

        if (data) {
          const href = `${process.env.NEXT_PUBLIC_NEXT_SERVER}${data.destination}`;
          console.log('href', href);
          const url = new URL(href);
          const hasRegistered = url.searchParams.get('hasRegistered');
          const accessToken = url.searchParams.get('accessToken');
          const refreshToken = url.searchParams.get('refreshToken');

          console.log('url', url);
          console.log('hasRegistered', hasRegistered);
          console.log('accessToken', accessToken);
          if (accessToken && refreshToken) {
            if (accessToken === 'undefined' || refreshToken === 'undefined') {
              console.error('accessToken or refreshToken is undefined');
              return setError(
                new Error('accessToken or refreshToken is undefined'),
              );
            }
            setTokens(accessToken, refreshToken);
            if (hasRegistered === 'true') {
              window.location.href = '/';
            } else {
              window.location.href = '/userinfoset/1';
            }
          } else {
            console.error('No accessToken or refreshToken found');
          }
        } else {
          console.error('No data or redirectUrl found');
        }
      } catch (error: any) {
        console.error('Error during fetch in useEffect:', error);
        setError(error);
      }
    };

    fetchDataAndRedirect();
  }, []);
  if (error)
    return (
      <GlobalError error={error} reset={() => (window.location.href = '/')} />
    );
  return <Loading />;
};

export default OauthPage;
