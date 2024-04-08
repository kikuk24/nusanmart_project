"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaEnvelope, FaShoppingBag } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
export default function Navbar() {
  const { data: session, status } = useSession();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);
  return (
    <nav className={`sticky top-0 z-50 ${scroll ? "bg-white" : "bg-transparent"}`}>
      <div className="flex items-center py-2 px-4 w-full justify-between gap-3">
        <div className="md:w-[130px] md:flex hidden items-center w-[100px]">
          <Link href="/">
            <Image
              src="/assets/images/static/nusan.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="flex items-center w-full mt-3 gap-2">
          <svg
            className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
              fill=""
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
              fill=""
            />
          </svg>
          <input type="text" placeholder="Cari..." className="w-full focus:outline-slate-600 roounded-full px-2 py-1 bg-gray" />
          <div className="relative">
            <FaShoppingBag className="cursor-pointer w-4 h-4 md:w-6 md:h-6 text-black" />
            <span className="w-4 h-4 rounded-full text-white bg-red mr-1 flex items-center justify-center text-center text-[6px] font-bold absolute top-[-5px] right-[-5px]">1</span>
          </div>
          <FaEnvelope className="cursor-pointer w-6 h-6 text-black md:hidden " />
        </div>
        <div className="md:w-[200px] hidden md:flex items-center gap-3">
          {session ? <Link href="/auth" className="px-2 py-1 bg-primary text-white">Akun</Link> : null}
          {/* <button onClick={() => signIn()}>Tes</button> */}
          {/* <Link href="/auth" className="px-2 py-1 bg-primary text-white">Masuk</Link> */}
          {/* <Link href="/auth" className="px-2 py-1 bg-primary text-white">Daftar</Link> */}
        </div>
      </div>
    </nav>
  )
}
