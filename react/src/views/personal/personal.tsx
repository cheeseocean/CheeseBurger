import {AppstoreOutline, FileOutline, UserCircleOutline} from 'antd-mobile-icons';
import './personal.scss'
import {List} from 'antd-mobile';

export default function Personal() {
  return (
    <div className='personal-box'>
      <header>
        <div className='avatar-box'>
          <div className='flex al-i-center'>
            <UserCircleOutline className='avatar'/>
            <span className='ml-10'>游客4872</span>
          </div>
          <span>空间 &gt;</span>
        </div>
        <div className='head-tab-box'>
          <div className='tab'>
            <span className='val'>199</span>
            <span>动态</span>
          </div>
          <div className='tab'>
            <span className='val'>9999</span>
            <span>粉丝</span>
          </div>
          <div className='tab'>
            <span className='val'>1</span>
            <span>关注</span>
          </div>
        </div>
      </header>
      <main>
        <div className='card-box'>
          <div className='card'>
            会员
          </div>
          <div className='card'>
            声音卡
          </div>
        </div>
        <div className='main-card'>
          <div className='left'>
            <FileOutline/>
            <span className='ml-5'>近期睡眠报告</span>
          </div>
          <span>查看详情&gt;</span>
        </div>
        <div className='nav-box'>
          <nav>
            <AppstoreOutline/>
            <span>睡眠报告</span>
          </nav>
          <nav>
            <AppstoreOutline/>
            <span>我喜欢的</span>
          </nav>
          <nav>
            <AppstoreOutline/>
            <span>我的插单</span>
          </nav>
          <nav>
            <AppstoreOutline/>
            <span>消息中心</span>
          </nav>
        </div>
      </main>
      <footer>
        <List>
          <List.Item onClick={() => 1}>播放历史</List.Item>
          <List.Item onClick={() => 1}>更换图标</List.Item>
          <List.Item onClick={() => 1}>设置</List.Item>
          <List.Item onClick={() => 1}>设置2</List.Item>
        </List>
      </footer>
    </div>
  )
}
