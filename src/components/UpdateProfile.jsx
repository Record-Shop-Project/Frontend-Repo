import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { myContext } from "../context/myContext"
import { updateUserProfile } from "../helpers/apiCall"
import avatar2 from '../images/avatar2.jpg';
import avatar1 from '../images/avatar1.jpg';
import avatar3 from '../images/avatar3.jpg';
import avatar4 from '../images/avatar4.jpg';
import avatar5 from '../images/avatar5.jpg';
import avatar6 from '../images/avatar6.jpg';
import avatar7 from '../images/avatar7.jpg';
import avatar8 from '../images/avatar8.jpg';
import avatar9 from '../images/avatar9.jpg';
//--------------------------------------------------
// const newTodos = todos.map((item) => {
//     if (item._id == updatedTodo.data._id) {
//       console.log('Item', item);
//       item.status = !item.status;
//     }
//     return item;
//   });
//   console.log('New todos', newTodos);
//   setTodos(newTodos);




const UpdateProfile = () => {
    const context = useContext(myContext)
    const { signup } = context
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = async (data) => {

        const updateUser = await updateUserProfile(data, signup._id)


        // console.log("data", data);
    }
    return (
        <div >
            <div>
                <h2>Your profile, N A M E.</h2>
                <h3>Don’t forget to click the save button Before you are gone!</h3>
                <form onSubmit={handleSubmit(onSubmit)}>


                    <input type="text" name="firstName" ref={register({ required: true })} placeholder="THE ACTUAL NAME" />
                    <input type="text" name="lastName" ref={register({ required: true })} placeholder="ACTUAL LASTNAME" />
                    <input type="text" name="email" ref={register({ required: true })} placeholder=" USER EMAIL" />
                    <input type="text" name="nickName" ref={register({ required: true })} placeholder="ACTUAL NICKNAME" />

                    <button>Save</button>

                </form>
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
