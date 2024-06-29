import Link from "next/link";
import style from "./Sidebar.module.css";

const Sidebar = () => {
  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];

  return (
    <>
      <div className="sidebar-menu">
        <ul className="d-flex flex-column gap-2 ">
          <li>
            <Link href="#" className={style.menu_item}>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="dashboard"
                  d="M2 18C2 16.4596 2 15.6893 2.34673 15.1235C2.54074 14.8069 2.80693 14.5407 3.12353 14.3467C3.68934 14 4.45956 14 6 14C7.54044 14 8.31066 14 8.87647 14.3467C9.19307 14.5407 9.45926 14.8069 9.65327 15.1235C10 15.6893 10 16.4596 10 18C10 19.5404 10 20.3107 9.65327 20.8765C9.45926 21.1931 9.19307 21.4593 8.87647 21.6533C8.31066 22 7.54044 22 6 22C4.45956 22 3.68934 22 3.12353 21.6533C2.80693 21.4593 2.54074 21.1931 2.34673 20.8765C2 20.3107 2 19.5404 2 18Z"
                  stroke="#475569"
                  strokeWidth="1.5"
                />
                <path
                  className="dashboard"
                  d="M14 18C14 16.4596 14 15.6893 14.3467 15.1235C14.5407 14.8069 14.8069 14.5407 15.1235 14.3467C15.6893 14 16.4596 14 18 14C19.5404 14 20.3107 14 20.8765 14.3467C21.1931 14.5407 21.4593 14.8069 21.6533 15.1235C22 15.6893 22 16.4596 22 18C22 19.5404 22 20.3107 21.6533 20.8765C21.4593 21.1931 21.1931 21.4593 20.8765 21.6533C20.3107 22 19.5404 22 18 22C16.4596 22 15.6893 22 15.1235 21.6533C14.8069 21.4593 14.5407 21.1931 14.3467 20.8765C14 20.3107 14 19.5404 14 18Z"
                  stroke="#475569"
                  strokeWidth="1.5"
                />
                <path
                  className="dashboard"
                  d="M2 6C2 4.45956 2 3.68934 2.34673 3.12353C2.54074 2.80693 2.80693 2.54074 3.12353 2.34673C3.68934 2 4.45956 2 6 2C7.54044 2 8.31066 2 8.87647 2.34673C9.19307 2.54074 9.45926 2.80693 9.65327 3.12353C10 3.68934 10 4.45956 10 6C10 7.54044 10 8.31066 9.65327 8.87647C9.45926 9.19307 9.19307 9.45926 8.87647 9.65327C8.31066 10 7.54044 10 6 10C4.45956 10 3.68934 10 3.12353 9.65327C2.80693 9.45926 2.54074 9.19307 2.34673 8.87647C2 8.31066 2 7.54044 2 6Z"
                  stroke="#475569"
                  strokeWidth="1.5"
                />
                <path
                  className="dashboard"
                  d="M14 6C14 4.45956 14 3.68934 14.3467 3.12353C14.5407 2.80693 14.8069 2.54074 15.1235 2.34673C15.6893 2 16.4596 2 18 2C19.5404 2 20.3107 2 20.8765 2.34673C21.1931 2.54074 21.4593 2.80693 21.6533 3.12353C22 3.68934 22 4.45956 22 6C22 7.54044 22 8.31066 21.6533 8.87647C21.4593 9.19307 21.1931 9.45926 20.8765 9.65327C20.3107 10 19.5404 10 18 10C16.4596 10 15.6893 10 15.1235 9.65327C14.8069 9.45926 14.5407 9.19307 14.3467 8.87647C14 8.31066 14 7.54044 14 6Z"
                  stroke="#475569"
                  strokeWidth="1.5"
                />
              </svg>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="#" className={style.menu_item}>
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="products"
                  d="M12 22.0703C11.1818 22.0703 10.4002 21.7401 8.83693 21.0798C4.94564 19.436 3 18.6141 3 17.2316C3 16.8445 3 10.1348 3 7.07031M12 22.0703C12.8182 22.0703 13.5998 21.7401 15.1631 21.0798C19.0544 19.436 21 18.6141 21 17.2316V7.07031M12 22.0703V11.4251"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="products"
                  d="M8.32592 9.76169L5.40472 8.34816C3.80157 7.57241 3 7.18454 3 6.57031C3 5.95608 3.80157 5.56821 5.40472 4.79246L8.32592 3.37893C10.1288 2.50652 11.0303 2.07031 12 2.07031C12.9697 2.07031 13.8712 2.50651 15.6741 3.37893L18.5953 4.79246C20.1984 5.56821 21 5.95608 21 6.57031C21 7.18454 20.1984 7.57241 18.5953 8.34816L15.6741 9.76169C13.8712 10.6341 12.9697 11.0703 12 11.0703C11.0303 11.0703 10.1288 10.6341 8.32592 9.76169Z"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="products"
                  d="M6 12.0703L8 13.0703"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="products"
                  d="M17 4.07031L7 9.07031"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Product</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <a href="add_product.html">
                  <span>Add product</span>
                </a>
              </li>
              <li>
                <a href="product_list.html">
                  <span>Product list</span>
                </a>
              </li>
              <li>
                <a href="category.html">
                  <span>Category</span>
                </a>
              </li>
              <li>
                <a href="sub_category.html">
                  <span>Sub category</span>
                </a>
              </li>
              <li>
                <a href="unit.html">
                  <span>Unit</span>
                </a>
              </li>
              <li>
                <a href="variation.html">
                  <span>Variations</span>
                </a>
              </li>
              <li>
                <a href="brand.html">
                  <span>Brand</span>
                </a>
              </li>
              <li>
                <a href="import.html">
                  <span>Import product by CSV</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#" className={style.menu_item}>
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="purchase"
                  d="M14 2.27035C13.3538 2.13917 12.6849 2.07031 12 2.07031C6.47715 2.07031 2 6.54746 2 12.0703C2 17.5931 6.47715 22.0703 12 22.0703C17.5228 22.0703 22 17.5931 22 12.0703C22 11.3854 21.9311 10.7165 21.8 10.0703"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  className="purchase"
                  d="M12 9.07031C10.8954 9.07031 10 9.74188 10 10.5703C10 11.3987 10.8954 12.0703 12 12.0703C13.1046 12.0703 14 12.7419 14 13.5703C14 14.3987 13.1046 15.0703 12 15.0703M12 9.07031C12.8708 9.07031 13.6116 9.48771 13.8862 10.0703M12 9.07031V8.07031M12 15.0703C11.1292 15.0703 10.3884 14.6529 10.1138 14.0703M12 15.0703V16.0703"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  className="purchase"
                  d="M16.998 7.07031L21.1739 2.89211M21.998 6.54855L21.8798 3.45706C21.8798 2.72842 21.4448 2.27443 20.6523 2.21717L17.5282 2.07031"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Purchase</span>
            </Link>
            <ul className="sub-menu ">
              <li>
                <a href="addpurchase.html">
                  <span>Add purchase</span>
                </a>
              </li>
              <li>
                <a href="purchaselist.html">
                  <span>Purchase list</span>
                </a>
              </li>
              <li>
                <a href="returnpurchase.html">
                  <span>Purchase Return</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#" className={style.menu_item}>
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="sales"
                  d="M14 2.29357C13.3538 2.16254 12.6849 2.09375 12 2.09375C6.47715 2.09375 2 6.56599 2 12.0828C2 17.5995 6.47715 22.0718 12 22.0718C17.5228 22.0718 22 17.5995 22 12.0828C22 11.3987 21.9311 10.7305 21.8 10.085"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  className="sales"
                  d="M12 9.08484C10.8954 9.08484 10 9.75568 10 10.5832C10 11.4107 10.8954 12.0816 12 12.0816C13.1046 12.0816 14 12.7525 14 13.5799C14 14.4074 13.1046 15.0783 12 15.0783M12 9.08484C12.8708 9.08484 13.6116 9.50179 13.8862 10.0838M12 9.08484V8.08594M12 15.0783C11.1292 15.0783 10.3884 14.6614 10.1138 14.0794M12 15.0783V16.0772"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  className="sales"
                  d="M21.9951 2.07031L17.8193 6.24393M16.9951 2.5915L17.1133 5.67959C17.1133 6.40744 17.5484 6.86093 18.3409 6.91813L21.465 7.06482"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Sales</span>
            </Link>
            <ul className="sub-menu ">
              <li>
                <a href="addsale.html">
                  <span>Add sale</span>
                </a>
              </li>
              <li>
                <a href="salelists.html">
                  <span>Sale list</span>
                </a>
              </li>
              <li>
                <a href="salesreturn.html">
                  <span>Sale Return</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#" className={style.menu_item}>
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="supplier"
                  d="M13 7.07031C13 9.27945 11.2091 11.0703 9 11.0703C6.79086 11.0703 5 9.27945 5 7.07031C5 4.86117 6.79086 3.07031 9 3.07031C11.2091 3.07031 13 4.86117 13 7.07031Z"
                  stroke="#475569"
                  strokeWidth="1.5"
                />
                <path
                  className="supplier"
                  d="M15 11.0703C17.2091 11.0703 19 9.27945 19 7.07031C19 4.86117 17.2091 3.07031 15 3.07031"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="supplier"
                  d="M11 14.0703H7C4.23858 14.0703 2 16.3089 2 19.0703C2 20.1749 2.89543 21.0703 4 21.0703H14C15.1046 21.0703 16 20.1749 16 19.0703C16 16.3089 13.7614 14.0703 11 14.0703Z"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  className="supplier"
                  d="M17 14.0703C19.7614 14.0703 22 16.3089 22 19.0703C22 20.1749 21.1046 21.0703 20 21.0703H18.5"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Supplier</span>
            </Link>
          </li>
          <li>
            <Link href="#" className={style.menu_item}>
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="customer"
                  d="M13 22.0703H6.59087C5.04549 22.0703 3.81631 21.3183 2.71266 20.2669C0.453366 18.1144 4.1628 16.3943 5.57757 15.5519C7.53058 14.389 9.7927 13.9107 12 14.1169"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="customer"
                  d="M15.5 6.57031C15.5 9.05559 13.4853 11.0703 11 11.0703C8.51472 11.0703 6.5 9.05559 6.5 6.57031C6.5 4.08503 8.51472 2.07031 11 2.07031C13.4853 2.07031 15.5 4.08503 15.5 6.57031Z"
                  stroke="#475569"
                  strokeWidth="1.5"
                />
                <path
                  className="customer"
                  d="M15.015 15.4569C16.0876 14.8172 17.0238 15.075 17.5863 15.4856C17.8169 15.654 17.9322 15.7382 18 15.7382C18.0678 15.7382 18.1831 15.654 18.4137 15.4856C18.9762 15.075 19.9124 14.8172 20.985 15.4569C22.3928 16.2964 22.7113 19.0661 19.4642 21.4027C18.8457 21.8478 18.5365 22.0703 18 22.0703C17.4635 22.0703 17.1543 21.8478 16.5358 21.4027C13.2887 19.0661 13.6072 16.2964 15.015 15.4569Z"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span>Customer</span>
            </Link>
          </li>
          <li>
            <Link href="#" className={style.menu_item}>
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="stock"
                  d="M7 17.0703V13.0703"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  className="stock"
                  d="M12 17.0703V7.07031"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  className="stock"
                  d="M17 17.0703V11.0703"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  className="stock"
                  d="M2.5 12.0703C2.5 7.59197 2.5 5.3528 3.89124 3.96155C5.28249 2.57031 7.52166 2.57031 12 2.57031C16.4783 2.57031 18.7175 2.57031 20.1088 3.96155C21.5 5.3528 21.5 7.59197 21.5 12.0703C21.5 16.5486 21.5 18.7878 20.1088 20.1791C18.7175 21.5703 16.4783 21.5703 12 21.5703C7.52166 21.5703 5.28249 21.5703 3.89124 20.1791C2.5 18.7878 2.5 16.5486 2.5 12.0703Z"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Stock</span>
            </Link>
            <ul className="sub-menu ">
              <li>
                <a href="#">
                  <span>Demo</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Demo1</span>
                </a>
              </li>
            </ul>
          </li>
          {/* <li>
            <a href="#" className="has-arrow ">
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="expense"
                  d="M12.002 9.07031C10.8974 9.07031 10.002 9.74188 10.002 10.5703C10.002 11.3987 10.8974 12.0703 12.002 12.0703C13.1065 12.0703 14.002 12.7419 14.002 13.5703C14.002 14.3987 13.1065 15.0703 12.002 15.0703M12.002 9.07031C12.8728 9.07031 13.6136 9.48771 13.8881 10.0703M12.002 9.07031V8.07031M12.002 15.0703C11.1311 15.0703 10.3903 14.6529 10.1158 14.0703M12.002 15.0703V16.0703"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  className="expense"
                  d="M13.5 2.57031C13.5 2.57031 12.6839 2.57031 12 2.57031C7.52166 2.57031 5.28249 2.57031 3.89124 3.96156C2.5 5.3528 2.5 7.59197 2.5 12.0703C2.5 16.5486 2.5 18.7878 3.89124 20.1791C5.28249 21.5703 7.52166 21.5703 12 21.5703C16.4783 21.5703 18.7175 21.5703 20.1088 20.1791C21.5 18.7878 21.5 16.5486 21.5 12.0703C21.5 11.3864 21.5 10.5703 21.5 10.5703"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  className="expense"
                  d="M16.5 7.57031L20.6758 3.39211M21.5 7.04855L21.3818 3.95706C21.3818 3.22842 20.9467 2.77443 20.1542 2.71717L17.0302 2.57031"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Expense</span>
            </a>
            <ul className="sub-menu ">
              <li>
                <a href="#">
                  <span>Demo</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Demo1</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="banking.html">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="bank"
                  d="M2 8.56907C2 7.37289 2.48238 6.63982 3.48063 6.08428L7.58987 3.79744C9.7431 2.59915 10.8197 2 12 2C13.1803 2 14.2569 2.59915 16.4101 3.79744L20.5194 6.08428C21.5176 6.63982 22 7.3729 22 8.56907C22 8.89343 22 9.05561 21.9646 9.18894C21.7785 9.88945 21.1437 10 20.5307 10H3.46928C2.85627 10 2.22152 9.88944 2.03542 9.18894C2 9.05561 2 8.89343 2 8.56907Z"
                  stroke="#64748B"
                  strokeWidth="1.5"
                />
                <path
                  className="bank"
                  d="M11.9961 7H12.0051"
                  stroke="#64748B"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="bank"
                  d="M4 10V18.5M8 10V18.5"
                  stroke="#64748B"
                  strokeWidth="1.5"
                />
                <path
                  className="bank"
                  d="M16 10V18.5M20 10V18.5"
                  stroke="#64748B"
                  strokeWidth="1.5"
                />
                <path
                  className="bank"
                  d="M19 18.5H5C3.34315 18.5 2 19.8431 2 21.5C2 21.7761 2.22386 22 2.5 22H21.5C21.7761 22 22 21.7761 22 21.5C22 19.8431 20.6569 18.5 19 18.5Z"
                  stroke="#64748B"
                  strokeWidth="1.5"
                />
              </svg>
              <span>Banking</span>
            </a>
          </li>
          <li>
            <a href="#" className="has-arrow ">
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="accounts"
                  d="M21.5 13.0203V11.1203C21.5 7.0898 21.5 5.07455 20.1088 3.82243C18.7175 2.57031 16.4783 2.57031 12 2.57031C7.52166 2.57031 5.28249 2.57031 3.89124 3.82243C2.5 5.07455 2.5 7.0898 2.5 11.1203V13.0203C2.5 17.0508 2.5 19.0661 3.89124 20.3182C5.28249 21.5703 7.52166 21.5703 12 21.5703C16.4783 21.5703 18.7175 21.5703 20.1088 20.3182C21.5 19.0661 21.5 17.0508 21.5 13.0203Z"
                  stroke="#475569"
                  strokeWidth="1.5"
                />
                <path
                  className="accounts"
                  d="M18 8.07031H14M16 6.07031V10.0703"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="accounts"
                  d="M18 17.5703H14"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="accounts"
                  d="M18 14.5703H14"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="accounts"
                  d="M10 17.5703L8.25 15.8203M8.25 15.8203L6.5 14.0703M8.25 15.8203L10 14.0703M8.25 15.8203L6.5 17.5703"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="accounts"
                  d="M10 8.07031H6"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Accounts</span>
            </a>
            <ul className="sub-menu ">
              <li>
                <a href="chart_of_accounts.html">
                  <span>Chart of accounts</span>
                </a>
              </li>
              <li>
                <a href="journal.html">
                  <span>Manual journal</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Manage VAT/TAX</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="has-arrow ">
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="sale-rtn"
                  d="M17 18.0703V16.0703"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  className="sale-rtn"
                  d="M12 18.0703V15.0703"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  className="sale-rtn"
                  d="M7 18.0703V13.0703"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  className="sale-rtn"
                  d="M6 7.07031C9.19706 10.3386 13.2338 11.1516 17.1413 10.0622M15.6881 8.54164L17.7617 9.5587C18.0076 9.67932 18.074 9.9586 17.91 10.1825L16.5269 12.0703"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="sale-rtn"
                  d="M2.5 12.0703C2.5 7.59197 2.5 5.3528 3.89124 3.96155C5.28249 2.57031 7.52166 2.57031 12 2.57031C16.4783 2.57031 18.7175 2.57031 20.1088 3.96155C21.5 5.3528 21.5 7.59197 21.5 12.0703C21.5 16.5486 21.5 18.7878 20.1088 20.1791C18.7175 21.5703 16.4783 21.5703 12 21.5703C7.52166 21.5703 5.28249 21.5703 3.89124 20.1791C2.5 18.7878 2.5 16.5486 2.5 12.0703Z"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Sales return</span>
            </a>
            <ul className="sub-menu ">
              <li>
                <a href="#">
                  <span>Demo</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Demo1</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="has-arrow ">
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="purchase-rtn"
                  d="M17 18.0703V16.0703M12 18.0703V15.0703M7 18.0703V13.0703M21.5 12.0703C21.5 7.59197 21.5 5.3528 20.1088 3.96155C18.7175 2.57031 16.4783 2.57031 12 2.57031C7.5217 2.57031 5.2825 2.57031 3.8912 3.96155C2.5 5.3528 2.5 7.59197 2.5 12.0703C2.5 16.5486 2.5 18.7878 3.8912 20.1791C5.2825 21.5703 7.5217 21.5703 12 21.5703C16.4783 21.5703 18.7175 21.5703 20.1088 20.1791C21.5 18.7878 21.5 16.5486 21.5 12.0703Z"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="purchase-rtn"
                  d="M18.0078 11.5576C15.8527 11.6294 10.9659 11.3041 8.1863 6.89261M10.0077 6.35964L8.1322 6.05778C7.9036 6.02867 7.568 6.20914 7.4855 6.42427L6.9896 8.06271"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Purchase return</span>
            </a>
            <ul className="sub-menu ">
              <li>
                <a href="#">
                  <span>Demo</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Demo1</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="has-arrow ">
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="report"
                  d="M6.5 17.5703V14.5703M11.5 17.5703V8.57031M16.5 17.5703V13.5703"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  className="report"
                  d="M21.5 5.57031C21.5 7.22716 20.1569 8.57031 18.5 8.57031C16.8431 8.57031 15.5 7.22716 15.5 5.57031C15.5 3.91346 16.8431 2.57031 18.5 2.57031C20.1569 2.57031 21.5 3.91346 21.5 5.57031Z"
                  stroke="#475569"
                  strokeWidth="1.5"
                />
                <path
                  className="report"
                  d="M21.4955 11.0703C21.4955 11.0703 21.5 11.4098 21.5 12.0703C21.5 16.5487 21.5 18.7878 20.1088 20.1791C18.7175 21.5703 16.4783 21.5703 12 21.5703C7.52166 21.5703 5.28249 21.5703 3.89124 20.1791C2.5 18.7878 2.5 16.5487 2.5 12.0703C2.5 7.592 2.5 5.35283 3.89124 3.96158C5.28249 2.57034 7.52166 2.57034 12 2.57034L13 2.57031"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Report</span>
            </a>
            <ul className="sub-menu ">
              <li>
                <a href="#">
                  <span>Demo</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Demo1</span>
                </a>
              </li>
            </ul>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
