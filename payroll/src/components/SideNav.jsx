import React, { useMemo, useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./SideNav.css";

const DEFAULT_MENU = [
  {
    id: "maintain",
    label: "1. Maintain Module",
    children: [
      {
        id: "maintain-employee",
        label: "Employee",
        children: [
          {
            id: "emp-profile",
            label: "Employee Profile",
            to: "/app/maintain/employee/profile",
          },
          {
            id: "emp-search",
            label: "Employee Search",
            to: "/app/maintain/employee/search",
          },
          {
            id: "emp-pay-distribution",
            label: "Employee Pay Distribution",
            to: "/app/maintain/employee/pay-distribution",
          },
          {
            id: "emp-confirm-trainee",
            label: "Confirm Trainee",
            to: "/app/maintain/employee/confirm-trainee",
          },
          {
            id: "emp-impressed-info",
            label: "Impressed Info",
            to: "/app/maintain/employee/impressed-info",
          },
        ],
      },

      {
        id: "maintain-pay-sheet",
        label: "Pay Sheet",
        to: "/app/maintain/paysheet",
        children: [
          {
            id: "pay-sheet",
            label: "Pay Sheet",
            to: "/app/maintain/maintain/paysheet",
          },
        ],
      },
      {
        id: "maintain-category",
        label: "Category",
        to: "/app/maintain/category",
        children: [
          {
            id: "maintain-category",
            label: "Category",
            to: "/app/maintain/Category/category",
          },
        ],
      },

      {
        id: "maintain-item",
        label: "Item",
        children: [
          {
            id: "item-direct",
            label: "Direct Item",
            to: "/app/maintain/item/direct",
          },
          {
            id: "item-subtypes",
            label: "Item Sub Types",
            to: "/app/maintain/item/subtypes",
          },
          {
            id: "item-maintains",
            label: "Item Maintains",
            to: "/app/maintain/item/maintains",
          },
          {
            id: "item-behavior",
            label: "Pay Item Behavior",
            to: "/app/maintain/item/behavior",
          },
        ],
      },

      {
        id: "maintain-bank",
        label: "Bank Information",
        to: "/app/maintain/bank",
        children: [
          {
            id: "bank-create",
            label: "Bank Create",
            to: "/app/maintain/bank/create",
          },
          {
            id: "bank-report",
            label: "Bank Report",
            to: "/app/maintain/bank/report",
          },
          {
            id: "bank-view",
            label: "Bank View",
            to: "/app/maintain/bank/view",
          },
        ],
      },

      {
        id: "maintain-batch",
        label: "Batch Information",
        children: [
          {
            id: "batch-create",
            label: "Batch Create",
            to: "/app/maintain/batch/create",
          },
          {
            id: "batch-report",
            label: "Batch Report",
            to: "/app/maintain/batch/report",
          },
          {
            id: "batch-view",
            label: "Batch View",
            to: "/app/maintain/batch/view",
          },
        ],
      },
    ],
  },

  {
    id: "schedule",
    label: "2. Schedule Module",
    children: [
      {
        id: "sch-global",
        label: "Global Items Schedule",
        to: "/app/schedule/global",
      },
      {
        id: "sch-auto",
        label: "Auto Items Schedule",
        to: "/app/schedule/auto",
      },
      {
        id: "sch-payunit",
        label: "Pay Unit Items Schedule",
        to: "/app/schedule/payunit",
      },
      {
        id: "sch-fixed",
        label: "Fixed Items Schedule",
        to: "/app/schedule/fixed",
      },
      {
        id: "sch-variable",
        label: "Variable Items Schedule",
        to: "/app/schedule/variable",
      },
      {
        id: "sch-loan",
        label: "Loan Items Schedule",
        to: "/app/schedule/loan",
      },
      {
        id: "sch-water",
        label: "Water Electricity",
        to: "/app/schedule/water",
      },
      {
        id: "sch-halfpay",
        label: "Half Pay Schedule",
        to: "/app/schedule/halfpay",
      },
      {
        id: "sch-pension",
        label: "Pension Schedule",
        to: "/app/schedule/pension",
      },
      {
        id: "sch-stop",
        label: "Schedule Stop Pay",
        to: "/app/schedule/stoppay",
      },
      {
        id: "sch-supplementary",
        label: "Supplementary Pay",
        to: "/app/schedule/supplementary",
      },
    ],
  },

  {
    id: "process",
    label: "3. Process Module",
    children: [
      {
        id: "proc-init",
        label: "Pay Process Initialization",
        to: "/app/process/init",
      },
      {
        id: "proc-increment",
        label: "Annual Increment Process",
        to: "/app/process/increment",
      },
      { id: "proc-pay", label: "Pay Process", to: "/app/process/pay" },
      { id: "proc-final", label: "Final Process", to: "/app/process/final" },
      {
        id: "proc-payment",
        label: "Payment Process",
        to: "/app/process/payment",
      },
      {
        id: "proc-system",
        label: "System Maintains",
        to: "/app/process/system",
      },
    ],
  },

  {
    id: "inquiry",
    label: "4. Inquiry Module",
    children: [
      {
        id: "inq-master",
        label: "Master Information",
        to: "/app/inquiry/master",
      },
      { id: "inq-ed", label: "ED Screen", to: "/app/inquiry/ed" },
      { id: "inq-loan", label: "Loan Information", to: "/app/inquiry/loan" },
      { id: "inq-item", label: "Item Report", to: "/app/inquiry/item" },
      {
        id: "inq-40",
        label: "40% Calculator",
        to: "/app/inquiry/calculator40",
      },
      {
        id: "inq-exception",
        label: "Exception Data",
        to: "/app/inquiry/exception",
      },
    ],
  },

  {
    id: "reports",
    label: "5. Reports Module",
    children: [
      { id: "rep-payslip", label: "Pay Slips", to: "/app/reports/payslip" },
      { id: "rep-batch", label: "Print Batch", to: "/app/reports/batch" },
      { id: "rep-final", label: "Final Report", to: "/app/reports/final" },
      { id: "rep-other", label: "Other Sections", to: "/app/reports/other" },
      {
        id: "rep-dynamic",
        label: "Dynamic Reports",
        to: "/app/reports/dynamic",
      },
    ],
  },

  {
    id: "ums",
    label: "6. UMS",
    children: [
      { id: "ums-user", label: "Users", to: "/app/ums/users" },
      { id: "ums-add-role", label: "Add Roles", to: "/app/ums/roles/add" },
      {
        id: "ums-role-permissions",
        label: "Manage Base Role Permissions",
        to: "/app/ums/roles/permissions",
      },
      { id: "ums-add-user", label: "Add New User", to: "/app/ums/users/add" },
      { id: "ums-password", label: "Change Password", to: "/app/ums/password" },
      { id: "ums-objects", label: "System Objects", to: "/app/ums/objects" },
    ],
  },
];

function SideNavItem({ item, openMap, setOpenMap, level = 0 }) {
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  const isOpen = !!openMap[item.id];

  if (!hasChildren) {
    return (
      <NavLink
        to={item.to || "#"}
        className={({ isActive }) =>
          [
            "sidenav-link",
            level > 0 ? "sidenav-link--nested" : "",
            isActive ? "active" : "",
          ]
            .filter(Boolean)
            .join(" ")
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
        className={["sidenav-toggle", isOpen ? "" : "collapsed"]
          .filter(Boolean)
          .join(" ")}
        onClick={() =>
          setOpenMap((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
        }
        aria-expanded={isOpen}
      >
        <span className="sidenav-toggle__label">{item.label}</span>
        <span className="sidenav-toggle__chev" aria-hidden>
          ▾
        </span>
      </button>

      <div
        className={["collapse", isOpen ? "show" : ""].filter(Boolean).join(" ")}
      >
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

export default function SideNav({ menu, user, onLogout }) {
  const location = useLocation();
  const resolvedMenu = useMemo(() => menu || DEFAULT_MENU, [menu]);
  
  // Function to determine which modules should be open based on current path
  const getInitialOpenMap = (pathname) => {
    const openMap = {};
    
    // If user is on dashboard and is a normal user, keep everything collapsed
    if (pathname === '/app' || pathname === '/app/user-dashboard') {
      if (user?.role === 'user') {
        return openMap; // Return empty map to keep everything collapsed
      }
    }
    
    // Check each module to see if the current path matches its children
    resolvedMenu.forEach(module => {
      if (module.children && module.children.length > 0) {
        const hasActiveChild = module.children.some(child => {
          if (child.to && pathname.includes(child.to)) {
            return true;
          }
          // Check nested children
          if (child.children && child.children.length > 0) {
            return child.children.some(nestedChild => 
              nestedChild.to && pathname.includes(nestedChild.to)
            );
          }
          return false;
        });
        
        if (hasActiveChild) {
          openMap[module.id] = true;
          
          // Also open the parent child if it has nested children
          module.children.forEach(child => {
            if (child.children && child.children.length > 0) {
              const hasActiveNestedChild = child.children.some(nestedChild => 
                nestedChild.to && pathname.includes(nestedChild.to)
              );
              if (hasActiveNestedChild) {
                openMap[child.id] = true;
              }
            }
          });
        }
      }
    });
    
    // Default to maintain module if no specific module is active (only for admin)
    if (Object.keys(openMap).length === 0 && user?.role !== 'user') {
      openMap.maintain = true;
      openMap["maintain-employee"] = true;
    }
    
    return openMap;
  };

  const [openMap, setOpenMap] = useState(() => getInitialOpenMap(location.pathname));

  // Update openMap when location changes
  useEffect(() => {
    const newOpenMap = getInitialOpenMap(location.pathname);
    setOpenMap(newOpenMap);
  }, [location.pathname, resolvedMenu]);

  return (
    <aside className="sidenav bg-primary text-white">
      <Link to="/app" className="text-decoration-none text-dark">
        <div className="sidenav__brand px-3 py-3 fw-bold">SLAF PAYROLL</div>
      </Link>

      <nav className="sidenav__nav px-2 pb-3">
        {resolvedMenu.map((item) => (
          <SideNavItem
            key={item.id}
            item={item}
            openMap={openMap}
            setOpenMap={setOpenMap}
          />
        ))}
      </nav>

      <div className="sidenav-footer p-3 border-top">
        <div className="sidenav-user mb-2">👤 {user?.username || "Guest"}</div>

        <button className="btn btn-light w-100" onClick={onLogout}>
          Logout
        </button>
      </div>
    </aside>
  );
}
