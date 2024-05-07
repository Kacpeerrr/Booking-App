import { Route, Routes, NavLink, Outlet } from "react-router-dom"
import ProfileDetails from "./ProfileDetails/ProfileDetails"
import MyHotels from "./MyHotels/MyHotels"

export default function Profile(props) {

	return (
		<div className='card'>
			<div className='card-header'>
				<h2>Mój profil</h2>
			</div>
			<div className='card-body'>
                    <ul className='nav nav-tabs'>
                        <li className='nav-item'>
                            <NavLink to='' className='nav-link'>
                                Profil
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="hotele" className='nav-link'>
                                Hotele
                            </NavLink>
                        </li>
                    </ul>
                <div className="pt-4">
                    <Outlet/>
                    <Routes>
                        <Route
                            path='hotele'
                            element={<MyHotels/>}
                        />
                        <Route
                            path=''
                            element={<ProfileDetails/>}
                        />
                    </Routes>
                </div>
			</div>
		</div>
	)
}
