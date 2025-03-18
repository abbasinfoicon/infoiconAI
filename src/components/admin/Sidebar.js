import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { ArrowRepeat, Book, Calendar3, CurrencyDollar, Gear, GraphUpArrow, InfoCircle, ListStars, PencilSquare, People, Speedometer2, Stars, WindowFullscreen, X } from 'react-bootstrap-icons'

const Sidebar = ({ toggleMenu }) => {
  const pathname = usePathname();
  const isActive = (path) => {
    if (path === '/dashboard') {
      return pathname === '/dashboard' ? 'active' : null;
    }
    return pathname.startsWith(path) ? 'active' : null;
  };

  return (
    <div className={`menu-panel ${toggleMenu ? 'w-0 min-w-0' : 'w-[200px] min-w-[200px]'}`}>
      <button className="mainnav-close d-block d-md-none"><X className="iconsax" /></button>
      <Link href="/dashboard" className="logo-icon d-none d-md-flex"><img src="/assets/images/logo.png" className="img-fluid" /></Link>

      <ul className="nav nav-tabs menu-wrapper">
        <li className="nav-item"><Link href="/dashboard" className={`nav-link ${isActive('/dashboard')}`}><Speedometer2 className="iconsax" /><span>Dashboard</span> </Link></li>
        <li className="nav-item"><Link href="/dashboard/users" className={`nav-link ${isActive('/dashboard/users')}`}><People className="iconsax" /><span>Users</span> </Link></li>
        <li className="nav-item"><Link href="/dashboard/subscription" className={`nav-link ${isActive('/dashboard/subscription')}`}><Calendar3 className="iconsax" /><span>Subscription</span> </Link></li>
        <li className="nav-item"><Link href="/dashboard/payment" className={`nav-link ${isActive('/dashboard/payment')}`}><CurrencyDollar className="iconsax" /><span>Payment</span> </Link></li>
        <li className="nav-item"><Link href="/dashboard/features" className={`nav-link ${isActive('/dashboard/features')}`}><ListStars className="iconsax" /><span>Features</span> </Link></li>
        <li className="nav-item"><Link href="/dashboard/analytics" className={`nav-link ${isActive('/dashboard/analytics')}`}><GraphUpArrow className="iconsax" /><span>Analytics</span> </Link></li>
        <li className="nav-item"><Link href="/dashboard/docs" className={`nav-link ${isActive('/dashboard/docs')}`}><Book className="iconsax" /><span>Docs</span> </Link></li>
        <li className="nav-item"><Link href="/dashboard/blog" className={`nav-link ${isActive('/dashboard/blog')}`}><PencilSquare className="iconsax" /><span>Blog</span> </Link></li>
        <li className="nav-item"><Link href="/dashboard/pages" className={`nav-link ${isActive('/dashboard/pages')}`}><WindowFullscreen className="iconsax" /><span>Pages</span> </Link></li>
        <li className="nav-item"><Link href="/dashboard/history" className={`nav-link ${isActive('/dashboard/history')}`}><ArrowRepeat className="iconsax" /><span>History</span> </Link></li>
        <li className="nav-item"><Link href="/dashboard/help" className={`nav-link ${isActive('/dashboard/help')}`}><InfoCircle className="iconsax" /><span>Help</span> </Link></li>
        <li className="nav-item"><Link href="/dashboard/rating" className={`nav-link ${isActive('/dashboard/rating')}`}><Stars className="iconsax" /><span>Rating</span> </Link></li>
        <li className="nav-item"><Link href="/dashboard/setting" className={`nav-link ${isActive('/dashboard/setting')}`}><Gear className="iconsax" /><span>Setting</span> </Link></li>
      </ul>
    </div>
  )
}

export default Sidebar