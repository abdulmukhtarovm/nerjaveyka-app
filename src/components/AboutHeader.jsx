import React from 'react' 
import { getText } from '../locales'

const AboutHeader = () => {
  return (
    <div className='AboutHeader Headers'>
        <h1>{getText("about")}</h1>
        {/* <p>Sit pharetra mauris dui a rhoncus phasellus. Auctor blandit id tristique donec ipsum ullamcorper sodales urna. Proin laoreet dolor volutpat duis morbi aliquet. </p> */}
    </div>
  )
}

export default AboutHeader