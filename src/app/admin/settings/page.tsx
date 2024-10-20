'use client'

import React from 'react'
import { Card, Row, Col } from 'antd'
import { useRouter } from 'next/navigation'
import {
  InfoCircleOutlined,
  CarOutlined,
  BellOutlined,
  UserOutlined,
  TeamOutlined,
  FileTextOutlined,
  GlobalOutlined
} from '@ant-design/icons'

interface SettingModule {
  title: string
  icon: React.ReactNode
  path: string
}

const settingModules: SettingModule[] = [
  { title: '基础信息', icon: <InfoCircleOutlined />, path: '/admin/settings/basicSettings' },
  { title: '物流管理', icon: <CarOutlined />, path: '/admin/settings/logistics' },
  { title: '通知', icon: <BellOutlined />, path: '/admin/settings/notice' },
  { title: '账户管理', icon: <UserOutlined />, path: '/admin/settings/accountManagement' },
  { title: '员工账号', icon: <TeamOutlined />, path: '/admin/settings/employees' },
  { title: '政策条款', icon: <FileTextOutlined />, path: '/admin/settings/policyClauses' },
  { title: '语言设置', icon: <GlobalOutlined />, path: '/admin/settings/languageSetting' },
]

export default function SettingsPage() {
  const router = useRouter()

  const handleModuleClick = (path: string) => {
    router.push(path)
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">设置</h1>
      <Row gutter={[16, 16]}>
        {settingModules.map((module, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              className="text-center cursor-pointer"
              onClick={() => handleModuleClick(module.path)}
            >
              <div className="text-4xl mb-2">{module.icon}</div>
              <div className="text-lg">{module.title}</div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}
