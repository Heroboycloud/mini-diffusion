// Next JS related
import Head from 'next/head';
import { useRouter } from 'next/router';

// Firebase related

import { useAuthState } from 'react-firebase-hooks/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth, firebase } from './config/firebaseApp';

import { uiConfig } from './config/firebaseAuthConfig';

/* Components
import Logo from '../components/elements/Logo';
import Card from '../components/elements/Card';
import Error from '../components/elements/Error';
import Loading from '../components/elements/Loading';
*/
/* Styles
import LoginStyle from '../styles/Login.module.css';
*/

export default function Login() {
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();

    if (loading) return "Loading. "
    else if (error) return "error.."

    else if (user) {
        // user is already logged in, redirect to home page
        router.push('/');
    }

    const authConfig = uiConfig(firebase);

    return (
        <>
            <Head>
                <title>CodeBlog | LogIn</title>
            </Head>
            <div className={LoginStyle.login}>
                <div>
                    <div className={LoginStyle.loginTitleContainer}>
                        <h1>Log In to</h1>
                        <Logo />
                    </div>
                    <StyledFirebaseAuth uiConfig={authConfig} firebaseAuth={auth} />
                </div>
            </div>
        </>
    )
}
