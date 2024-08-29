// src/hooks/useBaseContext.js
import { useContext } from 'react';
import { BaseContext } from '../context/baseContext'; 

const useBaseContext = () => {
  return useContext(BaseContext);
};

export default useBaseContext;
