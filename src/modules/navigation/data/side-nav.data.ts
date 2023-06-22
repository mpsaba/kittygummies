import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'TRANSACTION',
        items: ['dashboard', 'order'],
    },
    {
        text: 'Content Management',
        items: ['product', 'deliverStatus'],
    },
    {
        text: 'Admin',
        items: ['user', 'role'],
    },
    {
        text: '',
        items: ['auditTrail', 'report'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
    product: {
        icon: 'table',
        text: 'Product',
        link: '/products',
    },
    order: {
        icon: 'table',
        text: 'Order',
        link: '/orders',
    },
    deliverStatus: {
        icon: 'table',
        text: 'Delivery Status',
        link: '/deliver-status',
    },
    user: {
        icon: 'table',
        text: 'User',
        link: '/users',
    },
    role: {
        icon: 'table',
        text: 'Role',
        link: '/roles',
    },
    auditTrail: {
        icon: 'table',
        text: 'Audit Trail',
        link: '/audit-trails',
    },
    report: {
        icon: 'table',
        text: 'Report',
        link: '/reports',
    },
};
