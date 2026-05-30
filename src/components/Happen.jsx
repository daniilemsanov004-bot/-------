import s from './Happen.module.css'
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import axios from "axios"
import { toast } from "react-toastify"
import { useTranslation } from 'react-i18next'

const Happen = () => {

    const { t } = useTranslation()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const token = import.meta.env.VITE_TOKEN;
    const chatId = import.meta.env.VITE_CHAT_ID;

    const sendTelegram = async (data) => {

        const message = `
FirstName: ${data.firstname}
LastName: ${data.secondname}
Email: ${data.email}
Description: ${data.description}
`;

        try {

            await axios.post(
                `https://api.telegram.org/bot${token}/sendMessage`,
                {
                    chat_id: chatId,
                    text: message,
                }
            );

            toast.success(t("messageSent"));

        } catch (error) {

            console.log(error);
            toast.error(t("error"));

        }
    };

    const onSubmit = (data) => {
        sendTelegram(data);
    };

    return (
        <section className={s.happen} id='happen'>

            <motion.div
                className={s.text}

                initial={{
                    opacity: 0,
                    y: 40
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                transition={{
                    duration: 0.8
                }}

                viewport={{
                    amount: 0.2
                }}
            >

                <img
                    src="/Abstract Design.svg"
                    alt=""
                    className={s.logo}
                />

                <h1>
                    {t("happenTitle")}
                </h1>

                <div className={s.titles}>
                    <p>
                        {t("happenDescription")}
                    </p>
                </div>

            </motion.div>

            <motion.form
                className={s.requestForm}

                onSubmit={handleSubmit(onSubmit)}

                initial={{
                    opacity: 0,
                    y: 80
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                transition={{
                    duration: 0.9
                }}

                viewport={{
                    amount: 0.2
                }}
            >

                <motion.div
                    className={s.block}

                    initial={{
                        opacity: 0
                    }}

                    whileInView={{
                        opacity: 1
                    }}

                    transition={{
                        staggerChildren: 0.15
                    }}
                >

                    <motion.div

                        initial={{
                            opacity: 0,
                            y: 40
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            duration: 0.6
                        }}

                        whileHover={{
                            y: -4
                        }}
                    >

                        <input
                            className={s.inp}
                            type="text"
                            placeholder={t("enterFirstName")}

                            {...register("firstname", {
                                required: {
                                    value: true,
                                    message: t("firstNameRequired"),
                                },
                            })}
                        />

                        {errors.firstname && (
                            <span className={s.error}>
                                {errors.firstname.message}
                            </span>
                        )}

                    </motion.div>

                    <motion.div

                        initial={{
                            opacity: 0,
                            y: 40
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            duration: 0.7
                        }}

                        whileHover={{
                            y: -4
                        }}
                    >

                        <input
                            className={s.inp}
                            type="text"
                            placeholder={t("enterLastName")}

                            {...register("secondname", {
                                required: {
                                    value: true,
                                    message: t("lastNameRequired"),
                                },
                            })}
                        />

                        {errors.secondname && (
                            <span className={s.error}>
                                {errors.secondname.message}
                            </span>
                        )}

                    </motion.div>

                    <motion.div

                        initial={{
                            opacity: 0,
                            y: 40
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            duration: 0.8
                        }}

                        whileHover={{
                            y: -4
                        }}
                    >

                        <input
                            className={s.inp}
                            type="email"
                            placeholder={t("enterYourEmail")}

                            {...register("email", {
                                required: {
                                    value: true,
                                    message: t("emailRequired"),
                                },
                            })}
                        />

                        {errors.email && (
                            <span className={s.error}>
                                {errors.email.message}
                            </span>
                        )}

                    </motion.div>

                </motion.div>

                <motion.textarea

                    className={s.inp}

                    initial={{
                        opacity: 0,
                        y: 40
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.7
                    }}

                    whileFocus={{
                        scale: 1.01
                    }}

                    style={{ height: "122px" }}

                    rows="5"

                    placeholder={t("enterMessage")}

                    {...register("description")}
                />

                {errors.checkbox && (
                    <span className={s.error}>
                        {errors.checkbox.message}
                    </span>
                )}

                <div className={s.box}>

                    <input
                        id="check"
                        type="checkbox"

                        {...register("checkbox", {
                            required: {
                                value: true,
                                message: t("checkboxRequired"),
                            },
                        })}
                    />

                    <label
                        htmlFor="check"
                        className={s.policy}
                    >
                        <p>{t("agreePolicy")}</p>
                    </label>

                </div>

                <motion.button

                    className={s.btn}

                    type="submit"

                    whileHover={{
                        scale: 1.05,
                        y: -3
                    }}

                    whileTap={{
                        scale: 0.95
                    }}
                >
                    {t("sendMessage")}
                </motion.button>

            </motion.form>

        </section>
    )
}

export default Happen