import Navbar from "@/Layout/Navbar"
import { useEffect, useState } from 'react'
import { SelectedPage } from '@/shared/type'
import { Home } from '@/Layout/Home/Home'
import { Benefits } from '@/Layout/Benefits/Benefits'
function App() {
  const [selectedPage, setselectedPage] = useState<SelectedPage>(SelectedPage.Home)

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setselectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="app bg-gray-20">
        <Navbar isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setselectedPage={setselectedPage}
        />

        <Home setselectedPage={setselectedPage} />
        <Benefits setSelectedPage={setselectedPage} />
      </div>
    </>
  )
}

export default App
