import { useContext } from 'react';

import { MyContext } from '../Context';

const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('Context is undefined.');
  }
  return context;
};

export default useMyContext;
