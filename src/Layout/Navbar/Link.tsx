import { SelectedPage } from '@/shared/type'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string,
    selectedPage: SelectedPage
    setselectedPage: (value: SelectedPage) => void
}

const Link = ({
    page,
    selectedPage,
    setselectedPage }: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
    return (

        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
            href='' onClick={() => setselectedPage(lowerCasePage)}>
            {page}
        </AnchorLink>

    )
}

export default Link