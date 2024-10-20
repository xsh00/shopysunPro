import Sidebar from '@/components/Sidebar'

export default function LogisticsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">物流管理</h1>
        <p>这里是物流管理页面的内容。</p>
      </div>
    </div>
  )
}

