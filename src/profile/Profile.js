import React from 'react'
import propTypes from 'prop-types';

function Profile({fullName, bio, profession,children,handleName}) {
  return (
    <div style={{backgroundColor:'rgb(255, 189, 206)',marginBottom:29}}> {/* inline styling*/}
     
        <h1 style={{fontSize:'medium',fontWeight:'normal'}}>Full Name : {fullName}</h1>{/* the fullName prop*/}
        <p>Bio : {bio}</p>{/* the bio prop*/}
        <p>Profession : {profession}</p>{/* the profession prop*/}
        <div>{children}</div>{/* the children prop*/}
        <button onClick={() => handleName(fullName)}>Click me</button>{/* the hendleName function as a prop*/}

    </div>
  )
}

/* the default props for Profile component*/
Profile.defaultProps = {
    fullName : "wafa sl", bio:"*****", profession:"none"
}
/* Using PropTypes to check props*/
Profile.propTypes = {
fullName : propTypes.string.isRequired , 
bio : propTypes.string.isRequired , 
profession : propTypes.string.isRequired , 
handleName : propTypes.func.isRequired , 
children : propTypes.element.isRequired  
}

export default Profile
