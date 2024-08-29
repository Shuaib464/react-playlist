import {logout} from '../../store/authSlice'
import authService from '../../appwrite/auth'
import {useDispatch} from 'react-redux'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout()
                        .then(() => { dispatch(logout()) })
                        .catch((error) => console.log('LogoutBtn :: error', error)
                        )
    }
  return (
    <button 
        className='inline-block px-6 py-2 duration-200 
      hover:bg-blue-100 rounded-full'
        onClick={() => {logoutHandler}}>
            LogoutBtn
    </button>
  )
}

export default LogoutBtn