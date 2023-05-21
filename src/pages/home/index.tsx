import React, { FC } from 'react';
import { Layout } from 'antd'
import Styles from './index.scss'
const { Header, Content, Footer } = Layout
const Home:FC = () => {
  return (
      <Layout>
          <Header className={Styles['nav-bar']}>Header</Header>
          <Content>Content</Content>
          <Footer >Footer</Footer>
      </Layout>
  )
} 

export default Home;
