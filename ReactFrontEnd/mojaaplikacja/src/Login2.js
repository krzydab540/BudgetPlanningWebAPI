import { useState } from 'react';


/*const LoginComponent = () => {
   
    const [credentials, setCredentials] = useState({
        name: '',
        password: ''
    });

    const onChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => {
        setCredentials({...credentials, [name]: value})
    };

    const onSubmit = (event?: React.FormEvent) => {
        if (event) {
            event.preventDefault();
        }

        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(credentials)
        })
            .then(r => r.json())
            .then(token => login(token))
 
   }; 
    
     <form onSubmit={onSubmit}>
        <input name="name"
               value={credentials.name}
               onChange={onChange}/>
        <input name="password"
               value={credentials.password}
               onChange={onChange}/>
    </form>
};
*/

function LoginComponent(){

    
}

export default LoginComponent 