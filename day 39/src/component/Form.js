import {useState} from 'react';

function Form(){
    let [name,setName]=useState('Guest');
    let [age,setAge]=useState(0);
    return(
        <div className='form-group'>
            <u><h1>Login form</h1></u>
            <div className='col-sm'>
                <form onSubmit={(e)=>e.preventDefault()}>
                    Username:
                    <input type='text' name='n1' className='form-control' onChange={(e)=>e.target.name=='n1'?setName(e.target.value):null}></input><br/>
                    Age:
                    <input type='number' name='n2' className='form-control' onChange={(e)=>e.target.name=='n2'?setAge(e.target.value):null}></input><br/>
                    <button type='submit' className='btn btn-primary'>Login</button><br/>
                    <div>
                        <br/><h4>Hello {name} ! Your age is {age} !!</h4>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Form;