import { useState } from 'react'
import './App.css'

const RandomData = {
  "Name": ["Amanda", "Hannah", "Rachel", "Josh", "Maggie", "Taylor"],
  "Location": ["Mumbai", "NaviMumbai", "bangluru", "hydrabad", "chennai"],
  "School": ["BYU", "Utah State", "the University of Utah", "Utah State", "UVU"],
  "Major": ["Animation", "Family Science", "Information Technology", "Math Education", "Communication Disorders"],
  "Occupation": ["journalist for a local newspaper", "journalist for a local newspaper",
    "TA at [PossessivePronoun] school", "web developer", "civil Engineer"],
  "ReligiousBackgrpund": ["atheist, and has no experience with spiritual things",
    "in a nontraditional family thatwas very focused on spirituality and connecting with the inner being through meditation and nature",
    "Catholic but would consider [ObjectPronoun]self to be agnostic right now",
    "Catholic", "never discussing religion in [PossessivePronoun] home"],
  "ReasonForMeeting": ["is looking to develop a more personal relationship with God",
    "really enjoyed [PossessivePronoun] first meeting with the missionaries (the Restoration) and felt good about the Book of Mormon when [SubjectPronoun] prayed about it",
    "often worries that God is disappointed in [ObjectPronoun] for not following him better and wants to know how to change",
  "harbors feelings of resentment towards God because of difficult trials in [PossessivePronoun] life, but is willing to give religion and spirituality another try"]
  
}

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
  let [count, setCount] = useState(0)
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
  
 
  const handleRandomdata = (key,value) => {
    console.log(key,RandomData.Name[count],count,)
    if (count > 4) {
      count = 0
    }
    setData({
      ...data,
      [key] : value[count]
    })
    setCount(count+1);
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
            <button onClick={() => handleRandomdata("name",RandomData.Name)} >Random Name</button>
          </div>

          <div className='option-div-child'>
            <input type="checkbox" />
            <div> Location : </div>
            <input name='location' value={data.location}  type="text"  onChange={handlechange} />
            <button onClick={() => handleRandomdata("location",RandomData.Location)} > Random Location </button>
          </div>

          <div style={{marginBottom : "0"}} className='option-div-child'>
            <input type="checkbox" />
            <div> School : </div>
            <input name='school' value={data.school}  type="text"  onChange={handlechange} />
            <button onClick={() => handleRandomdata("school",RandomData.School)} >Random School</button>
          </div>
          <div style={{marginTop : "0"}} className='option-div-child'>
            <div> Major :</div>
            <input name='major' value={data.major}  type="text"  onChange={handlechange} />
            <button onClick={() => handleRandomdata("major",RandomData.Major)}> Random Major </button>
          </div>

          <div className='option-div-child'>
            <input type="checkbox" />
            <div> Occupation : </div>
            <input name='occupation' value={data.occupation}  type="text"  onChange={handlechange} />
            <button onClick={() => handleRandomdata("occupation",RandomData.Occupation)}  > Random Occupation </button>
          </div>

          <div style={{display : "block", textAlign : "left"}} className='option-div-child'>
            <div style={{display : "flex"}}>
            <input type="checkbox" />
            <div> Religious Backgrpund : </div>
            </div>
            <textarea style={{width : "95%", height : "60px" , margin : "10px"}} name='religiousBackgrpund' value={data.religiousBackgrpund}  type="text"  onChange={handlechange} />
            <button onClick={() => handleRandomdata("religiousBackgrpund",RandomData.ReligiousBackgrpund)} > Random Religion </button>
          </div>

          <div style={{display : "block", textAlign : "left"}} className='option-div-child'>
            <div style={{display : "flex"}}>
            <input type="checkbox" />
            <div> Reason for meeting with missionaries: </div>
            </div>
            <textarea style={{width : "95%", height : "60px" , margin : "10px"}} name='reasonForMeeting' value={data.reasonForMeeting}  type="text"  onChange={handlechange} />
            <button onClick={() => handleRandomdata("reasonForMeeting",RandomData.ReasonForMeeting)} > Restoration </button>
            <button onClick={() => handleRandomdata("reasonForMeeting",RandomData.ReasonForMeeting)}> Plan of Salvation </button>
            <button onClick={() => handleRandomdata("reasonForMeeting",RandomData.ReasonForMeeting)}> Gospel of Christ </button>
            <button onClick={() => handleRandomdata("reasonForMeeting",RandomData.ReasonForMeeting)}> Law of Chastity </button>
            <button onClick={() => handleRandomdata("reasonForMeeting",RandomData.ReasonForMeeting)}> Word of Wisdom </button>
            <button onClick={() => handleRandomdata("reasonForMeeting",RandomData.ReasonForMeeting)}cc> Any Lesson </button>
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
