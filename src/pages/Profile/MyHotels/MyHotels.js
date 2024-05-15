import { Route, Routes, Link, Outlet } from 'react-router-dom'
import AddHotel from './AddHotel/AddHotel'

export default function MyHotels(props) {
	return (
		<div>
			<div>
				<p>Nie masz jeszcze żadnego hotelu</p>
				<Link
					to='dodaj'
					className='btn btn-primary'>
					Dodaj nowy hotel
					</Link>
			</div>
			
		</div>
	)
}
