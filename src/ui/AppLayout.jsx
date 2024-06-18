/* eslint-disable no-unused-vars */
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

export default function AppLayout() {
  // react router dom keeps track of loading automatically
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {/* WHERE OUR CONTENT GOES */}
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}
