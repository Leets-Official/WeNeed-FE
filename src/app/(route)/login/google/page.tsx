'use client';

import Loading from '(route)/loading';
import Icons from 'components/common/Icons';
import { useEffect } from 'react';
import { weneed } from 'ui/IconsPath';

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
  return <Loading />;
};

export default OauthPage;
