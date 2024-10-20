import Sidebar from '@/components/Sidebar'

export default function AppHomePage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">我的应用</h1>
        <p>这里是我的应用页面的内容。</p>
      </div>
    </div>
  )
}

