import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { URL } from "../App";
import'./userlist.css'

function UserList() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState({
    status: false,
    id: 0
  });

  // get users 
  useEffect(() => {
    getUsers();
  }, []);

  // get users
  const getUsers = async () => {
    try {
      const response = await axios.get(`${URL}/user/get-users`);
      console.log(response.data,"data")
      setUsers(response.data.payload);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // delete user
  const deleteUserById = async (id) => {
    try {
      const response = await axios.delete(`${URL}/user/remove-user/${id}`);
      alert(response.data.message);
      getUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // edit user
  const editUserById = (userObj) => {
    setEditUser({ ...editUser, status: true, id: userObj._id });
    setValue("name", userObj.name);
    setValue("email", userObj.email);
    setValue("phoneNumber", userObj.phoneNumber);
  };

  // save user
  const saveUserById = async (modifiedUser) => {
    try {
      const response = await axios.put(`${URL}/user/update-user`, modifiedUser);
      setEditUser({ ...editUser, status: false });
      alert(response.data.message);
      getUsers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div> <p className="display-3 fw-bold text-primary mb-0">List of Users</p>
    <div className='text-center mt-0 container'>
     
      {users.length === 0 && <p className='text-danger'>No users found</p>}
      {users.length !== 0 &&
        <form onSubmit={handleSubmit(saveUserById)} className='myclass border border-3 border-warning rounded p-4'>
          <table className="table bg-light">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((userObj) => (
                <tr key={userObj._id}>
                  <td>
                    {editUser.status === true && editUser.id === userObj._id ?
                      <>
                        <input
                          type="text"
                          {...register("name", {
                            required: "Name is required.",
                            minLength: {
                              value: 6,
                              message: 'Minimum length should be 6 characters',
                            }
                          })}
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                      </>
                      :
                      <> {userObj.name}</>
                    }
                  </td>
                  <td>
                    {editUser.status === true && editUser.id === userObj._id ?
                      <>
                        <input
                          type="text"
                          {...register("email", {
                            required: "Email is required.",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: 'Enter a valid email address',
                            }
                          })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                      </>
                      :
                      <> {userObj.email}</>
                    }
                  </td>
                  <td>
                    {editUser.status === true && editUser.id === userObj._id ?
                      <>
                        <input
                          type="text"
                          {...register("phoneNumber", {
                            required: "Phone number is required.",
                            pattern: {
                              value: /^\d{10}$/,
                              message: 'Enter a valid 10-digit phone number',
                            }
                          })}
                        />
                        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
                      </>
                      :
                      <> {userObj.phoneNumber}</>
                    }
                  </td>
                  <td>
                    {editUser.status === true && editUser.id === userObj._id ?
                      <input type="submit" className="btn btn-success" value="Save" />
                      :
                      <>
                        <button type="button" className="btn btn-warning m-1" onClick={() => editUserById(userObj)}>Edit</button>
                        <button type="button" className="btn btn-danger m-1" onClick={() => deleteUserById(userObj._id)}>x</button>
                      </>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      }
    </div>
    </div>
  );
}

export default UserList;
