import {useState, useEffect} from "react"

function ListIteam (){
    const [cards, setCard] = useState([])
    useEffect(() => {

        fetch("http://localhost:8000/shops")
            .then((res) => res.json())
            .then((card) => setCard(card));

    }, [])


    return cards
}

export default ListIteam