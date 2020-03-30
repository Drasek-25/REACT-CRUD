import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  //do this stuff when re-render happens
  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [props]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]
  const updateUser = (nameOrUserName, value) => {
    switch (nameOrUserName) {
      case 'name':
        const editing = { ...user }
        editing.name = value
        setUser(editing)
        break
      case 'username':
        const edit = { ...user }
        edit.username = value
        setUser(edit)
        break
      default:
        break
    }

  }

  function handleClick(e) {
    if (e.key === 'Enter') {
      props.editUser(user)
      props.setEditMode()
    }
  }

  return (
    <>
      <label>Name</label>
      <input
        type="text"
        name="name"
        onKeyDown={(e) => handleClick(e)}
        value={user ? user.name : ''}
        onChange={(e) => updateUser('name', e.target.value)}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        onKeyDown={(e) => handleClick(e)}
        value={user ? user.username : ''}
        onChange={(e) => updateUser('username', e.target.value)}
      />
      <button className='button'
        onClick={() => {
          props.editUser(user)
          props.setEditMode()
        }}>Update user</button>
      <button className="button muted-button" onClick={props.setEditMode}>
        Cancel
      </button>
    </>
  )
}

export default EditUserForm
