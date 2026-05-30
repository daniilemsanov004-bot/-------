import s from './World.module.css'
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'

const World = () => {

    const { t } = useTranslation()

    return (
        <section className={s.world} id='world'>

            <div className={s.images}>

                <motion.img
                    src="/Image (7).png"
                    alt=""
                    className={s.img}

                    initial={{
                        opacity: 0,
                        y: 80
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.7
                    }}

                    viewport={{
                        once: false,
                        amount: 0.2
                    }}
                />

                <motion.img
                    src="/Image (8).png"
                    alt=""
                    className={s.img}

                    initial={{
                        opacity: 0,
                        y: 80
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.7,
                        delay: 0.1
                    }}

                    viewport={{
                        once: false,
                        amount: 0.2
                    }}
                />

                <motion.img
                    src="/Image (9).png"
                    alt=""
                    className={s.img}

                    initial={{
                        opacity: 0,
                        y: 80
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.7,
                        delay: 0.2
                    }}

                    viewport={{
                        once: false,
                        amount: 0.2
                    }}
                />

                <motion.img
                    src="/Image (10).png"
                    alt=""
                    className={s.imgg}

                    initial={{
                        opacity: 0,
                        y: 80
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.7,
                        delay: 0.3
                    }}

                    viewport={{
                        once: false,
                        amount: 0.2
                    }}
                />

                <motion.img
                    src="/Image (11).png"
                    alt=""
                    className={s.imgg}

                    initial={{
                        opacity: 0,
                        y: 80
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.7,
                        delay: 0.4
                    }}

                    viewport={{
                        once: false,
                        amount: 0.2
                    }}
                />

                <motion.div
                    className={s.card}

                    initial={{
                        opacity: 0,
                        scale: 0.9,
                        y: 80
                    }}

                    whileInView={{
                        opacity: 1,
                        scale: 1,
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

                    <img
                        src="/Abstract Design.svg"
                        alt=""
                        className={s.logo}
                    />

                    <h1>
                        {t("world.title")}
                    </h1>

                    <p>
                        {t("world.description")}
                    </p>

                </motion.div>

                <motion.img
                    src="/Image (12).png"
                    alt=""
                    className={s.img}

                    initial={{
                        opacity: 0,
                        y: 80
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.7,
                        delay: 0.5
                    }}

                    viewport={{
                        once: false,
                        amount: 0.2
                    }}
                />

            </div>

        </section>
    )
}

export default World