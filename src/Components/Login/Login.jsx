import { useNavigate } from 'react-router-dom'
import style from './Login.module.css'


export default function Login() {
    
    let navigate = useNavigate()
    
    return <>

<div className='bg-body-secondary'>

<div className="container w-75">
            <div className='row vh-100 align-items-center gx-0'>

                <div className='col-md-6'>
                    <div className={style.loginLeftTitle}>
                    <h1 className={`${style.title} text-primary fw-bold`}>SocialApp</h1>
                    <p className='ms-5 ps-5 fs-4'>Connect with friends and the world<br/> around you on socialApp</p>
                    </div>
                </div>

               <div className="col-md-6">
               <form className={`${style.loginForm} text-center bg-body-tertiary p-5 rounded-2`}>
                    <input type='email' name='email' className='form-control' placeholder='Email' />
                    <input type='password' name='password' className='form-control mt-3' placeholder='Password' />

                    <button onClick={() => navigate('home')} type='submit' className='form-control bg-primary text-light mt-4 mb-2'>Log in</button>
                    <span className='text-primary d-block' role='button'>Forget Password?</span>

                    <button onClick={() => navigate('register')} className={`${style.registerBtn} px-4 border-0 py-2 rounded-2 text-light mt-3 mb-2`}>Create a new account</button>
                </form>

              
               </div>

            </div>


        </div>

</div>


    </>
}
