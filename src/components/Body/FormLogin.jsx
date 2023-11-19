import React from "react";
import "./FormLogin.css";
function FormLogin() {
    return (
        <div>
           <form action="http://localhost:8080/apiToken/login" method="post">
                <div>
                    <label>
                        Username : 
                        <input type="text" name="username" id="username"/>
                    </label>
                </div>
                <div>
                    <label>
                        Password : 
                        <input type="password" name="password" id="password"/>
                    </label>
                </div>
                <input type="submit" value="Login" />
           </form>
        </div>
    );
}

export default FormLogin