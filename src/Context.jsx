import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [isBurger, setIsBurger] = useState(false);

    const handleBurger = () => setIsBurger((prev) => !prev);
    const [properties, setCards] = useState([]);

    const [cardId, setCardId] = useState(null);

    const [isAdmin, setIsAdmin] = useState(false);

    const adminPassword = "935391813";

    const urlServer = "http://localhost:3001/properties";

    useEffect(() => {

        const savedAdmin =
            sessionStorage.getItem("isAdmin");

        if (savedAdmin === "true") {

            setIsAdmin(true);

        }

    }, []);
    const [isDark, setIsDark] = useState(false);
    const handleDark = () => {
        setIsDark((prev) => !prev);
    };

    const handleIsAdmin = () => {

        const password = prompt("Введите пароль");

        if (password === adminPassword) {

            setIsAdmin(true);

            sessionStorage.setItem("isAdmin", "true");

            toast.success("Вы вошли как администратор");

        } else {

            toast.error("Неверный пароль");

        }
    };

    const logoutAdmin = () => {

        setIsAdmin(false);

        sessionStorage.removeItem("isAdmin");

        toast.success("Вы вышли из режима администратора");
    };

    const getCards = async () => {

        try {

            const response = await axios.get(urlServer);

            setCards(response.data);

        } catch (error) {

            console.log(error);

            toast.error("Ошибка загрузки");
        }
    };

    const getCardId = async (id) => {

        try {

            const response =
                await axios.get(`${urlServer}/${id}`);

            setCardId(response.data);

        } catch (error) {

            console.log(error);

            toast.error("Карточка не найдена");
        }
    };

    const deleteCard = async (id) => {

        try {

            await axios.delete(`${urlServer}/${id}`);

            getCards();

            toast.success("Карточка удалена");

        } catch (error) {

            console.log(error);

            toast.error("Ошибка удаления");
        }
    };

    const createCard = async (data) => {

        try {

            const response = await axios.get(urlServer);

            const properties = response.data;

            const lastId = properties.length
                ? Math.max(
                    ...properties.map(
                        item => Number(item.id) || 0
                    )
                )
                : 0;

            const newCard = {

                id: String(lastId + 1),

                title: data.title,
                description: data.description,
                image: data.image,

                bedrooms: data.bedrooms,
                bathrooms: data.bathrooms,

                type: data.type,
                price: data.price,

                link: data.link,

                bedroomIcon: "/BACKGROUND_2.svg",
                bathroomIcon: "/Icon.svg",
                typeIcon: "/Icon (1).svg",
            };

            await axios.post(
                urlServer,
                newCard
            );

            getCards();

            console.log("SUCCESS");

        } catch (error) {

            console.log(error);
        }
    };

    const changeCard = async (data, id) => {

        try {

            await axios.put(
                `${urlServer}/${id}`,
                data
            );

            getCards();

            toast.success("Карточка обновлена");

        } catch (error) {

            console.log(error);

            toast.error("Ошибка обновления");
        }
    };

    return (

        <MyContext.Provider
            value={{
                properties,
                getCards,

                createCard,
                deleteCard,
                changeCard,

                getCardId,
                cardId,
                setCardId,

                isAdmin,
                handleIsAdmin,
                logoutAdmin,
                isDark,
                handleDark,
                isBurger, handleBurger,
            }}
        >

            {children}

        </MyContext.Provider>
    );
};