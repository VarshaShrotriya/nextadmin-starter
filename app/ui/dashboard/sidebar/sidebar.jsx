import React from 'react'
import styles from './sidebar.module.css'
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytic,
  MdPeople,
  MdLogout,
  MdOutlineSettings,
  MdHelpCenter
} from "react-icons/md";

const menuItems=[
  {
    title:"Pages",
    lists:[{
      title:"Dashboard",
      path:"/dashboard",
      icon:<MdDashboard/>,
    },{
      title:"Users",
      path:"/dashboard/users",
      icon:<MdSupervisedUserCircle/>,
    },{
      title:"Products",
      path:"/dashboard/products",
      icon:<MdShoppingBag/>,
    },{
      title:"Transactions",
      path:"/dashboard/transactions",
      icon:<MdAttachMoney/>,
    },],
  },
  {
    title:"Analytics",
    lists:[{
      title:"Revenue",
      path:"/dashboard/revenue",
      icon:<MdWork/>,
    },{
      title:"Reports",
      path:"/dashboard/reports",
      icon:<MdWork/>,
    },{
      title:"Teams",
      path:"/dashboard/teams",
      icon:<MdPeople/>,
    },
  ],
  },{
    title:"User",
    lists:[{
      title:"Settings",
      path:"/dashboard/settings",
      icon:<MdOutlineSettings/>,
    },{
      title:"Help",
      path:"/dashboard/help",
      icon:<MdHelpCenter/>,
    },
  ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src="/android.jpg" alt="" width="50" height="50" />
        <div className={styles.userDetail}>
        <span className={styles.username}>Varsha Shrotriya</span>
        <span className={styles.userTitle}>Administrator</span>
      </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat)=>(
          <li key={cat.title}>
            <span className={styles.cat}>
              {cat.title}
            </span>
            {cat.lists.map((item)=>(
              <MenuLink item={item} key={item.title}/>
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout/>
        Logout</button>
    </div>
  );
};

export default Sidebar