import React from 'react';
import {Route, Routes, Navigate, useLocation} from 'react-router-dom';
import {login, findPassword, register, HIDE_MENU_PATH_SET} from './router/router'
import {TabBar} from 'antd-mobile'
import {AppOutline, UnorderedListOutline, MessageOutline, UserOutline} from 'antd-mobile-icons'
import './App.scss'

function App() {
  console.log(useLocation())
  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <AppOutline/>,
      badge: 5
    },
    {
      key: '/todo',
      title: '云社区',
      icon: <UnorderedListOutline/>,
      badge: '99+'
    },
    {
      key: '/message',
      title: '云创作',
      icon: <MessageOutline/>,
      badge: ''
    },
    {
      key: '/me',
      title: '创作中心',
      icon: <UserOutline/>,
      badge: ''
    },
  ]
  return (
    <div className="main">
      <Routes>
        <Route element={login.element} path={login.path}/>
        <Route element={findPassword.element} path={findPassword.path}/>
        <Route element={register.element} path={register.path}/>
        <Route element={<Navigate to={login.path} replace/>} path="/"/>
      </Routes>
      {
        HIDE_MENU_PATH_SET.has(useLocation().pathname) ? null :
          <TabBar>
            {tabs.map(item => (
              <TabBar.Item
                key={item.key}
                icon={item.icon}
                title={item.title}
                badge={item.badge}
              />
            ))}
          </TabBar>
      }
    </div>
  );
}

export default App;
