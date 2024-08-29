import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-secondary text-light py-1">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <p>Your Footer Text Here</p>
          </div>
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            {/* Your logo or image here */}
            <img src="logo192.png" alt="Logo" width="50" height="50" />
            <img src="4.jpg" alt="Logo" width="50" height="50"/>
          </div>
        </div>
      </div>
    </footer>

    </div>
  )
}
