import PageWrapper from '@/components/PageWrapper/PageWrapper';
import OurMenu from '@/features/OurMenu/OurMenu';
import React from 'react';

const Index = () => {
  return (
    <PageWrapper NavbarClass='bg-white !text-black'>
      <OurMenu />
    </PageWrapper>
  );
};

export default Index;
