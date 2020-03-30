import React, { useState } from 'react'
import AddUserForm from './forms/AddUserForm'
import UserTable from './tables/UserTable'
import EditUserForm from './forms/EditUserForm'

/**
 * Goals:
 *
 * > Add Delete and Edit Button to each user item
 * > Send functions from 'App' in order to perform full CRUD
 *
 * Step 1: Implement Delete
 * Step 2: Implement Edit (EditUserForm is provided as a template. A good approach to this is to have user Edit buttons send a notification to App when they are clicked, so App can conditionally render either the Add or Edit form.)
 *
 */

const App = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'Tania', username: 'floppydiskette' },
		{ id: 2, name: 'Craig', username: 'siliconeidolon' },
		{ id: 3, name: 'Ben', username: 'benisphere' },
	]

	// Setting state
	const [users, setUsers] = useState(usersData)
	const [editMode, setMode] = useState(false);
	const [currentUser, setCurrentUser] = useState(null);

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([...users, user])
	}

	const deleteUser = user => {
		setUsers([...users].filter(curUser => curUser.id !== user.id))
	}

	const setEditMode = curUser => {
		setMode(!editMode)
		if (curUser !== undefined) {
			editMode === false ? setCurrentUser(curUser) : setCurrentUser(null)
		}
	}

	const editUser = user => {
		setUsers([...users].map(obj => {
			if (obj.id === user.id) {
				obj.name = user.name;
				obj.username = user.username
			}
			return obj
		}))
	}

	return (
		<div className="container">
			<h1>CRUD App with Hooks</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editMode === false
						? <>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</>
						: <>
							<h2>Edit user</h2>
							<EditUserForm
								user={users}
								editUser={editUser}
								currentUser={currentUser}
								setEditMode={setEditMode}
							/>
						</>
					}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} deleteUser={deleteUser} setEditMode={setEditMode} />
				</div>
			</div>
		</div>
	)
}

export default App
