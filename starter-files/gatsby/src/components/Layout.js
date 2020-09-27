import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
