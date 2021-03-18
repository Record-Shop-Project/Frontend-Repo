import React from 'react'
import avatar1 from '../images/avatar1';
import avatar2 from '../images/avatar2';
import avatar3 from '../images/avatar3';
import avatar4 from '../images/avatar4';
import avatar5 from '../images/avatar5';
import avatar6 from '../images/avatar6';
import avatar7 from '../images/avatar7';
import avatar8 from '../images/avatar8';
import avatar9 from '../images/avatar9';

const UpdateProfile = () => {
    return (
        <div >
            <div>
                <h2>Your profile, N A M E.</h2>
                <h3>Don’t forget to click the save button Before you are gone!</h3>
                <input type="text" name="firstName" ref={register({required: true})} placeholder="THE ACTUAL NAME" />
                <input type="text" name="lastName" ref={register({required: true})} placeholder="ACTUAL LASTNAME" />
                <input type="text" name="email" ref={register({required: true})} placeholder=" USER EMAIL" />
                <input type="text" name="nickName" ref={register({required: true})} placeholder="ACTUAL NICKNAME" />

                <button>Save</button>
            </div>
            <div>
                <h2>You can also update your supa kewl profile pic.</h2>
                <h3>omg. These are so cool. tenk u Gabriel hollington</h3>
                <img src={avatar1} alt={avatar1} />
                <img src={avatar2} alt={avatar2} />
                <img src={avatar3} alt={avatar3} />
                <img src={avatar4} alt={avatar4} />
                <img src={avatar5} alt={avatar5} />
                <img src={avatar6} alt={avatar6} />
                <img src={avatar7} alt={avatar7} />
                <img src={avatar8} alt={avatar8} />
                <img src={avatar9} alt={avatar9} />
            </div>
        </div>
    )
}

export default UpdateProfile
