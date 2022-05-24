import './App.css';
import {useState} from "react";
import Axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage
    }).then ( () => {
      console.log("Success");
    })
  }

  const getEmployee = () => {
    Axios.get("http://localhost:3001/employee").then( (respnse) => {
      setEmployeeList(respnse.data);
    })
  }


  
  return (
    <div className="App">
      
      <div className='information'>
        <label>Name:</label>
        <input type="text" required
        onChange={(event) => {
          setName(event.target.value);
        }}
        />
        <label>Age:</label>
        <input type="text" 
        onChange = {(event) => {
          setAge(event.target.value);
        }}
        />
        <label>Country:</label>
        <input type="text " 
        onChange = {(event) => {
          setCountry (event.target.value);
        }}
        />
        <label>Position:</label>
        <input type="text" 
        onChange = {(event) => {
          setPosition(event.target.value);
        }}
        />
        <label>Wage:</label>
        <input type="text" 
        onChange = {(event) => {
          setWage(event.target.value);
        }}
        />
        <button onClick={addEmployee}> Add Employee</button>
        <span className='break'> =============================</span>

        
      </div>
      

      <div className='showEmployee'>
        <button onClick={getEmployee}>Show Employee</button>
        {employeeList.map((val, key) => {
          return <div className='showEmployeeList'> 
          <span>Name: {val.name} </span> 
          <span>Age: {val.age} </span>
          <span>Country: {val.country} </span>
          <span>Position: {val.position} </span>
          <span>Wage: {val.wage} </span>

          </div>
        })}

      </div>

    </div>
  );
}

export default App;
