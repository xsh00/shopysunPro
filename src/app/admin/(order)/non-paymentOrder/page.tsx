'use client'

import { useState } from 'react'
import { DatePicker, Select, Input, Table, Button, message } from 'antd'
import type { ColumnsType } from 'antd/es/table'

const { RangePicker } = DatePicker
const { Option } = Select
const { Search } = Input

interface AbandonedOrderData {
  key: string
  orderNumber: string
  time: string
  emailStatus: '发送成功' | '发送失败'
  recallStatus: '未召回' | '已召回'
  totalAmount: number
}

const handleSendEmail = (orderNumber: string) => {
  // 实现发送邮件逻辑
  console.log('Sending email for order:', orderNumber)
  message.success(`已为订单 ${orderNumber} 发送邮件`)
}

const columns: ColumnsType<AbandonedOrderData> = [
  {
    title: '订单编号',
    dataIndex: 'orderNumber',
    key: 'orderNumber',
  },
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '邮件状态',
    dataIndex: 'emailStatus',
    key: 'emailStatus',
  },
  {
    title: '召回状态',
    dataIndex: 'recallStatus',
    key: 'recallStatus',
  },
  {
    title: '总金额',
    dataIndex: 'totalAmount',
    key: 'totalAmount',
    render: (amount) => `¥${amount.toFixed(2)}`,
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Button onClick={() => handleSendEmail(record.orderNumber)}>
        发送邮件
      </Button>
    ),
  },
]

// 模拟数据
const mockData: AbandonedOrderData[] = [
  {
    key: '1',
    orderNumber: 'AO001',
    time: '2023-05-20 10:00:00',
    emailStatus: '发送成功',
    recallStatus: '未召回',
    totalAmount: 199.99,
  },
  {
    key: '2',
    orderNumber: 'AO002',
    time: '2023-05-21 11:30:00',
    emailStatus: '发送失败',
    recallStatus: '未召回',
    totalAmount: 299.99,
  },
  // 可以添加更多模拟数据...
]

export default function NonPaymentOrderPage() {
  const [data, setData] = useState(mockData)

  const handleDateChange = (dates: unknown, dateStrings: [string, string]) => {
    // 实现日期筛选逻辑
    console.log('Selected Date Range:', dateStrings)
  }

  const handleRecallStatusChange = (value: string) => {
    // 实现召回状态筛选逻辑
    console.log('Selected Recall Status:', value)
  }

  const handleSearch = (value: string) => {
    // 实现搜索逻辑
    const filtered = mockData.filter(item => 
      item.orderNumber.toLowerCase().includes(value.toLowerCase()) ||
      item.emailStatus.includes(value) ||
      item.recallStatus.includes(value)
    )
    setData(filtered)
  }


  return (
    <>
      <h1 className="text-3xl font-bold mb-6">丢弃订单</h1>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        <RangePicker onChange={handleDateChange} />
        <Select
          style={{ width: 120 }}
          placeholder="召回状态"
          onChange={handleRecallStatusChange}
        >
          <Option value="未召回">未召回</Option>
          <Option value="已召回">已召回</Option>
        </Select>
        <Search
          placeholder="搜索订单"
          onSearch={handleSearch}
          style={{ width: 200 }}
        />
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  )
}
