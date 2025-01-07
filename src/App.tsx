import Navbar from "@/Layout/Navbar"
import { useState } from 'react'
function App() {
const [selectedPage, setselectedPage] = useState<string>("Home")

  return (
    <>
      <div className="app bg-gray-20">
        <Navbar
          selectedPage={selectedPage}
          setselectedPage={setselectedPage} />
      </div>

    </>
  )
}

export default App
