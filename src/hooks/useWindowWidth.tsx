import {useEffect, useState} from 'react';
import {throttle} from 'lodash';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = throttle(() => {
      setWindowWidth(window.innerWidth)
    }, 400)

    window.addEventListener('resize', handleResize)
   
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return windowWidth;
}

export default useWindowWidth;