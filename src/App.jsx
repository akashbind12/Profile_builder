import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({
    "name": "",
    "location": "",
    "school": "",
    "major": "",
    "occupation": "",
    "religiousBackgrpund": "",
    "reasonForMeeting" : "",
  })

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
            <select name="" id="">
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
            <div> Reason for meeting with missionaries  : </div>
            </div>
            <textarea style={{width : "95%", height : "60px" , margin : "10px"}} name='religiousBackgrpund' value={data.religiousBackgrpund}  type="text"  onChange={handlechange} />
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
          <div className='option-div-child'>{data.name} is from {data.location}  and moved to the Utah Valley for school.
            She is studying to be a speech pathologist at the University of Utah. She was raised without any religion in the home.
            For most of her life, she has never had any interest in spiritual things.
            She has recently lost a loved one, and is looking for ways to find peace during this difficult time.</div>
        </div>
       </div>
    </div>
  )
}

export default App
