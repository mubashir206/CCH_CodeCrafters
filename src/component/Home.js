import React from 'react'

export default function Home() {
    return (
        <div className='container-flaud'>
            <div className='row'>
                <img src='new.png' alt='not found' style={{ width: "100%", height: "60vh" }}></img>
            </div>
            <div className='row mt-4'>
                <div className='col-md-5  text-center'>
                    <h2 className='text-center text-danger'>Visit this site :</h2>
                    <p className='m-4'>Where does it come from?
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock, a Latin professor
                        at Hampden-Sydney College in Virginia, looked up one of the more obscur
                        e Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                        discovered the undoubtable source. Lorem Ipsum comes
                        from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                        (The Extremes of Good and Evil)</p>
                </div>
                <div className='col-md-5 offset-1 mr-2'>
                    <img src='new.png' className='border-top-2' alt='not found' style={{ width: "100%", height: "60vh" }}></img>
                </div>
            </div>

            <div className='row mt-5 d-flex justify-content-around'>
                <div className='col-md-3'>
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="new.png" alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Team work</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="new.png" alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Places</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src="new.png" alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Managment</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

      <div className='row'>
        <div className='col-md-12 mt-4 text-center'>
            <h2  className='text-primary'>Our Team</h2>
            <p className='m-4'>Where does it come from?
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock, a Latin professor
                        at Hampden-Sydney College in Virginia, looked up one of the more obscur
                        e Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                        discovered the undoubtable source. Lorem Ipsum comes
                        from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                        (The Extremes of Good and Evil)</p>
        </div>
      </div>

        </div>
    )
}
