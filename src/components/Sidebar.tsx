'use client'

import React from 'react';
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/navigation';
import {
  HomeOutlined,
  ShoppingCartOutlined,
  InboxOutlined,
  UserOutlined,
  BarChartOutlined,
  NotificationOutlined,
  AppstoreOutlined,
  ShopOutlined,
  FacebookOutlined,
  SettingOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('主页', '/admin', <HomeOutlined />),
  getItem('订单', 'sub1', <ShoppingCartOutlined />, [
    getItem('所有订单', '/admin/orderList'),
    getItem('弃单', '/admin/non-paymentOrder'),
  ]),
  getItem('商品管理', 'sub2', <InboxOutlined />, [
    getItem('商品列表', '/admin/productList'),
    getItem('SKU管理', '/admin/stockList'),
    getItem('商品分类', '/admin/productCategory'),
  ]),
  getItem('顾客', '/admin/customer', <UserOutlined />),
  getItem('数据中心', 'sub3', <BarChartOutlined />, [
    getItem('数据概览', '/admin/dataAnalyse'),
    getItem('商品分析', '/admin/hotProduct'),
    getItem('实时视图', '/admin/liveView'),
  ]),
  getItem('营销', 'sub4', <NotificationOutlined />, [
    getItem('优惠码', '/admin/discounts'),
    getItem('梯度优惠', '/admin/gradientDiscount'),
    getItem('激励分享', '/admin/incentiveShare'),
    getItem('弹窗', '/admin/popupsList'),
  ]),
  getItem('应用中心', 'sub5', <AppstoreOutlined />, [
    getItem('我的应用', '/admin/applications/appHome'),
    getItem('应用商城', '/admin/applications/appShop'),
  ]),
  getItem('店铺管理', 'sub6', <ShopOutlined />, [
    getItem('店铺装修', '/admin/decorationManage'),
    getItem('页面管理', '/admin/pageManage'),
    getItem('菜单栏', '/admin/menuManage'),
    getItem('追踪设置', '/admin/trackSettings'),
    getItem('域名', '/admin/domainSettings'),
    getItem('主页SEO', '/admin/homepageSeo'),
  ]),
  getItem('广告投放', '/admin/adManage', <FacebookOutlined />), 
  getItem('设置', '/admin/settings', <SettingOutlined />),
];

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const router = useRouter();

  const onClick: MenuProps['onClick'] = (e) => {
    router.push(e.key as string);
  };

  return (
    <Sider 
      collapsible 
      collapsed={collapsed} 
      onCollapse={(value) => setCollapsed(value)}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="logo" style={{ height: '32px', margin: '16px', background: 'rgba(255, 255, 255, 0.3)' }} />
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
        onClick={onClick}
        style={{ borderRight: 0 }}
      />
    </Sider>
  );
};

export default Sidebar;
