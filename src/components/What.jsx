import s from './What.module.css'
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const What = () => {

    const { t } = useTranslation()

    const properties = [
        {
            id: 1,
            title: t("what.cards.0.title"),
            description: t("what.cards.0.description"),
            image: "/Container.svg",
            name: t("what.cards.0.name"),
            state: t("what.cards.0.state"),
            logo: "/Profile.svg"
        },

        {
            id: 2,
            title: t("what.cards.1.title"),
            description: t("what.cards.1.description"),
            image: "/Container.svg",
            name: t("what.cards.1.name"),
            state: t("what.cards.1.state"),
            logo: "/Profile (1).svg"
        },

        {
            id: 3,
            title: t("what.cards.2.title"),
            description: t("what.cards.2.description"),
            image: "/Container.svg",
            name: t("what.cards.2.name"),
            state: t("what.cards.2.state"),
            logo: "/Profile (2).svg"
        },

        {
            id: 4,
            title: t("what.cards.3.title"),
            description: t("what.cards.3.description"),
            image: "/Container.svg",
            name: t("what.cards.3.name"),
            state: t("what.cards.3.state"),
            logo: "/uifaces-human-avatar (1).jpg"
        },

        {
            id: 5,
            title: t("what.cards.4.title"),
            description: t("what.cards.4.description"),
            image: "/Container.svg",
            name: t("what.cards.4.name"),
            state: t("what.cards.4.state"),
            logo: "/uifaces-popular-avatar.jpg"
        },

        {
            id: 6,
            title: t("what.cards.5.title"),
            description: t("what.cards.5.description"),
            image: "/Container.svg",
            name: t("what.cards.5.name"),
            state: t("what.cards.5.state"),
            logo: "/uifaces-human-avatar (2).jpg"
        },

        {
            id: 7,
            title: t("what.cards.6.title"),
            description: t("what.cards.6.description"),
            image: "/Container.svg",
            name: t("what.cards.6.name"),
            state: t("what.cards.6.state"),
            logo: "/uifaces-human-avatar.jpg"
        },

        {
            id: 8,
            title: t("what.cards.7.title"),
            description: t("what.cards.7.description"),
            image: "/Container.svg",
            name: t("what.cards.7.name"),
            state: t("what.cards.7.state"),
            logo: "/uifaces-human-avatar (3).jpg"
        },
    ];

    return (
        <section className={s.what} id='what'>

            <motion.div
                className={s.text}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0.2 }}
            >

                <img
                    src="/Abstract Design.svg"
                    alt=""
                    className={s.logo}
                />

                <h1>
                    {t("what.title")}
                </h1>

                <div className={s.titles}>
                    <p>
                        {t("what.description")}
                    </p>
                </div>

            </motion.div>

            <Swiper
                modules={[Navigation, Pagination, Autoplay, Mousewheel]}

                spaceBetween={30}

                slidesPerView={3}

                loop={true}

                navigation={true}

                mousewheel={{
                    forceToAxis: true
                }}

                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false
                }}

                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },

                    768: {
                        slidesPerView: 2
                    },

                    1200: {
                        slidesPerView: 3
                    }
                }}

                className={s.swiper}
            >

                {properties.map((item, index) => (

                    <SwiperSlide key={item.id}>

                        <motion.div
                            className={s.card}

                            initial={{
                                opacity: 0,
                                y: 120,
                                filter: "blur(10px)"
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)"
                            }}

                            transition={{
                                duration: 0.9,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1]
                            }}

                            viewport={{
                                amount: 0.2
                            }}

                            whileHover={{
                                y: -10
                            }}
                        >

                            <img
                                src={item.image}
                                alt={item.title}
                                className={s.image}
                            />

                            <h2>{item.title}</h2>

                            <p>{item.description}</p>

                            <div className={s.user}>

                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className={s.imgg}
                                />

                                <div className={s.names}>
                                    <h3>{item.name}</h3>
                                    <h4>{item.state}</h4>
                                </div>

                            </div>

                        </motion.div>

                    </SwiperSlide>

                ))}

            </Swiper>

        </section>
    )
}

export default What