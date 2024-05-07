import { useParams } from "react-router-dom"

export default function Search(props) {

    const { term } = useParams()
    const searchHandler = term => {
	}

    return (
        <div>
            <h2>Wyniki dla frazy: "{term}"</h2>
        </div>
    )
}