import { useRouter } from 'next/router';
import React from 'react';

const NotFoundPage = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.replace('/');
    alert("404 Page Not Found");
  });

  return null;
};

export default NotFoundPage;
