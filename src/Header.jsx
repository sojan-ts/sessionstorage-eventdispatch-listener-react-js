import { useEffect, useState } from "react";

export default function Header() {
    const [sessionValue, setSessionValue] = useState(
      sessionStorage.getItem('value') || 0
    );
  
    useEffect(() => {
      window.addEventListener('sessionStorageUpdated', handleSessionStorageUpdated);
      return () => {
        window.removeEventListener('sessionStorageUpdated', handleSessionStorageUpdated);
      };
    }, []);
  
    function handleSessionStorageUpdated() {
      setSessionValue(sessionStorage.getItem('value'));
    }
  
    return (
      <div>
        <h1>Session Value: {sessionValue}</h1>
      </div>
    );
  }
  