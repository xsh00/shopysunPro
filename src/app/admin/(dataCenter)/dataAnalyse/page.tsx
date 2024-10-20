'use client'

import { useState, useEffect } from 'react'
import { Card, Row, Col } from 'antd'
import ReactECharts from 'echarts-for-react'

// 模拟数据生成函数
const generateMockData = (days: number) => {
  const data = []
  const now = new Date()
  for (let i = 0; i < days; i++) {
    const date = new Date(now.getTime() - (days - i) * 24 * 60 * 60 * 1000)
    data.push({
      date: date.toISOString().split('T')[0],
      sales: Math.floor(Math.random() * 10000),
      orders: Math.floor(Math.random() * 100),
      visitors: Math.floor(Math.random() * 1000),
      avgOrderValue: Math.floor(Math.random() * 200 + 50),
    })
  }
  return data
}

const mockData = generateMockData(30)

export default function DataAnalysePage() {
  const [data, setData] = useState(mockData)

  useEffect(() => {
    // 这里可以添加从API获取实际数据的逻辑
    setData(mockData)
  }, [])

  const salesChartOption = {
    title: { text: '总销售额趋势' },
    xAxis: { type: 'category', data: data.map(item => item.date) },
    yAxis: { type: 'value' },
    series: [{ data: data.map(item => item.sales), type: 'line' }],
    tooltip: { trigger: 'axis' },
  }

  const ordersChartOption = {
    title: { text: '订单数量趋势' },
    xAxis: { type: 'category', data: data.map(item => item.date) },
    yAxis: { type: 'value' },
    series: [{ data: data.map(item => item.orders), type: 'line' }],
    tooltip: { trigger: 'axis' },
  }

  const conversionFunnelOption = {
    title: { text: '访客转化率漏斗图' },
    tooltip: { trigger: 'item', formatter: '{a} <br/>{b} : {c}%' },
    series: [{
      name: '转化率',
      type: 'funnel',
      left: '10%',
      top: 60,
      bottom: 60,
      width: '80%',
      min: 0,
      max: 100,
      minSize: '0%',
      maxSize: '100%',
      sort: 'descending',
      gap: 2,
      label: { show: true, position: 'inside' },
      labelLine: { length: 10, lineStyle: { width: 1, type: 'solid' } },
      itemStyle: { borderColor: '#fff', borderWidth: 1 },
      emphasis: { label: { fontSize: 20 } },
      data: [
        { value: 100, name: '访问店铺' },
        { value: 80, name: '加入购物车' },
        { value: 60, name: '发起结账' },
        { value: 40, name: '填写收件信息' },
        { value: 30, name: '添加支付信息' },
        { value: 20, name: '完成购买' },
      ]
    }]
  }

  const visitorsChartOption = {
    title: { text: '访客数量趋势' },
    xAxis: { type: 'category', data: data.map(item => item.date) },
    yAxis: { type: 'value' },
    series: [{ data: data.map(item => item.visitors), type: 'line' }],
    tooltip: { trigger: 'axis' },
  }

  const avgOrderValueChartOption = {
    title: { text: '客单价趋势' },
    xAxis: { type: 'category', data: data.map(item => item.date) },
    yAxis: { type: 'value' },
    series: [{ data: data.map(item => item.avgOrderValue), type: 'line' }],
    tooltip: { trigger: 'axis' },
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">数据分析</h1>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card>
            <ReactECharts option={salesChartOption} />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <ReactECharts option={ordersChartOption} />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <ReactECharts option={conversionFunnelOption} />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <ReactECharts option={visitorsChartOption} />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <ReactECharts option={avgOrderValueChartOption} />
          </Card>
        </Col>
      </Row>
    </>
  )
}
