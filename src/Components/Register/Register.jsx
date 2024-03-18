import { useNavigate } from 'react-router-dom'
import style from './Register.module.css'


export default function Register() {
    
    let navigate = useNavigate()
    
    return <>

<div className='bg-body-secondary'>

<div className="container w-75">
            <div className='row vh-100 align-items-center gx-0'>

                <div className='col-md-6'>
                    <div className={style.registerLeftTitle}>
                    <h1 className={`${style.title} text-primary fw-bold`}>SocialApp</h1>
                    <p className='ms-5 ps-5 fs-4'>Connect with friends and the world<br/> around you on socialApp</p>
                    </div>
                </div>

               <div className="col-md-6">
               <form className={`${style.registerForm} text-center bg-body-tertiary p-5 rounded-2`}>
                     
                    <input type='text' name='name' className='form-control' placeholder='User Name' />
                    <input type='email' name='email' className='form-control mt-3' placeholder='Email' />
                    <input type='password' name='password' className='form-control mt-3' placeholder='Password' />
                    <input type='password' name='repassword' className='form-control mt-3' placeholder='Re-Password' />

                    <button type='submit' className='form-control bg-primary text-light mt-4 mb-2'>Sign Up</button>
       
                    <button onClick={() => navigate('/')} className={`${style.loginBtn} px-4 border-0 py-2 rounded-2 text-light mt-3 mb-2`}>Login into Account</button>
                </form>

              
               </div>

            </div>


        </div>

</div>


    </>
}