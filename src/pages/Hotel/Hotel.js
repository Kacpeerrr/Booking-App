import {  useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon"
import useWebsiteTitle from "../../hooks/useWebsiteTitle"

function Hotel(props) {
    const { id } = useParams()
    const [hotel, setHotel] = useState(null)
    const [loading, setLoading] = useState(true)
    const setTitle = useWebsiteTitle()

    const fetchHotel = () => {
        setHotel(
            {
                id: 2,
                name: 'Dębowy',
                city: 'Lublin',
                rating: 8.8,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet dolor eu nisi pretium auctor.',
                image: '',
            },
        )
        setTitle("Hotel dębowy")
        setLoading(false)
    }

    useEffect(() => {
        setTimeout(() => {
            fetchHotel()
        }, 500)
    }, [])


	return loading ? <LoadingIcon /> : (
		<>
			<h1>Hotel: {hotel.name} </h1>
		</>
	)
}

export default Hotel