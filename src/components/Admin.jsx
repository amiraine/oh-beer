import React from 'react';

function Admin(props){

  return(
    <div>
      <style jsx>{`
        h2, h3{
          text-align: center;
        }
        .form{
          display: flex;
          justify-content: center;
          font-size: 1.5em;
        }
        input{
          padding: 5px;
          margin-bottom: 15px;
        }
        input::placeholder{
          font-size: 1.5em;
        }
        .inline-labels{
          display: flex;
          justify-content: space-between;
        }
        .inline-labels label{
          width: 188px;
        }
        button{
          padding: 15px 45px;
          background-color: #ffa391;
          font-size: .75em;
          border-radius: 5px;
          border: 1px transparent;
        }
      `}</style>
      <h2>Administrator page</h2>
      <h3>Add a new keg</h3>
      <div className="form">
        <form>
          <label>Beer name</label><br/>
          <input placeholder="Beer name" size="90"/><br/>
          <label>Brewery name</label><br/>
          <input placeholder="Brewery" size="90"/><br/>
          <label>Beer type</label><br/>
          <input placeholder="e.g. Lager, Ale, etc." size="90"/><br/>
          <div className="inline-labels">
            <label>ABV</label> <label>Price</label>
            <label>Remaining</label><br/>
          </div>
          <input placeholder="5.5%" size="28"/>
          <input placeholder="$7" size="28"/>
          <input placeholder="Remaining pints" size="28"/><br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
