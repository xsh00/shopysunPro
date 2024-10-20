import Sidebar from '@/components/Sidebar'

export default function AppShopPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">应用商城</h1>
        <p>这里是应用商城的内容。</p>
      </div>
    </div>
  )
}

