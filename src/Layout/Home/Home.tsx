import { useMediaQuery } from '@/hooks/useMediaQuery'
import { SelectedPage } from '@/shared/type'
import HomePageText from '@/assets/HomePageText.png'
import ActionButton from '@/shared/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import RedBulll from '@/assets/SponsorRedBull.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import Forbes from '@/assets/SponsorForbes.png'
import Fortune from '@/assets/SponsorFortune.png'
import { motion } from "framer-motion"

type Props = {
  setselectedPage: (value: SelectedPage) => void
}

export const Home = ({ setselectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)')
  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
      {/* img and main header */}
      <motion.div
        onViewportEnter={() => setselectedPage(SelectedPage.Home)}
        className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
        {/* main header */}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/* heading */}
          <motion.div
            className='md:-mt-20'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className='
            mt-8 text-sm'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quam voluptatum, vitae eos dignissimos necessitatibus excepturi laudantium in? Error architecto rem natus magni, vero ad! Aperiam beatae fugit dicta dolorem.

            </p>
          </motion.div>
          {/* action */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            className='mt-8 flex items-center gap-8 '>

            <ActionButton setselectedPage={setselectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
              onClick={() => setselectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}>
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* img */}
        <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </motion.div>


      {/* sponsor */}
      {isAboveMediumScreen && (
        <div className='h-[150px] w-full bg-primary-100 py-10'>
          <div className='w-5/6 mx-auto'>
            <div className='flex w-3/5 items-center justify-between gap-8'>
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