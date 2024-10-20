import Sidebar from '@/components/Sidebar'

export default function TrackSettingsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">追踪设置</h1>
        <p>这里是追踪设置页面的内容。</p>
      </div>
    </div>
  )
}

