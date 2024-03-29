import React from 'react'
import Link from 'next/link'
const Topbar = () => {
  return (
    <div className="hidden md:block text-sm bg-whiten">
      <div className="h-7 w-full flex justify-between px-4">
        <div className="">
          Dowload App Nusanmart
        </div>
        <div className="">
          <ul className="flex gap-4">
            <li><Link href="/dashboard">Mulai Berjualan</Link></li>
            <li><Link href="/help">Bantuan</Link></li>
            <li><Link href="/about">Tentang</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Topbar
