import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);
//const provider = new auth.GoogleAuthProvider();

export default async function signGoogle() {
    let result = null,
        error = null;
const provider = new auth.GoogleAuthProvider();
    try {
        result = await auth.signInWithPopup(provider);
        console.log(result);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
