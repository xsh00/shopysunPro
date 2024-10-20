import React from 'react';
import { Form, Input, Select, InputNumber, Button, message } from 'antd';

const { Option } = Select;

export default function FacebookAdSettings() {
  const [form] = Form.useForm();

  const onFinish = (values: unknown) => {
    console.log('Received values of form: ', values);
    // 这里可以添加调用Facebook广告API的逻辑
    message.success('Facebook广告设置已保存');
  };

  return (
    <Form
      form={form}
      name="facebook_ad_settings"
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        name="campaign_name"
        label="广告系列名称"
        rules={[{ required: true, message: '请输入广告系列名称' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="objective"
        label="广告目标"
        rules={[{ required: true, message: '请选择广告目标' }]}
      >
        <Select placeholder="请选择广告目标">
          <Option value="REACH">覆盖面</Option>
          <Option value="TRAFFIC">流量</Option>
          <Option value="ENGAGEMENT">互动</Option>
          <Option value="CONVERSIONS">转化</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="daily_budget"
        label="每日预算"
        rules={[{ required: true, message: '请输入每日预算' }]}
      >
        <InputNumber
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          min={1}
        />
      </Form.Item>

      <Form.Item
        name="targeting"
        label="目标受众"
        rules={[{ required: true, message: '请选择目标受众' }]}
      >
        <Select mode="multiple" placeholder="请选择目标受众">
          <Option value="18-24">18-24岁</Option>
          <Option value="25-34">25-34岁</Option>
          <Option value="35-44">35-44岁</Option>
          <Option value="45+">45岁以上</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          保存Facebook广告设置
        </Button>
      </Form.Item>
    </Form>
  );
}
