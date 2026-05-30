import s from './Discover.module.css'
import { motion } from "framer-motion"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import { useContext, useEffect } from 'react'
import { MyContext } from '../Context'

const Discover = () => {

    const {
        properties,
        getCards,
        isAdmin,
        deleteCard
    } = useContext(MyContext);

    useEffect(() => {
        getCards();
    }, []);

    const { t, i18n } = useTranslation()

    return (
        <section
            className={s.discover}
            id='discover'
        >

            <div className={s.text}>

                <img
                    src="/Abstract Design.svg"
                    alt=""
                    className={s.logo}
                />

                <h1>
                    {t("discoverTitle")}
                </h1>

                <div className={s.titles}>

                    <p>
                        {t("discoverText")}
                    </p>

                </div>

            </div>

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
                    delay: 7500,
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

                {properties.map((item) => (

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
                                alt={item.title?.[i18n.language]}
                                className={s.image}
                            />

                            <h2>
                                {item.title?.[i18n.language]}
                            </h2>

                            <p>
                                {item.description?.[i18n.language]}
                            </p>

                            <div className={s.info}>

                                <span>

                                    <img
                                        src={item.bedroomIcon}
                                        alt=""
                                    />

                                    {item.bedrooms?.[i18n.language]}

                                </span>

                                <span>

                                    <img
                                        src={item.bathroomIcon}
                                        alt=""
                                    />

                                    {item.bathrooms?.[i18n.language]}

                                </span>

                                <span>

                                    <img
                                        src={item.typeIcon}
                                        alt=""
                                    />

                                    {item.type?.[i18n.language]}

                                </span>

                            </div>

                            <div className={s.bottom}>

                                <div className={s.prc}>

                                    <p>
                                        {t("price")}
                                    </p>

                                    <h3>
                                        {item.price}
                                    </h3>

                                </div>

                                <Link
                                    to={item.link}
                                    className={s.linkk}
                                >
                                    {t("viewDetails")}
                                </Link>

                            </div>

                            {isAdmin && (

                                <button
                                    className={s.btn}
                                    onClick={() => deleteCard(item.id)}
                                >
                                    Delete
                                </button>

                            )}

                        </motion.div>

                    </SwiperSlide>

                ))}

            </Swiper>

        </section>
    )
}

export default Discover