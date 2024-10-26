import { NextResponse } from 'next/server'

// 模拟订单数据
const mockOrders = [
  { id: '1', customerName: 'mike', product: '商品A', amount: 100, status: '已完成', date: '2023-05-01' },
  { id: '2', customerName: 'john', product: '商品B', amount: 200, status: '处理中', date: '2023-05-02' },
  { id: '3', customerName: 'jike', product: '商品C', amount: 150, status: '已发货', date: '2023-05-03' },
  { id: '4', customerName: 'lili', product: '商品D', amount: 300, status: '已完成', date: '2023-05-04' },
  { id: '5', customerName: 'alice', product: '商品E', amount: 250, status: '已取消', date: '2023-05-05' },
]

export async function GET() {
  // 这里可以添加分页、排序、筛选等逻辑
  // 目前我们简单返回所有模拟数据
  return NextResponse.json({ orders: mockOrders })
}

