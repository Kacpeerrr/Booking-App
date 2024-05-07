import { useContext, useEffect, useState } from 'react'
import LastHotel from '../../components/Hotels/LastHotel/LastHotel'
import useStateStorage from '../../hooks/useStateStorage'
import useWebsiteTitle from '../../hooks/useWebsiteTitle'
import BestHotel from '../../components/Hotels/BestHotel/BestHotel'
import Hotels from '../../components/Hotels/Hotels'
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon'

const backendHotels = [
	{
		id: 1,
		name: 'Pod akacjami',
		city: 'Warszawa',
		rating: 8.3,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet dolor eu nisi pretium auctor.',
		image: '',
	},
	{
		id: 2,
		name: 'Dębowy',
		city: 'Lublin',
		rating: 8.8,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet dolor eu nisi pretium auctor.',
		image: '',
	},
]

export default function Home(props) {
    const [lastHotel, setLastHotel] = useStateStorage('last-hotel', null)

    //ustawiamy stan loading
    const [loading, setLoading] = useState(true)
    //ustawiamy stan hotele
    const [hotels, setHotels] = useState([])

    
	useWebsiteTitle('Strona główna')

	const getBestHotel = () => {
		if (hotels.length < 2) {
			return null
		} else {
			return hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0]
		}
	}

	const openHotel = hotel => {
		setLastHotel(hotel)
	}

	const removeLastHotel = () => {
		setLastHotel(null)
	}

	useEffect(() => {
		setTimeout(() => {
            setHotels(backendHotels)
			setLoading(false)
		}, 1000)
	}, [])

	return loading ? <LoadingIcon /> : (
		<>
			{lastHotel ? (
				<LastHotel
					{...lastHotel}
					onRemove={removeLastHotel}
				/>
			) : null}

			{getBestHotel() ? <BestHotel getHotel={getBestHotel} /> : null}
			<Hotels
				onOpen={openHotel}
				hotels={hotels}
			/>
		</>
	)
}
