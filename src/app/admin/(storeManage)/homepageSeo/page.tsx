import Sidebar from '@/components/Sidebar'

export default function HomepageSeoPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">主页SEO</h1>
        <p>这里是主页SEO页面的内容。</p>
      </div>
    </div>
  )
}

