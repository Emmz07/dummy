import dynamic from 'next/dynamic';

const MyClientComponent = dynamic(() => import('./MyClientComponent'), {
  // Options for dynamic import (if needed)
  ssr: false, // Set this to false to avoid running the client component on the server
});

const MyServerComponent = () => {
  return (
    <div>
      <h1>This is a server component</h1>
      <MyClientComponent /> {/* This is the client component */}
    </div>
  );
};

export default MyServerComponent;

