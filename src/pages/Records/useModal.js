import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
    console.log('toggle triggered')
  }

  return {
    isShowing,
    toggle,
  }
};

export default useModal;