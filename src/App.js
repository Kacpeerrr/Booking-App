import { useReducer, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Searchbar from './components/UI/Searchbar/Searchbar'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'
import ThemeButton from './components/UI/ThemeButton/ThemeButton'
import ThemeContext from './context/themeContext'
import AuthContext from './context/authContext'
import ReducerContext from './context/reducerContext'
import InspiringQuote from './components/InspiringQuote/InspiringQuote'
import {reducer, initialState} from './reducer'
import Home from './pages/Home/Home'
import Hotel from './pages/Hotel/Hotel'
import Search from './pages/Search/Search'
import NotFound from './pages/404/404'
import Login from './pages/Auth/Login'
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import ErrorBoundary from './hoc/ErrorBoundary'
const Profile = lazy(() => import('./pages/Profile/Profile')) 

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)

	const header = (
		<Header>
			<InspiringQuote />
			<Searchbar />
			<ThemeButton />
		</Header>
	)

	const content = (
		<>
			<ErrorBoundary>
				<Routes>
					<Route 
						path='/profil/*'
						element={
						<AuthenticatedRoute isAuthenticated={state.isAuthenticated}>
						<Suspense fallback={<p>Ładowanie...</p>}>
						<Profile/>
						</Suspense>
						</AuthenticatedRoute>
					}
						/>
					<Route
						path='/hotele/:id'
						element={<Hotel/>}
					/>
					<Route
						path='/wyszukaj/:term?'
						element={<Search/>}
					/>

					<Route
						path='/zaloguj/'
						element={<Login/>}
					/>
					
					<Route
						path='/'
						element={<Home/>}
					/>

					<Route
						path='*'
						element={<NotFound/>}
					/>
				</Routes>
			</ErrorBoundary>
		</>
	)

	const menu = <Menu />
	const footer = <Footer />

	return (
		<Router>
			<AuthContext.Provider
				value={{
					isAuthenticated: state.isAuthenticated,
					login: () => dispatch({ type: 'login' }),
					logout: () => dispatch({ type: 'logout' }),
				}}>
				<ThemeContext.Provider
					value={{
						color: state.theme,
						changeTheme: () => dispatch({ type: 'change-theme' }),
					}}>
					<ReducerContext.Provider value={{
						state:state,
						dispatch:dispatch
					}}>
						<Layout
							header={header}
							menu={menu}
							content={content}
							footer={footer}
						/>
					
					</ReducerContext.Provider>
				</ThemeContext.Provider>
			</AuthContext.Provider>
		</Router>
	)
}

export default App
