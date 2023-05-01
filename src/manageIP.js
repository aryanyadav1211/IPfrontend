import React, { useState, useEffect } from 'react';

function ManageIP() {
    const [count, setCount] = useState(0);

    
    useEffect(() => {
        console.log("hiii");
    //   document.title = `You clicked ${count} times`;
    fetch("https://api.ipify.org?format=json").then(res => res.json()).then(data => {
        console.log(data);

    })});






  return (
    <div className="container">
      <h1 id="signInHeading"> My IP Address:</h1>

      <form action="" id="form">
        <label for="name" class="Email">
          Enter IP to Access Database
        </label>
        <br />
        <input
          type="text"
          id="email"
          className="textbox"
          placeholder="Your IP Address"
          required
        />

        <label for="Password" className="password">
          Environment
        </label>
        <br />
        {/* <input
          type="text"
          id="password"
          className="textbox"
          placeholder="Password"
          required
        /> */}
        <select className="dropDown">
          <option value="dev"> Dev</option>
          <option value="test"> Test</option>
          <option value="production"> Production</option>
          
        </select>
        <br />
        <br />

        <input type="button" value="Submit" id="signInBtn"  />
        <br />
      </form>
    </div>
  );
}

export default ManageIP;
