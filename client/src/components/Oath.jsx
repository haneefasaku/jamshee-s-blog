import { Button } from 'flowbite-react'
import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'
import { app } from '../firebase'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'


function Oath() {
    const auth = getAuth(app)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleGoogleClick = async  () => {
        const Provider = new GoogleAuthProvider()
        Provider.setCustomParameters({prompt: 'select_account' })
        try {
            const resultFromGoogle = await signInWithPopup(auth, Provider)
            const googleData = {
                name:resultFromGoogle.user.displayName,
                email:resultFromGoogle.user.email,
                googlePhotoUrl:resultFromGoogle.user.photoURL
            }
            const response = await axios.post('http://localhost:5252/auth/google',googleData)
            
            if(response.status === 200){
                dispatch(signInSuccess(response.data))
                navigate('/')
            }
            }
            catch(error){
                console.log(error);
                
            }
    }

  return (
    <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
        <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
        Continue with Google
    </Button>
  )
}

export default Oath