import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './type'

type Props = {
    children: React.ReactNode;
    setselectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setselectedPage }: Props) => {
    return (
        <AnchorLink
            className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
            onClick={() => setselectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            {children}
        </AnchorLink>
    )
}

export default ActionButton