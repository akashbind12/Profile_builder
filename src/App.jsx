import { useState } from 'react'
import './App.css'


function App() {
  const [data, setData] = useState({
    "name": "Charlie",
    "location": "Alberta, Canada",
    "school": "the University of Utah",
    "major": "Information Technology",
    "occupation": "ournalist for a local newspaper",
    "religiousBackgrpund": "atheist, and has no experience with spiritual things",
    "reasonForMeeting" : "is trying to find [PossessivePronoun] purpose in life outside of track and field and school",
  })

  const [gender, setGender] = useState("He")
  
  const handleGender = (e) => {
    console.log("gender:", e.target.value)
    e.target.value == "male" ? setGender("He") : setGender("She")
  }

  const handlechange = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div className="App">
      <h1 className='heading'>Bio Generator</h1>
      <div className='container'>
        <div className='option-div'>
          <h1 className='heading'>Options</h1>
          
          <div className='option-div-child'>
            <div>Name :</div>
            <input name='name' value={data.name} type="text"  onChange={handlechange} />
            <div>Gender : </div>
            <select name="" id="" onChange={handleGender} >
              <option value="male"> male </option>
              <option value="female"> female </option>
            </select>
            <button>Random Name</button>
          </div>

          <div className='option-div-child'>
            <input type="checkbox" />
            <div> Location : </div>
            <input name='location' value={data.location}  type="text"  onChange={handlechange} />
            <button> Random Location </button>
          </div>

          <div style={{marginBottom : "0"}} className='option-div-child'>
            <input type="checkbox" />
            <div> School : </div>
            <input name='school' value={data.school}  type="text"  onChange={handlechange} />
            <button>Random School</button>
          </div>
          <div style={{marginTop : "0"}} className='option-div-child'>
            <div> Major :</div>
            <input name='major' value={data.major}  type="text"  onChange={handlechange} />
            <button> Random Major </button>
          </div>

          <div className='option-div-child'>
            <input type="checkbox" />
            <div> Occupation : </div>
            <input name='occupation' value={data.occupation}  type="text"  onChange={handlechange} />
            <button> Random Occupation </button>
          </div>

          <div style={{display : "block", textAlign : "left"}} className='option-div-child'>
            <div style={{display : "flex"}}>
            <input type="checkbox" />
            <div> Religious Backgrpund : </div>
            </div>
            <textarea style={{width : "95%", height : "60px" , margin : "10px"}} name='religiousBackgrpund' value={data.religiousBackgrpund}  type="text"  onChange={handlechange} />
            <button> Random Religion </button>
          </div>

          <div style={{display : "block", textAlign : "left"}} className='option-div-child'>
            <div style={{display : "flex"}}>
            <input type="checkbox" />
            <div> Reason for meeting with missionaries: </div>
            </div>
            <textarea style={{width : "95%", height : "60px" , margin : "10px"}} name='reasonForMeeting' value={data.reasonForMeeting}  type="text"  onChange={handlechange} />
            <button> Restoration </button>
            <button> Plan of Salvation </button>
            <button> Gospel of Christ </button>
            <button> Law of Chastity </button>
            <button> Word of Wisdom </button>
            <button> Any Lesson </button>
          </div>

        </div>

        {/* ------- result div-----------------------*/}
        <div className='result-div'>
        <h1 className='heading'>Result</h1>
          <div className='option-div-child'>{data.name} is from {data.location} .
            {gender} is studying {data.major} at {data.school}.
            {gender} currently works as a {data.occupation}.
            {gender} was raised {data.religiousBackgrpund}.
            {gender} {data.reasonForMeeting}</div>
        </div>
       </div>
    </div>
  )
}

export default App
