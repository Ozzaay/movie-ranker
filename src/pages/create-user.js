import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const user = {
    name: "",
    email: "",
    password: ""
  
}

function CreateForm(getAccounts) {
    const location = useLocation();
    const id = location.state ? location.state.id : '';
    const [userInput, setUserInput] = useState({
        name: user.name,
        email: user.email,
        password: user.password
    }) 
    const navigate = useNavigate();

    function editName(event) {
        setUserInput((prevState)=>{
            return {...prevState, name: event.target.value}
        });
    }

    function editEmail(event) {
        setUserInput((prevState)=>{
            return {...prevState, email: event.target.value}
        });
    }

    function editPassword(event) {
        setUserInput((prevState)=>{
            return {...prevState, password: event.target.value}
        });
    }

    function encrypt(userInput) {
        const username = userInput.name
        const email = userInput.email
        const password = userInput.password
        const strings = `${username}, ${email}, ${password},`
        const key = process.env.REACT_APP_SECURITY

        let result = '';
        for (let i = 0; i < strings.length; i++) {
            const charCode = strings.charCodeAt(i) ^ key.charCodeAt(i % key.length);
            result += String.fromCharCode(charCode);
        }
        return result;
    }

    async function submitHandler(event){
        event.preventDefault();
        
        
        const user = encrypt(userInput)

        const response = await fetch("http://localhost:5000/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userData: user
            }),
        });

        if (response.status === 200)
            alert("User Created")
            navigate("/admin", { state: { id: id } })
    }
    
    return(
        <div>
            <form onSubmit={submitHandler}>
                <label style={{color : "yellow"}}>Create User</label>
                <br></br>
                <input
                className="text-bar2"
                type="text"
                value={userInput.name}
                onChange={editName}
                placeholder="Name"
                >
                </input>
                <input
                className="text-bar2"
                type="text"
                value={userInput.email}
                onChange={editEmail}
                placeholder="Email"
                >
                </input>
                <input
                className="text-bar2"
                type="text"
                value={userInput.password}
                onChange={editPassword}
                placeholder="Password"
                >
                </input>
                <button className="fancy-button" type="submit">Add User</button>
            </form>
    </div>
    )
}

export default CreateForm