import { Button, Col, Row, Container, Form } from "reactstrap";

import { userSchemaValidation } from "../Validations/UserValidations";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addUser, deleteUser, updateUser } from "../Features/UserSlice.js";

import { registerUser } from "../Features/UserSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  //const userList = useSelector((state) => state.users.value);
  //const cuser = useSelector((state) => state.users.user);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  //setage1
  //const [age1, setage1] = useState("");
  //setage2
  //const [age2, setage2] = useState("");
  //setsalary
  //const [salary, setsalary] = useState("0.00");

  //For form validation using react-hook-form
  const {
    register,
    handleSubmit, // Submit the form when this is called
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation), //Associate your Yup validation schema using the resolver
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form submission
  const onSubmit = (data) => {
    alert("Anthony.");
    try {
      // You can handle the form submission here
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      console.log("Form Data", data); // You can handle the form submission here
      alert("Validation all good.");
      //dispatch(addUser(userData)); //use the useDispatch hook to dispatch an action, passing as parameter the userData
      dispatch(registerUser(userData));
      navigate("/login");
    } catch (error) {
      console.log("Error.");
    }
  };

  const handleDelete = (email) => {
    dispatch(deleteUser(email));
  };

  const handleUpdate = (email) => {
    const userData = {
      name: name, //create an object with the values from the state variables
      email: email,
      password: password,
    };
    dispatch(updateUser(userData)); //use the useDispatch hook to dispatch an action, passing as parameter the userData
  };

  return (
    <div>
      <Container fluid>
        <Row className="formrow">
          <Col className="columndiv1" lg="6">
            <Form className="div-form" onSubmit={handleSubmit(onSubmit)}>
              <section className="form">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name..."
                    {...register("name", {
                      onChange: (e) => setname(e.target.value),
                    })}
                  />
                  <p className="error">{errors.name?.message}</p>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email..."
                    {...register("email", {
                      onChange: (e) => setemail(e.target.value),
                    })}
                  />
                  <p className="error">{errors.email?.message}</p>
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password..."
                    {...register("password", {
                      onChange: (e) => setpassword(e.target.value),
                    })}
                  />
                  <p className="error">{errors.password?.message}</p>
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    id="confirmpassword"
                    className="form-control"
                    placeholder="Confirm your password..."
                    {...register("confirmpassword", {
                      onChange: (e) => setconfirmpassword(e.target.value),
                    })}
                  />
                  <p className="error">{errors.confirmpassword?.message}</p>
                </div>

                {/*
                <div className="form-group">
                  <input
                    type="text"
                    id="age1"
                    className="form-control"
                    placeholder="Enter your age1..."
                    {...register("age1", {
                      onChange: (e) => setage1(e.target.value),
                    })}
                  />
                  <p className="error">{errors.age1?.message}</p>
                </div>
                

                <div className="form-group">
                  <input
                    type="text"
                    id="age2"
                    className="form-control"
                    placeholder="Enter your age2..."
                    {...register("age2", {
                      onChange: (e) => setage2(e.target.value),
                    })}
                  />
                  <p className="error">{errors.age2?.message}</p>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="salary"
                    className="form-control"
                    placeholder="Enter your salary..."
                    {...register("salary", {
                      onChange: (e) => setsalary(e.target.value),
                    })}
                  />
                  <p className="error">{errors.salary?.message}</p>
                </div>
                */}

                <Button color="primary" className="button">
                  Register
                </Button>
              </section>
            </Form>
          </Col>

          <Col className="columndiv1" lg="6"></Col>
        </Row>

        {/*
        <Row>
          <Col md={6}>
            Current User: {cuser}
            <br />
            List of Users
            <table>
              <tbody>
                {userList.map((user) => (
                  <tr key={user.email}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>
                      <Button onClick={() => handleDelete(user.email)}>
                        Delete User
                      </Button>
                      <Button onClick={() => handleUpdate(user.email)}>
                        Update User
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
        */}
      </Container>
    </div>
  );
};

export default Register;
