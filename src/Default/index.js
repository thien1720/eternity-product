import { useState, useEffect, useMemo, useContext, createContext } from "react"

import Footer from "~/components/Footer";
import Header from "~/components/Header"

export const themContext = createContext()


function DefaultLayout({ children }) {

    const [cards, setCard] = useState(() => {
        const storeComment = JSON.parse(localStorage.getItem('iteam'))

        return storeComment ?? []
    })

    const [popHeart, setPopHeart] = useState(false)
    const closeHeart = () => {
        setPopHeart(false)
    }
    const [heart, setHeart] = useState(false)

    function handleShowHeart() {
        setHeart(!heart)
    }
    const [filter, setFilter] = useState(cards)
    const [load, setLoad] = useState(false)
    let componentMount = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoad(true);
            const reponse = await fetch("https://api-rn.onrender.com/project")

            if (componentMount) {
                setCard(await reponse.clone().json())
                setFilter(await reponse.json())
                setLoad(false)
            }

            return () => {
                componentMount = false
            }
        }


        getProducts()


    }, [])

    function compareValues(key, order = 'asc') {
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }

            const varA = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        };
    }


    function handleFilterCoin(name, sort) {
        const sortCoin = cards.sort(compareValues(name, sort))
        return setFilter(() => {
            const localStore = JSON.stringify(sortCoin)
            localStorage.setItem('iteam', localStore)
            return sortCoin
        })
    }

    const listValue = {
        handleFilterCoin,
        setLoad,
        setFilter,
        closeHeart,
        setPopHeart,
        handleShowHeart,
        setHeart,
        heart,
        filter,
        load,
        cards,
        popHeart,
    }

    return <div className="">
        <themContext.Provider value={listValue}>
            <Header />
            <div>
                {children}
            </div>
            <Footer />

        </themContext.Provider>
    </div>
}

export default DefaultLayout;