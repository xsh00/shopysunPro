'use client'

import React, { useState, useEffect } from 'react'
import { Layout, Dropdown, Menu, Avatar } from 'antd'
import { UserOutlined, LockOutlined, LogoutOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import { logout } from '@/utils/auth'

const { Header, Content } = Layout

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [username, setUsername] = useState('')
  const router = useRouter()

  useEffect(() => {
    // 从本地存储或者 API 获取用户名
    const storedUsername = localStorage.getItem('username')
    if (storedUsername) {
      setUsername(storedUsername)
    }
  }, [])

  const handleLogout = () => {
    logout()
    router.push('/admin/login')
  }

  const handleChangePassword = () => {
    // 实现修改密码的逻辑，可以跳转到修改密码页面
    router.push('/admin/change-password')
  }

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<LockOutlined />} onClick={handleChangePassword}>
        修改密码
      </Menu.Item>
      <Menu.Item key="2" icon={<LogoutOutlined />} onClick={handleLogout}>
        退出登录
      </Menu.Item>
    </Menu>
  )

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
        <Header style={{ background: '#fff', padding: '0 16px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <div style={{ cursor: 'pointer' }}>
              <Avatar icon={<UserOutlined />} />
              <span style={{ marginLeft: 8 }}>{username}</span>
            </div>
          </Dropdown>
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
