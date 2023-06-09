import React, {useState ,useEffect} from 'react';
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from 'next/router'
import Link from "next/link";
import Header from '@/components/Header/Header';
import { LoginUser } from '../../utils/firebase/apiCalls/users';


const LoginPage = (props) => {

    const router = useRouter()
    const { locale, locales, asPath } = useRouter();

    const user = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        if (user) {
            router.push("/");
        }
    }, [user, router]);
    



    const [value, setValue] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
        validator.showMessages();
    };

    const rememberHandler = () => {
        setValue({...value, remember: !value.remember});
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));



    const submitForm = async(e) => {
        e.preventDefault();

        const response = await LoginUser(value);
console.log('RESPONSe' ,response)
        if (response.success) {
        if (validator.allValid()) {
            setValue({
                email: '',
                password: '',
                remember: false
            });
            validator.hideMessages();

           localStorage.setItem(
                "user",
                JSON.stringify({
                  ...response.data,
                  password: "",
                })
              );

              toast.success('You successfully Login on Site');
              router.push('/')



            // const userRegex = /^user+.*/gm;
            // const email = value.email;

           // if (email.match(userRegex)) {
              
           // }

        }
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };
    return (
        <>
      <Header/>
        <Grid
       
        
        className="loginWrapper">
            <Grid className="loginForm">
                <h2>
                    {/* Sign In */}
                    {locale === 'sv' ? 'logga in' : 'تسجيل الدخول'}
                </h2>
                {/* <p>Sign in to your account  {value.email} {value.password}</p> */}
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="E-mail"
                                value={value.email}
                                variant="outlined"
                                name="email"
                                label="E-mail"
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
                                type="password"
                                label="Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('password', value.password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formAction">
                                <FormControlLabel
                                    control={<Checkbox checked={value.remember} onChange={rememberHandler}/>}
                                    label={locale === 'sv' ? 'Kom ihåg mig' : 'تذكرني'}
                                />
                                {/* <Link href="/forgot-password">Forgot Password?</Link> */}
                            </Grid>
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtnTheme" type="submit">
                                    {/* Login */}
                                    {locale === 'sv' ? 'logga in' : 'تسجيل الدخول'}
                                </Button>
                            </Grid>
                            {/* <Grid className="loginWithSocial">
                                <Button className="facebook"><i className="fa fa-facebook"></i></Button>
                                <Button className="twitter"><i className="fa fa-twitter"></i></Button>
                                <Button className="linkedin"><i className="fa fa-linkedin"></i></Button>
                            </Grid> */}
                            <p className="noteHelp">
                                {/* Don't have an account?  */}
                              
                                {locale === 'sv' ? 'Du har inget konto' : 'لاتملك حساب'}
                            <Link href="/register">
                                {/* Create free account */}
                                {locale === 'sv' ?  'Skapa ett nytt konto' :"انشاء حساب جديد"}
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

export default LoginPage;