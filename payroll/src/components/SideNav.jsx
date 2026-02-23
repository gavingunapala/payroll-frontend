import React, { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SideNav.css';

const DEFAULT_MENU = [
  {
    id: 'maintain',
    label: '1. Maintain Module',
    children: [
      {
        id: 'maintain-employee',
        label: 'Employee',
        children: [
          { id: 'maintain-employee-profile', label: 'Employee Profile', to: '/app/maintain/employee/profile' },
          { id: 'maintain-employee-search', label: 'Employee Search', to: '/app/maintain/employee/search' },
          {
            id: 'maintain-employee-pay-distribution',
            label: 'Employee Pay Distribution',
            to: '/app/maintain/employee/pay-distribution',
          },
        ],
      },
      { id: 'maintain-confirm-trainee', label: 'Confirm Trainee', to: '/app/maintain/confirm-trainee' },
      { id: 'maintain-impressed-info', label: 'Impressed Info', to: '/app/maintain/impressed-info' },
      { id: 'maintain-pay-sheet', label: 'Pay Sheet', to: '/app/maintain/pay-sheet' },
      { id: 'maintain-category', label: 'Category', to: '/app/maintain/category' },
      { id: 'maintain-item', label: 'Item', to: '/app/maintain/item' },
    ],
  },
  {
    id: 'schedule',
    label: '2. Schedule Module',
    children: [
      { id: 'schedule-roster', label: 'Roster', to: '/app/schedule/roster' },
      { id: 'schedule-calendar', label: 'Calendar', to: '/app/schedule/calendar' },
    ],
  },
  {
    id: 'process',
    label: '3. Process Module',
    children: [
      { id: 'process-payroll', label: 'Payroll Process', to: '/app/process/payroll' },
      { id: 'process-approval', label: 'Approvals', to: '/app/process/approvals' },
    ],
  },
  {
    id: 'inquiry',
    label: '4. Inquiry Module',
    children: [
      { id: 'inquiry-employee', label: 'Employee Inquiry', to: '/app/inquiry/employee' },
      { id: 'inquiry-pay', label: 'Pay Inquiry', to: '/app/inquiry/pay' },
    ],
  },
  {
    id: 'reports',
    label: '5. Reports Module',
    children: [
      { id: 'reports-monthly', label: 'Monthly Reports', to: '/app/reports/monthly' },
      { id: 'reports-audit', label: 'Audit Reports', to: '/app/reports/audit' },
    ],
  },
  {
    id: 'ums',
    label: '6. UMS',
    children: [
      { id: 'ums-users', label: 'Users', to: '/app/ums/users' },
      { id: 'ums-roles', label: 'Roles', to: '/app/ums/roles' },
      { id: 'ums-permissions', label: 'Permissions', to: '/app/ums/permissions' },
    ],
  },
];

function SideNavItem({ item, openMap, setOpenMap, level = 0 }) {
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  const isOpen = !!openMap[item.id];

  if (!hasChildren) {
    return (
      <NavLink
        to={item.to || '#'}
        className={({ isActive }) =>
          ['sidenav-link', level > 0 ? 'sidenav-link--nested' : '', isActive ? 'active' : '']
            .filter(Boolean)
            .join(' ')
        }
        end
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div className="sidenav-group">
      <button
        type="button"
        className={['sidenav-toggle', isOpen ? '' : 'collapsed'].filter(Boolean).join(' ')}
        onClick={() => setOpenMap((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
        aria-expanded={isOpen}
      >
        <span className="sidenav-toggle__label">{item.label}</span>
        <span className="sidenav-toggle__chev" aria-hidden>
          ▾
        </span>
      </button>

      <div className={['collapse', isOpen ? 'show' : ''].filter(Boolean).join(' ')}>
        <div className="sidenav-children">
          {item.children.map((child) => (
            <SideNavItem
              key={child.id}
              item={child}
              openMap={openMap}
              setOpenMap={setOpenMap}
              level={level + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SideNav({ menu }) {
  const resolvedMenu = useMemo(() => menu || DEFAULT_MENU, [menu]);
  const [openMap, setOpenMap] = useState(() => ({
    maintain: true,
    'maintain-employee': true,
  }));

  return (
    <aside className="sidenav bg-primary text-white">
      <div className="sidenav__brand px-3 py-3 fw-bold">SLAF PAYROLL</div>

      <nav className="sidenav__nav px-2 pb-3">
        {resolvedMenu.map((item) => (
          <SideNavItem key={item.id} item={item} openMap={openMap} setOpenMap={setOpenMap} />
        ))}
      </nav>
    </aside>
  );
}

