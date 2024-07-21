import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function SignInWithGoogle() {
    const [showToast, setShowToast] = useState(false);

    function googleLogin() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async (result) => {
            console.log(result);

            if (result.user) {
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000); // Auto-hide after 3 seconds
            }
            window.location.href = "/profile";
        }).catch((error) => {
            console.error("Error during sign-in:", error);
        });
    }

    return (
        <div>
            <p className="continue-p">-- Or continue with --</p>
            <div
                style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
                onClick={googleLogin}
            >
                <img src={require("../google.png")} width={"60%"} alt="Sign in with Google" />
            </div>

            {showToast && (
                <div className="toast show position-fixed top-0 end-0 m-3" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <strong className="me-auto">Notification</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        User Logged in Successfully!
                    </div>
                </div>
            )}
        </div>
    );
}

export default SignInWithGoogle;
