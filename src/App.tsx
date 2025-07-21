import React from 'react';
import { Layout, Typography } from 'antd';
// FIX: The import path must match the file's actual name, which is 'SchemaBuilder.tsx'
import { SchemaBuilder } from './components/schemaBuilder/SchemaBuilder';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <Title level={3} style={{ color: 'white', lineHeight: '64px' }}>JSON Schema Builder</Title>
      </Header>
      <Content style={{ padding: '24px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <SchemaBuilder />
        </div>
      </Content>
    </Layout>
  );
}

export default App;

