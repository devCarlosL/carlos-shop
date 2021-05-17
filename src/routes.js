import { withNavigationWatcher } from './contexts/navigation';

import Home from './pages/Home';
import Cart from './pages/ShoppingCart';
import Products from './pages/Products';
import Purshases from './pages/Purshases';

const routes = [
  { path: '/home', component: Home },
  { path: '/cart', component: Cart },
  { path: '/products', component: Products },
  { path: '/purshases', component: Purshases },
];

export default routes.map((route) => ({
  ...route,
  component: withNavigationWatcher(route.component),
}));
