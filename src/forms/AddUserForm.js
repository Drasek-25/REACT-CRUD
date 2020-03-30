import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [user, setUser] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	function handleClick(e) {
		if (e.key === 'Enter') {
			props.addUser(user)
			setUser(initialFormState)
		}
	}

	return (
		<>
			<label>Name</label>
			<input
				type="text"
				name="name"
				onKeyDown={handleClick}
				value={user.name}
				onChange={handleInputChange}
			/>
			<label>Username</label>
			<input
				type="text"
				name="username"
				onKeyDown={(e) => handleClick(e)}
				value={user.username}
				onChange={handleInputChange}
			/>
			<button onClick={() => { props.addUser(user); setUser(initialFormState) }}>Add new user</button>
		</>
	)
}

export default AddUserForm
