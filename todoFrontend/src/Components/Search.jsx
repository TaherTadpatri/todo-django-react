import React from 'react'

function Search() {
  return (
    <div> 
        <div className="menu">
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
