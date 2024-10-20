import Sidebar from '@/components/Sidebar'

export default function DecorationManagePage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">店铺装修</h1>
        <p>这里是店铺装修页面的内容。</p>
      </div>
    </div>
  )
}

