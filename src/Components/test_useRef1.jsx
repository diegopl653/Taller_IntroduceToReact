import React, { useRef, useEffect } from 'react';

function ComponenteConRef() {
  const miRef = useRef(null);

  useEffect(() => {
    miRef.current.focus();
  }, []);

  return <input ref={miRef} />;
}

export default ComponenteConRef;