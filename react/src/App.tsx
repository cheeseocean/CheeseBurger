import React from 'react';
import {Route, Routes, Navigate, useLocation, useNavigate} from 'react-router-dom';
import {login, findPassword, register, HIDE_MENU_PATH_SET, index, community, creation, videos, personal} from './router/router'
import {TabBar} from 'antd-mobile'
import {AppOutline, UnorderedListOutline, MessageOutline, UserOutline} from 'antd-mobile-icons'
import './App.scss'

function App() {
  const tabs = [
    {
      key: index.path,
      title: '首页',
      icon: <AppOutline/>,
      badge: 5
    },
    {
      key: community.path,
      title: '云社区',
      icon: <UnorderedListOutline/>,
      badge: '99+'
    },
    {
      key: videos.path,
      title: '云视频',
      icon: <UnorderedListOutline/>,
      badge: '99+'
    },
    {
      key: creation.path,
      title: '云创作',
      icon: <MessageOutline/>,
      badge: ''
    },
    {
      key: personal.path,
      title: '创作中心',
      icon: <UserOutline/>,
      badge: ''
    },
  ]
  const location = useLocation()
  const navigate = useNavigate()

  function tabChange(pathname: string) {
    navigate(pathname)
  }

  return (
    <div className="main">
      <Routes>
        <Route element={<Navigate to={login.path} replace/>} path="/"/>
        {
          [login, findPassword, register, index, community, creation, videos, personal]
            .map(({path, element}) => <Route element={element} path={path} key={path}/>)
        }
      </Routes>
      {
        HIDE_MENU_PATH_SET.has(location.pathname) ? null :
          <TabBar onChange={tabChange} className='tab-bar'>
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
