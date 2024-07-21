import React,{useState,useEffect} from "react";
import { auth,db } from "./firebase";
import { doc,getDoc } from "firebase/firestore";
import { Toast } from "bootstrap";

function Profile(){
    const [userDetails, setUserDetails] = useState(null);
    const fetchUserData = async()  =>{
        auth.onAuthStateChanged(async(user) =>{
            console.log(user);
            setUserDetails(user)
            // const docRef = doc(db, "Users", user.uid);
            // const docSnap = await getDoc(docRef);
            // if(docSnap.exists()){
            //     setUserDetails(docSnap.data());
            //     console.log(docSnap.data());
            // }
            // else{
            //     console.log("User is not logged in");
            // }
        });
    }

    useEffect(()=>{
        fetchUserData();
    },[]);

async function handleLogout(){
    try{
        await auth.signOut();
        window.location.href = "/Login";
        console.log("User logged out Successfully!")
    }
    catch(error){
        console.log("Error loggin out:", error.message);
    }
}


return(
<div>
{userDetails?(
    <>
    <div style={{display:"flex", justifyContent:"center"}}>
        <img 
            src={userDetails.photoURL}
            width={"40%"}
            style={{borderRadius:"50%"}}
        />
    </div>



    <h3>Welcome {userDetails.firstName}</h3>
    <div>
        <p>Email: {userDetails.email}</p>
        <p>First Name: {userDetails.firstName}</p>
        <p>Last Name: {userDetails.lastName}</p>
    </div>
    <button className="btn btn-primary"  onClick={handleLogout}>
        Logout
    </button>
    </>

):(
    <>
    <p>Loading ...</p>
    </>
)
}

</div>
)


}
export default Profile;