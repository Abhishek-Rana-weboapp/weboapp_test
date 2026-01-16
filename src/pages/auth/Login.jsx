import { useNavigate } from 'react-router-dom';
import Button from '../../components/buttons/Button';
import { useAuth } from '../../context/AuthContext';
import { axiosInstance } from '../../api/axios';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod';
import { useEffect } from 'react';

const loginSchema = z.object({
    email:z.string().email("Please enter a valid email"),
    password:z.string().min(1, "Password must be atleast 8 characters")
})

const Login = () => {
    const navigate = useNavigate();
    const {accessToken, setAccessToken} = useAuth();
    
    const {
       register,
       formState:{
        errors
       },
       setFocus,
       handleSubmit
    } = useForm({
        resolver:zodResolver(loginSchema),defaultValues:{
            email: "",
            password:""
        }
    })

   useEffect(() => {
    if (accessToken) {
       navigate("/admin");
    }
   }, [accessToken, navigate]);


   useEffect(()=>{
      setFocus("email")
   },[])


    const onSubmit = async(data)=>{
        try {
            const res = await axiosInstance.post("/login/",data );
            if(res.status === 200){
              console.log(res.data.access);
                setAccessToken(res.data.access);
                sessionStorage.setItem("access_token", res.data.access);
                navigate("/admin")
            }
        } catch (error) {
            console.error("Error while logging in:", error.message)
        }
    }

    

    return (
      <div className='max-w-xl mx-auto h-[60vh] content-center'>
        <div className="p-4">
            <h1 className="text-3xl font-bold text-primary-800 mb-8">
              Admin Login
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
              <label className='flex flex-col items-start w-full'>
                Email
                <input {...register("email")} className='p-2 border border-neutral-300 rounded-md w-full' placeholder='Email' type="text" />
              {errors.email && <span className='text-red-500 text-xs text-start'>{errors.email.message}</span>}
              </label>
              <label className='flex flex-col items-start w-full'>
                Password
                <input {...register("password")} className='p-2 border border-neutral-300 rounded-md w-full' placeholder='Password' type="text" />
              {errors.password && <span className='text-red-500 text-xs text-start'>{errors.password.message}</span>}
              </label>


              <Button className={"mt-4"}>Login</Button>
            </form>
          </div>
      </div>
    );
  };

export default Login;
