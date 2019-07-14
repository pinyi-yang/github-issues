import React from 'react';
import {Link} from 'react-router-dom'

const Home = (props) => (
  <>
    <p>this is Home</p>
    <div className='notes'>
      <h3>👋 Want to submit an issue to bookface/actre</h3>
      <p>If you have a bug or an idea, read the contriubting guidelines before opening an issue.</p>
      <p>Issues labeled good first issue can be good first contributions.</p>
    </div>
    <Link to='/issues'>
      <div>
        Go to Issues
      </div>
    </Link>
  </>
)

export default Home;