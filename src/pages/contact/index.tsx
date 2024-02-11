import PageWrapper from '@/components/PageWrapper/PageWrapper';
import ContactUs from '@/features/ContactUs/ContactUs';
import React from 'react';

const Index = () => {
  return (
    <PageWrapper NavbarClass='bg-white !text-black'>
      <ContactUs />
    </PageWrapper>
  );
};

export default Index;
