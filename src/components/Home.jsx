import React from 'react';
import Sidenav from './home/Sidenav';
import Main from './home/Main';
import Projects from './home/Projects';
import ProjectItem from './home/Projectitem';
import Contact from './home/Contact';
import Navbar from './Navbar/NavbarJSX';

function Home() {
  return (
    <div>

      <Sidenav />
      <Main />
      <Projects />
      <ProjectItem />
      <Contact />
    </div>
  );
}

export default Home;
