import { useState, useEffect } from "react"
import { login } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../api/cookie";

type propsField = {
    description: string,
    type: string,
    placeholder: string
    onChange?: (event: any) => void;
}

type propsHeader = {
    title: string,
    onClick?: (event: any) => void;
}

const LoginForm = () => {
    const history = useNavigate()

    useEffect( () => {
        if(getCookie("user")) {
            history("/certificates")
        }
    }, [])

    return(
        <div id="loginform">
            <div className="loginImage">
                <img src="/GeekGuy.png" width="300" style={{position: 'relative'}} alt="login"/>
            </div>
            <FormHeader title="Login" />
            <Form />
        </div>
    )
}

const FormHeader = (props: propsHeader)  => (
    <h2 id="headerTitle">{props.title}</h2>
);

const Form = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(null);
    const history = useNavigate()

    const handleSubmit = (event:any) => {
        const response = login({ dni: username, password }) as any;
        response.then( (data:any) => {
            history("/certificates")
        }).catch((data:any) => {
            setError(error)
            console.log(data)
        })
        
    }


    return (
      <div>
        {
            error && 
                <span>{error}</span>
            
        }
        <FormInput
          description="ID"
          placeholder="Enter your ID"
          type="text"
          onChange={(event:any) => setUsername(event.target.value)}
        />
        <FormInput
          description="Password"
          placeholder="Enter your password"
          type="password"
          onChange={(event:any) => setPassword(event.target.value)}
        />
        <FormButton title="Log in" onClick={handleSubmit}/>
      </div>
    );
};
 
const FormButton = (props: propsHeader) => (
    <div id="button" className="row">
        <button onClick={props.onClick}>{props.title}</button>
    </div>
);
 
const FormInput = (props: propsField) => (
    <div className="row">
        <label>{props.description}</label>
        <input type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
    </div>  
);

export default LoginForm;
