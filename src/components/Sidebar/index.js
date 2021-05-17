import React from 'react';
import { NavLink } from 'react-router-dom';

import { useCart } from '../../contexts/cart';
import { SidebarContainer, ContentContainer } from './styles';

function Sidebar({ children }) {
  const { shoppingCart } = useCart();

  const pages = [
    { name: 'Home', route: '/home' },
    { name: 'Produtos', route: '/products' },
    { name: 'Compras', route: '/purshases' },
  ];

  return (
    <SidebarContainer>
      <article className="sidebar">
        <div className="logo">
          <NavLink to="/home">S-SHOP</NavLink>
        </div>
        <nav>
          <ul className="sidebar__nav">
            {pages.map((page) => (
              <li key={page.name}>
                <NavLink
                  to={page.route}
                  activeStyle={{
                    color: '#fff',
                    background: '#264356',
                  }}
                >
                  {page.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </article>
      <ContentContainer>
        <header className="sidebar__header">
          <span>{shoppingCart.length}</span>
          <NavLink
            to="/cart"
            activeStyle={{
              color: '#264356',
              background: '#e6eaec',
            }}
          >
            Carrinho
          </NavLink>
        </header>
        <section className="content">{children}</section>
      </ContentContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
