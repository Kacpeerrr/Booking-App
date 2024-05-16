import {  Link  } from 'react-router-dom'
import axios from '../../../axios'
import { useEffect, useState } from 'react'
import { objectToArrayWithId } from '../../../helpers/objects'
import useAuth from '../../../hooks/useAuth'

export default function MyHotels(props) {
	const [auth] = useAuth()
	const [hotels, setHotels] = useState([])
	const fetchHotels = async () => {
		try {
			const res = await axios.get('/hotels.json')
			const newHotel = objectToArrayWithId(res.data)
				.filter(hotel => hotel.user_id === auth.userId)
			setHotels(newHotel)
		} catch (ex) {
			console.log(ex.response)
		}
	}

	const deleteHandler = async id => {
		try {
			await axios.delete(`/hotels/${id}.json`)
			setHotels(hotels.filter(x => x.id !== id))
		} catch (ex) {
			console.log(ex.response)
		}
	}

	useEffect(() => {
		fetchHotels()
	}, [auth.userId])

	return (
		<div>
			{hotels ? (
				<table className='table'>
					<thead>
						<tr>
							<th>Nazwa</th>
							<th>Status</th>
							<th>Opcje</th>
						</tr>
					</thead>
					<tbody>
						{hotels.map(hotel => (
							<tr key={hotel.id}>
								<td className='ps-0 pt-4 pb-4'>{hotel.name}</td>
								<td className='ps-0 pt-4 pb-4'>
									{parseInt(hotel.status) === 1 ? (
										<span className='badge bg-success'>Aktywny</span>
									) : (
										<span className='badge bg-secondary'>Ukryty</span>
									)}
								</td>
								<td className='ps-0 pt-4 pb-4'>
									<Link
										to={`/profil/hotele/edytuj/${hotel.id}`}
										className='btn btn-warning'>
										Edytuj
									</Link>
									<button
										onClick={() => deleteHandler(hotel.id)}
										className='ms-2 btn btn-danger'>
										Usuń
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>Nie masz jeszcze żadnego hotelu</p>
			)}

			<Link
				to='dodaj'
				className='btn btn-primary'>
				Dodaj nowy hotel
			</Link>
		</div>
	)
}
