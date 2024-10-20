import React, { useState } from 'react';
import { Row, Col, Select } from 'antd';

const { Option } = Select;

export default function ProductLandingPage() {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [marketingPlan, setMarketingPlan] = useState('');

  return (
    <Row gutter={24}>
      <Col span={12}>
        <h2 className="text-xl font-bold mb-4">产品落地页设置</h2>
        <div className="mb-4">
          <label className="block mb-2">选择产品</label>
          <Select
            style={{ width: '100%' }}
            placeholder="请选择产品"
            onChange={(value) => setSelectedProduct(value)}
          >
            <Option value="product1">产品1</Option>
            <Option value="product2">产品2</Option>
            <Option value="product3">产品3</Option>
          </Select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">选择营销方案</label>
          <Select
            style={{ width: '100%' }}
            placeholder="请选择营销方案"
            onChange={(value) => setMarketingPlan(value)}
          >
            <Option value="plan1">营销方案1</Option>
            <Option value="plan2">营销方案2</Option>
            <Option value="plan3">营销方案3</Option>
          </Select>
        </div>
        {/* 可以添加更多设置选项 */}
      </Col>
      <Col span={12}>
        <h2 className="text-xl font-bold mb-4">移动端预览</h2>
        <div className="border-2 border-gray-300 rounded-lg p-4 h-96 overflow-auto">
          {/* 这里可以添加一个模拟的移动端预览 */}
          <h3 className="text-lg font-bold mb-2">{selectedProduct || '请选择产品'}</h3>
          <p>{marketingPlan ? `营销方案: ${marketingPlan}` : '请选择营销方案'}</p>
          {/* 可以根据选择的产品和营销方案动态渲染更多内容 */}
        </div>
      </Col>
    </Row>
  );
}
