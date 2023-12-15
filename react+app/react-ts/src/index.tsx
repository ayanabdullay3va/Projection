import React from 'react'

type Props = {}

function index({}: Props) {
  return (
    <div>
        <h3>Form</h3>
    <form action="">
        <p>name</p>
        <input type="text" placeholder='name' />
        <br />
        <p>surname</p>
        <input type="text" placeholder='surname' />
        <br />
        <p>age</p>
        <input type="text" placeholder='age' />
        <br />
        <p>Choose:</p>
      
        <select id="Student">
        
  <option value="Groupname">Groupname</option>
  <option value="GPA">GPA</option>
  <option value="Hobbies">Hobbies</option>
</select>


<p>Chose:</p>
<select  id="Emploee">
<option value="Skill">Skill</option>
<option value="Salary">Salary</option>

</select>
<br />
        <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default index