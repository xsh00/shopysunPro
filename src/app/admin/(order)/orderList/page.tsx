'use client'

import { useState, useEffect } from 'react'
import { DatePicker, Select, Input, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

const { RangePicker } = DatePicker
const { Option } = Select
const { Search } = Input

interface OrderData {
  key: string
  orderNumber: string
  orderTime: string
  paymentStatus: string
  shippingStatus: string
  quantity: number
  totalAmount: number
}

const columns: ColumnsType<OrderData> = [
  {
    title: '订单编号',
    dataIndex: 'orderNumber',
    key: 'orderNumber',
  },
  {
    title: '订单时间',
    dataIndex: 'orderTime',
    key: 'orderTime',
  },
  {
    title: '付款状态',
    dataIndex: 'paymentStatus',
    key: 'paymentStatus',
  },
  {
    title: '物流状态',
    dataIndex: 'shippingStatus',
    key: 'shippingStatus',
  },
  {
    title: '数量',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: '总金额',
    dataIndex: 'totalAmount',
    key: 'totalAmount',
    render: (amount) => `$${amount.toFixed(2)}`,
  },
]

// 模拟数据
const data: OrderData[] = [
  {
    key: '1',
    orderNumber: 'ORD001',
    orderTime: '2023-05-20 10:00:00',
    paymentStatus: '已付款',
    shippingStatus: '已发货',
    quantity: 2,
    totalAmount: 199.99,
  },
  // ... 可以添加更多模拟数据
]

export default function OrderListPage() {
  const [filteredData, setFilteredData] = useState<OrderData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/order')
      if (!response.ok) {
        throw new Error('获取订单数据失败')
      }
      const data = await response.json()
      setFilteredData(data)
    } catch (error) {
      console.error('获取订单数据时出错:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDateChange = (dates: unknown, dateStrings: [string, string]) => {
    // 实现日期筛选逻辑
    console.log('Selected Date Range:', dateStrings)
  }

  const handleOrderStatusChange = (value: string) => {
    // 实现订单状态筛选逻辑
    console.log('Selected Order Status:', value)
  }

  const handleShippingStatusChange = (value: string) => {
    // 实现发货状态筛选逻辑
    console.log('Selected Shipping Status:', value)
  }

  const handleSearch = (value: string) => {
    // 实现搜索逻辑
    const filtered = data.filter(item => 
      item.orderNumber.toLowerCase().includes(value.toLowerCase()) ||
      item.paymentStatus.toLowerCase().includes(value.toLowerCase()) ||
      item.shippingStatus.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredData(filtered)
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">订单列表</h1>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        <RangePicker onChange={handleDateChange} />
        <Select
          style={{ width: 120 }}
          placeholder="订单状态"
          onChange={handleOrderStatusChange}
        >
          <Option value="inProgress">进行中</Option>
          <Option value="completed">已完成</Option>
          <Option value="cancelled">已取消</Option>
        </Select>
        <Select
          style={{ width: 120 }}
          placeholder="发货状态"
          onChange={handleShippingStatusChange}
        >
          <Option value="shipped">已发货</Option>
          <Option value="notShipped">未发货</Option>
        </Select>
        <Search
          placeholder="搜索订单"
          onSearch={handleSearch}
          style={{ width: 200 }}
        />
      </div>
      <Table 
        columns={columns} 
        dataSource={filteredData} 
        loading={loading}
      />
    </>
  )
}
