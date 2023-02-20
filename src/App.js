import React, { useState, useEffect } from 'react';
import Header from './Header';

export default function App() {
  function handleClick() {
    const newValue = parseInt(sessionStorage.getItem('value') || 0) + 1;
    sessionStorage.setItem('value', newValue);
    window.dispatchEvent(new Event('sessionStorageUpdated'));
  }

  return (
    <div>
<Header/>
<div>
        <button onClick={handleClick}>Increment Session Value</button>
      </div>
    </div>
  );
}
