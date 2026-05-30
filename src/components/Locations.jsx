import { useState, useRef } from 'react'

import s from './Locations.module.css'

import { motion } from "framer-motion"

import { useTranslation } from 'react-i18next'

import MapComponent from './MapComponent'

const Locations = () => {

    const { t } = useTranslation()

    const mapRef = useRef(null)

    const [active, setActive] = useState("All")

    const locations = [

        {
            id: 1,

            category: "Regional",

            subtitle: t("regionalOffices"),

            title: t("tashkentAddressOne"),

            review: t("regionalReview"),

            gmail: "tashkent@estatein.com",

            number: "+998 (90) 123-45-67",

            location: t("tashkentLocation"),

            lat: 41.2995,
            lng: 69.2401,

            icon_one: "/Icon (4).svg",
            icon_two: "/Icon (5).svg",
            icon_three: "/Icon (6).svg",
        },

        {
            id: 2,

            category: "International",

            subtitle: t("mainHeadquarters"),

            title: t("tashkentAddressTwo"),

            review: t("headquartersReview"),

            gmail: "global@estatein.com",

            number: "+998 (90) 765-43-21",

            location: t("tashkentLocation"),

            lat: 41.3111,
            lng: 69.2797,

            icon_one: "/Icon (4).svg",
            icon_two: "/Icon (5).svg",
            icon_three: "/Icon (6).svg",
        },

        {
            id: 3,

            category: "Regional",

            subtitle: t("luxuryResortOffice"),

            title: t("amirsoyAddress"),

            review: t("luxuryResortReview"),

            gmail: "amirsoy@estatein.com",

            number: "+998 (91) 555-88-22",

            location: t("amirsoyLocation"),

            lat: 41.5756,
            lng: 70.0211,

            icon_one: "/Icon (4).svg",
            icon_two: "/Icon (5).svg",
            icon_three: "/Icon (6).svg",
        },

        {
            id: 4,

            category: "International",

            subtitle: t("historicPropertiesOffice"),

            title: t("samarkandAddress"),

            review: t("historicPropertiesReview"),

            gmail: "samarkand@estatein.com",

            number: "+998 (93) 444-11-77",

            location: t("samarkandLocation"),

            lat: 39.6542,
            lng: 66.9597,

            icon_one: "/Icon (4).svg",
            icon_two: "/Icon (5).svg",
            icon_three: "/Icon (6).svg",
        }

    ]

    const [selected, setSelected] = useState(locations[0])

    const filteredLocations =
        active === "All"
            ? locations
            : locations.filter(
                (item) => item.category === active
            )

    return (

        <motion.section
            className={s.locations}
            id='locations'

            initial={{ opacity: 0, y: 120 }}

            whileInView={{ opacity: 1, y: 0 }}

            transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
            }}

            viewport={{
                once: false,
                amount: 0.2
            }}
        >

            <motion.div
                className={s.text}

                initial={{ opacity: 0, y: 60 }}

                whileInView={{ opacity: 1, y: 0 }}

                transition={{
                    duration: 1,
                    delay: 0.2
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
                    {t("locationsTitle")}
                </h1>

                <p>
                    {t("locationsDescription")}
                </p>

            </motion.div>

            <motion.div
                className={s.btns}

                initial={{ opacity: 0, scale: 0.9 }}

                whileInView={{ opacity: 1, scale: 1 }}

                transition={{
                    duration: 0.7,
                    delay: 0.4
                }}

                viewport={{
                    once: false,
                    amount: 0.2
                }}
            >

                <button
                    className={`${s.btn} ${active === "All" ? s.active : ""}`}

                    onClick={() => setActive("All")}
                >
                    {t("all")}
                </button>

                <button
                    className={`${s.btn} ${active === "Regional" ? s.active : ""}`}

                    onClick={() => setActive("Regional")}
                >
                    {t("regional")}
                </button>

                <button
                    className={`${s.btn} ${active === "International" ? s.active : ""}`}

                    onClick={() => setActive("International")}
                >
                    {t("international")}
                </button>

            </motion.div>

            <div className={s.cards}>

                {filteredLocations.map((item, index) => (

                    <motion.div
                        className={s.card}

                        key={item.id}

                        initial={{
                            opacity: 0,
                            y: 100,
                            scale: 0.95
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1
                        }}

                        transition={{
                            duration: 0.9,
                            delay: index * 0.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}

                        viewport={{
                            once: false,
                            amount: 0.2
                        }}
                    >

                        <h5>
                            {item.subtitle}
                        </h5>

                        <h2>
                            {item.title}
                        </h2>

                        <p className={s.review}>
                            {item.review}
                        </p>

                        <div className={s.info}>

                            <div className={s.box}>

                                <img
                                    src={item.icon_one}
                                    alt=""
                                />

                                <span>
                                    {item.gmail}
                                </span>

                            </div>

                            <div className={s.box}>

                                <img
                                    src={item.icon_two}
                                    alt=""
                                />

                                <span>
                                    {item.number}
                                </span>

                            </div>

                            <div className={s.box}>

                                <img
                                    src={item.icon_three}
                                    alt=""
                                />

                                <span>
                                    {item.location}
                                </span>

                            </div>

                        </div>

                        <button
                            className={s.direction}

                            onClick={() => {

                                setSelected(item)

                                mapRef.current?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center"
                                })

                            }}
                        >
                            {t("getDirection")}
                        </button>

                    </motion.div>

                ))}

            </div>

            <div
                className={s.map}
                ref={mapRef}
            >

                <MapComponent selected={selected} />

            </div>

        </motion.section>
    )
}

export default Locations    