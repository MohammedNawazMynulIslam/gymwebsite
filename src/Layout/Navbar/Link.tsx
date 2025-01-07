import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string
    selectedPage: string
    setselectedPage: (value: string) => void
}

const Link = ({
    page,
    selectedPage,
    setselectedPage}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "")
    return (

        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
        href='' onClick={()=>setselectedPage(lowerCasePage)}>
            {page}
        </AnchorLink>

    )
}