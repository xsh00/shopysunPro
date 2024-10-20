'use client'

import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';
import ProductLandingPage from '@/components/ProductLandingPage';
import FacebookAdSettings from '@/components/FacebookAdSettings';

const { Step } = Steps;

export default function AdManagePage() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: '产品落地页设置',
      content: <ProductLandingPage />,
    },
    {
      title: 'Facebook广告设置',
      content: <FacebookAdSettings />,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">广告投放</h1>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content my-8">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            下一步
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('广告投放设置完成！')}>
            完成
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            上一步
          </Button>
        )}
      </div>
    </div>
  );
}
