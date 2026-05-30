import s from './Amenities.module.css'
import Connect from './Connect_one'

import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'

const Amenities = () => {

    const { t } = useTranslation()

    const amenities = [
        t("amenitySecond1"),
        t("amenitySecond2"),
        t("amenitySecond3"),
        t("amenitySecond4"),
        t("amenitySecond5"),
        t("amenitySecond6"),
        t("amenitySecond7"),
        t("amenitySecond8")
    ]

    return (
        <section className={s.amenities}>

            <motion.h1
                initial={{
                    opacity: 0,
                    y: 80
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                transition={{
                    duration: 0.8
                }}

                viewport={{
                    once: false,
                    amount: 0.2
                }}
            >
                {t("amenitiesSecondTitle")}
            </motion.h1>

            <div className={s.features}>

                {amenities.map((item, index) => (

                    <motion.div
                        className={s.feature}
                        key={index}

                        initial={{
                            opacity: 0,
                            y: 60,
                            scale: 0.9
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1
                        }}

                        transition={{
                            duration: 0.7,
                            delay: index * 0.08
                        }}

                        viewport={{
                            once: false,
                            amount: 0.2
                        }}

                        whileHover={{
                            y: -8
                        }}
                    >

                        <span></span>

                        <h3>{item}</h3>

                    </motion.div>

                ))}

            </div>

            <motion.div
                initial={{
                    opacity: 0,
                    y: 100
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                transition={{
                    duration: 0.9
                }}

                viewport={{
                    once: false,
                    amount: 0.1
                }}
            >
                <Connect />
            </motion.div>

        </section>
    )
}

export default Amenities