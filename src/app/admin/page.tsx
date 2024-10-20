'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { checkAuthStatus } from '@/utils/auth'
import { Card, Row, Col, List, Avatar } from 'antd'
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  PercentageOutlined,
  UserOutlined,
  EyeOutlined,
  FireOutlined
} from '@ant-design/icons'

// 模拟的数据接口
interface DashboardData {
  todayTotalSales: number
  todayOrders: number
  todayConversionRate: number
  todayVisitors: number
  realTimeVisitors: number
}

interface HotProduct {
  id: string
  name: string
  image: string
  sales: number
}

export default function AdminDashboard() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [hotProducts, setHotProducts] = useState<HotProduct[]>([])

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await checkAuthStatus()
      if (!isAuthenticated) {
        console.log('用户未认证，重定向到登录页面')
        router.push('/admin/login')
      } else {
        console.log('用户已认证，加载仪表板数据')
        // 模拟API调用
        setTimeout(() => {
          setDashboardData({
            todayTotalSales: 1894,
            todayOrders: 156,
            todayConversionRate: 3.2,
            todayVisitors: 1420,
            realTimeVisitors: 42,
          })
          setHotProducts([
            { id: '1', name: '热销商品1', image: 'https://via.placeholder.com/50', sales: 100 },
            { id: '2', name: '热销商品2', image: 'https://via.placeholder.com/50', sales: 85 },
            { id: '3', name: '热销商品3', image: 'https://via.placeholder.com/50', sales: 70 },
          ])
          setIsLoading(false)
        }, 1000)
      }
    }

    checkAuth()
  }, [router])

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">加载中...</div>
  }

  if (!dashboardData) {
    return <div className="flex justify-center items-center h-screen">无法加载数据</div>
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">数据概览</h1>
      
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DashboardCard 
            title="今日总销售额" 
            value={`$${dashboardData.todayTotalSales.toFixed(2)}`}
            icon={<DollarCircleOutlined style={{ fontSize: '24px', color: '#52c41a' }} />}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DashboardCard 
            title="今日订单数量" 
            value={dashboardData.todayOrders}
            icon={<ShoppingCartOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DashboardCard 
            title="今日转化率" 
            value={`${dashboardData.todayConversionRate}%`}
            icon={<PercentageOutlined style={{ fontSize: '24px', color: '#faad14' }} />}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DashboardCard 
            title="今日访客总数" 
            value={dashboardData.todayVisitors}
            icon={<UserOutlined style={{ fontSize: '24px', color: '#722ed1' }} />}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DashboardCard 
            title="实时访客" 
            value={dashboardData.realTimeVisitors}
            icon={<EyeOutlined style={{ fontSize: '24px', color: '#eb2f96' }} />}
          />
        </Col>
      </Row>

      <Card
        title={
          <span>
            <FireOutlined style={{ marginRight: '8px', color: '#ff4d4f' }} />
            热销产品
          </span>
        }
        className="mt-6"
      >
        <List
          itemLayout="horizontal"
          dataSource={hotProducts}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={item.name}
                description={`销量：${item.sales}`}
              />
            </List.Item>
          )}
        />
      </Card>
    </>
  )
}

function DashboardCard({ title, value, icon }: { title: string; value: number | string; icon: React.ReactNode }) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
        {icon}
      </div>
    </Card>
  )
}
