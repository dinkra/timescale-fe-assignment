import { useState } from 'react';

const useToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible((current) => !current);

  return {
    isVisible,
    toggleVisibility
  };
};

export default useToggleVisibility;
