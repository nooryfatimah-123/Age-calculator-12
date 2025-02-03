import React, { useState } from 'react'

const AgeCalculator = () => {

const[birthdate , setBirthdate]=useState('');
const [age , setAge]=useState(0);

const calculateAge=() =>{
    const today= new Date();
    const birthdateDate = new Date(birthdate);


    let age= today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();
    if(monthDiff < 0 ||(monthDiff ===0 && today.getDate() < birthdateDate.getDate()))
        {
          age -- ;
    }
    
    setAge(age);
}

const resetCalculator= ()=>{
    setBirthdate('');
    setAge(0);
}


 return (
    <div className='container'>
        <h2 className='heading-title'>Age Calculator</h2>
        <p className='para-title'>The Age Calculator can determine the age or interval between two dates.The Calculated age will be displayed in years.</p>

        <div className="container-middle">
        <div className="right">
            <h4>Date of Birth</h4>
            <input className="date" type='date' value={birthdate} onChange={e=> setBirthdate(e.target.value)} />
            <div className="button-div">
                <button className='button-a' onClick={calculateAge}>Calculate Age</button>
                <button className='button-b' onClick={resetCalculator}>Reset</button>
            </div>

        </div>

        <div className="left">
        <div className="container-middle-para">
            <h1>Your Age Is</h1>
            </div>
            <h1 className='age-heading'>{age > 0 ? `${age}` : ''}</h1>
        </div>

        </div>
      
    </div>
  )
}

export default AgeCalculator;
