import PageWrapper from '@/components/PageWrapper/PageWrapper';
import Home from '@/features/home/Home';

export default function Index() {
  return (
    <PageWrapper btnClass='bg-white !text-primary hover:!text-white border-white border'>
      <Home />
    </PageWrapper>
  );
}
