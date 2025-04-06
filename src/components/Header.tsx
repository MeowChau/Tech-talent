import { Layout, Menu } from 'antd';
import { HomeOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <Header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
    }}>
      <div 
        style={{
          float: 'left',
          width: 120,
          height: 31,
          margin: '16px 24px 16px 0',
          background: 'rgba(0,0,0,0.1)',
          cursor: 'pointer'
        }}
        onClick={() => navigate('/')}
      >
        Tech Jobs
      </div>
      <Menu
        theme="light"
        mode="horizontal"
        style={{ flex: 1, minWidth: 0 }}
        items={[
          {
            key: 'home',
            icon: <HomeOutlined />,
            label: 'Home',
            onClick: () => navigate('/'),
          },
          {
            key: 'post-job',
            icon: <PlusOutlined />,
            label: 'Post Job',
            onClick: () => navigate('/post-job'),
          },
        ]}
      />
    </Header>
  );
};

export default AppHeader;