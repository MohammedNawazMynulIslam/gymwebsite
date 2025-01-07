import React from 'react'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import Logo from "@/assets/Logo.png"
type Props = {
  selectedPage: string
  setselectedPage: (value: string) => void
}

const Navbar = ({selectedPage, setselectedPage}: Props) => {
  const flexBetween = "flex justify-between items-center"
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-20 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6 `}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LHS */}
            <img src={Logo} alt="logo" />
            {/* RHS */}
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} w-full gap-8 text-sm border-2 border-red-500 `}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                setselectedPage={setselectedPage}
                />
                <Link page="Benefit" s
                selectedPage={selectedPage}
                setselectedPage={setselectedPage} />
                <Link page="Our classes"
                selectedPage={selectedPage}
                setselectedPage={setselectedPage} />
                <Link page="Contact Us"
                selectedPage={selectedPage}
                setselectedPage={setselectedPage} />
                {/* <Link page="Home"/> */}
              </div>
              <div className={`${flexBetween} gap-8`}>
                <a href="#home">Sign In</a>
                <button>Become a Member</button>
              </div>
              <div className="md:hidden">
                <Bars3Icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar