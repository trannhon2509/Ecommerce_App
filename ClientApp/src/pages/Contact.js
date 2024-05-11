import React from 'react'
import '../assets/css/Contact.css'
function Contact() {
  return (
    <div className='mt-5'>
      <div className='mb-5 text-white'>{"0"}</div>
      <div className="container shadow rounded-2 mt-5">
        <form action="/action_page.php">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: 200 }} defaultValue={""} />
          <input type="submit" defaultValue="Submit" />
        </form>
      </div>
    </div>

  )
}

export default Contact