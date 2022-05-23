import logo from './logo.svg';
import './App.css';

function App() {
  let fruit=['apple','mango','banana','coconut'];
  return(
    <div>
      <h1>Fruits:-</h1>
      <ul>
        {
          fruit.map((f,i)=>
            <li key={i}>{f}</li>
          )
        }
      </ul>
      
    </div>
  )
}
export function User(){
  let data=[
    {name:'Sachin', age:35,gender:'Male'},
    {name:'Sourav',age:36,gender:'Male'},
    {name:'Jane',age:25,gender:'Female'},
    {name:'Alex',age:28,gender:'Male'}
  ];
  return(
    <div className="container-fluid">
      <h1>Details</h1>
      <table className='table'>
        <thead className='thead-light'>
          <tr>
            <th>Sl.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((v,i)=><tr key={i}>
              <td>{i+1}</td><td>{v.name}</td><td>{v.age}</td><td>{v.gender}</td><td><button className='btn btn-danger'>Delete</button></td>
            </tr>
            
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;
