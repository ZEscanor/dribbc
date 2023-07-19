import { useRouter } from 'next/router';
import React from 'react';

const CatchAllPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Slug: {slug}</h1>
    </div>
    
  );
};

export default CatchAllPage;