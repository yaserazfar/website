import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Y•A•S•E•R• •A•Z•F•A•R</Link>} scroll>
            <Navigation>
                <Link to="/about">ABOUT</Link>
                <Link to="/work">WORK</Link>
                <Link to="/ideas">IDEAS</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">HOME</Link>}>
            <Navigation>
              <Link to="/about">ABOUT</Link>
              <Link to="/work">WORK</Link>
              <Link to="/ideas">IDEAS</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
