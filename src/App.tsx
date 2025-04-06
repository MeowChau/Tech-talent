import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, ConfigProvider } from 'antd';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import JobPostPage from './pages/JobPostPage';
import JobDetailPage from './pages/JobDetailPage';

const { Content } = Layout;

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#1890ff' } }}>
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Header />
          <Content style={{ padding: '24px 50px', marginTop: 64 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/post-job" element={<JobPostPage />} />
              <Route path="/jobs/:id" element={<JobDetailPage />} />
            </Routes>
          </Content>
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;