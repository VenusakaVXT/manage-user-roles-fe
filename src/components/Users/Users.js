import './Users.scss'

const Users = (props) => {

    return (
        <div className='manage-user-container'>
            <div className='user-header'>
                <div className='title'>
                    <h3>Table Users</h3>
                </div>
                <div className='actions'>
                    <button className='btn general-btn'>Refesh</button>
                    <button className='btn general-btn'>Add new user</button>
                </div>
            </div>
        </div>
    )
}

export default Users