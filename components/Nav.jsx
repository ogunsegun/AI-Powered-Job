'use client';

import React from "react";
import Link from 'next/link';
import Image from "next/image";
import { useEffect, useState } from "react";


const Nav = () => {
  const isUserLoggedIn = true;
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href='/' className="flex gap-2 flex-center">
      <Image src='/assets/images/Z.jpg' alt='ai-job'
      width={30}
      height={30}
      className="object-contain"
      />
      <p className="logo_text">AI-Powered Job</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        { isUserLoggedIn ? (
           <div className="flex gap-3 md:gap-5">
              <Link href='/my-job' className="black_btn">
               My Job
              </Link>
              <Link href="/profile">
              <Image src='/assets/images/profile.jpg'
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              
              />
            </Link>
           </div>
        ): (
          <>
          <button type="button" onClick={() =>''} className="black_btn">
            Sign In
          </button>
          </>
        )}
      </div>
      
      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        { isUserLoggedIn ? (
            <div className="flex">
                <Image src='/assets/images/profile.jpg'
                width={37}
                height={37}
                className="roundedd-full"
                alt="profile"
                onClick={() =>setToggleDropdown((prev) => !prev)}
                />
                {
                    toggleDropdown && (
                        <div className="dropdown"> 
                         <Link href='/profile' className="dropdown_link"
                         onClick={() => setToggleDropdown(false)} >
                            My profile
                         </Link>
                        </div>
                    )
                }
            </div>
        ): (
            <>
            
            </>
        )}
      </div>
    </nav>
  )
}

export default Nav
