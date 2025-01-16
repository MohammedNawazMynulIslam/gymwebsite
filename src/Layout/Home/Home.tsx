import { useMediaQuery } from '@/hooks/useMediaQuery'
import { SelectedPage } from '@/shared/type'
import HomePageText from '@/assets/HomePageText.png'
import ActionButton from '@/shared/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import RedBulll from '@/assets/SponsorRedBull.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import Forbes from '@/assets/SponsorForbes.png'
import Fortune from '@/assets/SponsorFortune.png'

type Props = {
  setselectedPage: (value: SelectedPage) => void
}

export const Home = ({ setselectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery('(min-width: 768px)')
  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
      {/* img and main header */}
      <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
        {/* main header */}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/* heading */}
          <div className='md:-mt-20'>
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className='
            mt-8 text-sm'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quam voluptatum, vitae eos dignissimos necessitatibus excepturi laudantium in? Error architecto rem natus magni, vero ad! Aperiam beatae fugit dicta dolorem.

            </p>
          </div>
          <div className='mt-8 flex items-center gap-8 '>
            <ActionButton setselectedPage={setselectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
              onClick={() => setselectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}>
              <p>Learn More</p>
            </AnchorLink>
          </div>
          {/* img */}
          <div>
            <img src={HomePageGraphic} alt="home-page-graphic" />
          </div>
        </div>

      </div>
      {/* sponsor */}
      {isAboveMediumScreen&&(
        <div>
          <div>
            <div>
              <img src={RedBulll} alt="sponsor-redbull" />
              <img src={Forbes} alt="sponsor-Forbes" />
              <img src={Fortune} alt="sponsor-Fortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}