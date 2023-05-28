import React, {useState ,useEffect} from 'react';
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from 'next/router'
import Link from "next/link";
import { CreateUser } from '../../utils/firebase/apiCalls/users';
import Header from '@/components/Header/Header';

const SignUpPage = (props) => {

    const router = useRouter()
    const { locale, locales, asPath } = useRouter();
   
    const [value, setValue] = useState({
        email: '',
        full_name: '',
        password: '',
        confirm_password: '',
    });


// ----redirect user if already registered----
const user = JSON.parse(localStorage.getItem("user"));
useEffect(() => {
    if (user) {
        router.push("/");
    }
}, [user, router]);





    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
        validator.showMessages();
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));


    const submitForm = async(e) => {
        e.preventDefault();


        if (validator.allValid()) {

        const response = await CreateUser({
           ...value,
            role: "user",
          });

        




          if (response.success) {
            toast.success(response.message);
            
            // if (validator.allValid()) {
                setValue({
                    email: '',
                    full_name: '',
                    password: '',
                    confirm_password: '',
                });
                validator.hideMessages();
                toast.success('Registration Complete successfully!');
                router.push('/login')



        //   }



    
          

        } 
        
    }
        
        
        else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };
    return (
        <>
        <Header/>
        <Grid className="loginWrapper">

            <Grid className="loginForm">
                <h2>
                {locale === 'sv' ? 'Skapa ett konto' : 'انشاء حساب'}
                    {/* Signup */}

                </h2>
                <p>
                    {/* Signup your account */}
                    {locale === 'sv' ? '' : ''}
                </p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Full Name"
                                value={value.full_name}
                                variant="outlined"
                                name= "full_name"
                                label=  {locale === 'sv' ? 'namnet' : 'الاسم'}  //"Name"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('full name', value.full_name, 'required|alpha')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="E-mail"
                                value={value.email}
                                variant="outlined"
                                name="email"
                                label= {locale === 'sv' ? 'E-post' : 'البريد'} //"E-mail"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('email', value.email, 'required|email')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Password"
                                value={value.password}
                                variant="outlined"
                                name="password"
                                label=  {locale === 'sv' ? 'Lösenord' : 'كلمة السر'} //"Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('password', value.password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Confirm Password"
                                value={value.password}
                                variant="outlined"
                                name="confirm_password"
                                label= {locale === 'sv' ? 'lösenordsbekräftelse' : ' تأكيد كلمة السر'}  //"Confirm Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('confirm password', value.confirm_password, `in:${value.password}`)}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtn cBtnLarge cBtnTheme" type="submit">
                                    {/* Sign Up */}
                                    {locale === 'sv' ? 'Skapa ett konto' : 'انشاء حساب'}
                                    </Button>
                            </Grid>
                            {/* <Grid className="loginWithSocial">
                                <Button className="facebook"><i className="fa fa-facebook"></i></Button>
                                <Button className="twitter"><i className="fa fa-twitter"></i></Button>
                                <Button className="linkedin"><i className="fa fa-linkedin"></i></Button>
                            </Grid> */}
                            <p className="noteHelp">

                                {/* Already have an account?  */}
                                {locale === 'sv' ? 'Har du redan skapat ett konto?' : 'هل انشأت حساب مسبقاً'}
                                

                                <Link href="/login">
                                {locale === 'sv' ? 'Logga in' : 'تسجيل دخول'}
                                    {/* Return to Sign In */}

                                    
                                    </Link>
                            </p>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
        </>
    )
};

export default SignUpPage;