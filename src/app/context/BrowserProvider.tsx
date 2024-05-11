import { createContext, useState, useEffect, ReactNode } from 'react';

interface BrowserContextType {
  isMobile: boolean;
}

interface BrowserProviderProps {
  children: ReactNode;
}

export const BrowserContext = createContext<BrowserContextType | undefined>(
  undefined,
);

export const BrowserProvider = ({ children }: BrowserProviderProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(/Mobile|Android|iP(ad|hone)/.test(userAgent));
  }, []);

  useEffect(() => {
    if (isMobile) {
      alert('모바일이 아닌 데스크탑 환경에서 사용해주세요.');
    }
  }, [isMobile]);

  return (
    <BrowserContext.Provider value={{ isMobile }}>
      {children}
    </BrowserContext.Provider>
  );
};
