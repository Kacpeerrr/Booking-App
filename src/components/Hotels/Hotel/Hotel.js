import React from 'react'
import styles from './Hotel.module.css'
import hotelImg from '../../../assets/images/hotel.jpg'

function Hotel() {
	return (
		<div className={`card ${styles.hotel}`}>
			<div className='card-body'>
				<div className='row'>
					<div className='col-4'>
						{/*Dołączamy zdjęcie za pomocą zmiennej*/}
						<img
							src={hotelImg}
							alt=''
							className='img-fluid img-thumbnail'
						/>
					</div>
					<div className='col-8'>
						<div className='row'>
							<div className='col'>
								<p className={styles.title}>Pensjonat</p>
								<span className="badge text-bg-light">Warszawa</span>
							</div>
							<div className='col text-end'>
								<h5>Ocena: 8.3</h5>
                                <a href='#section' className='btn btn-primary mt-2 px-4 float-end'>
                                Pokaż
                                </a>
							</div>
						</div>
					</div>
					<div className='col-12'>
						<p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet dolor eu nisi pretium auctor.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hotel
