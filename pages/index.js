import React from 'react';
import Link from 'next/link';
import Button from '@app/components/button';

export default () => (
  <Link prefetch href="next">
    <Button>Next page</Button>
  </Link>
);
