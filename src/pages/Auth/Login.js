export default function Login(props) {
	return (
		<div>
			<h2>Logowanie</h2>
			<form>
				<div className='form-group'>
					<label className='mt-2'>Email</label>
					<input
						type='email'
						className='form-control'
					/>
				</div>
				<div className='form-group'>
					<label className='mt-3'>Hasło</label>
					<input
						type='password'
						className='form-control'
					/>
				</div>
				<button className='btn btn-primary mt-4'>Zapisz</button>
			</form>
		</div>
	)
}
