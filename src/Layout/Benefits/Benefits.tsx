import { HeaderText } from "@/shared/HeaderText/HeaderText"
import { BenefitType, SelectedPage } from "@/shared/type"
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

export const Benefits = ({ setSelectedPage }: Props) => {
    const benefits: Array<BenefitType> = [
        {
            icon: <HomeModernIcon className="h-6 w-6" />,
            title: "State of Art Facilities",
            description: "asdassasadasdsadwqasdasdasdwqsaasdasdqwqwdsadqwsdd"
        },
        {
            icon: <UserGroupIcon className="h-6 w-6" />,
            title: "100's of Diverse Classes",
            description: "asdassasadasdsadwqasdasdasdwqsaasdasdqwqwdsadqwsdd"
        },
        {
            icon: <AcademicCapIcon className="h-6 w-6" />,
            title: "Expert and Pro Trainers",
            description: "asdassasadasdsadwqasdasdasdwqsaasdasdqwqwdsadqwsdd"
        }
    ]
    return (
        <section id="benefits" className="mx-auto w-5/6 py-10  min-h-full">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefit)}
            >
                {/* header */}
                <div className="md:my-5 md:w-3/5">
                    <HeaderText>
                        MORE THAN JUST GYM.
                    </HeaderText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equimentm, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member
                    </p>
                </div>
                {/* benefits */}
                <div className="md:flex items-center justify-between gap-8 mt-4" >
                    {benefits?.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}