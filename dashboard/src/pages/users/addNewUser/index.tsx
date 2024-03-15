import React, { useState } from "react";
import { Formik, Field } from "formik";
import {
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    Link,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from "@mui/material";
import { RegisterSchema } from "../../auth/validation";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Navigate, Route } from "react-router-dom";
import GetAllUsers from "../allUsers";

const AddNewUser: React.FC = () => {
    const [role, setRole] = useState("Users");
    const [isRedirect, setisRedirect] = useState(false);
    const { AddUser } = useActions();

    if (isRedirect) {
        return <Navigate to="/dashboard/users" />;
    }

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData  (event.currentTarget);

        const newUser = {
            FirstName: data.get("firstName"),
            LastName: data.get("lastName"),
            Email: data.get("email"),
            PhoneNumber: data.get("phoneNumber"),
            Role: role,
            Password: data.get("password"),
            confirmPassword: data.get("confirmPassword"),
        };

       await  AddUser(newUser);

        setisRedirect(true);
    };

    const handleChange = (event: SelectChangeEvent) => {
        setRole(event.target.value as string);
    };

    return (
        <>
            <Box
                component="main"
                sx={{
                    alignItems: "center",
                    display: "flex",
                    flexGrow: 1,
                    minHeight: "100%",
                }}
            >
                <Container maxWidth="sm">
                    <Formik
                        onSubmit={() => {}}
                        initialValues={initialValues}
                        validationSchema={RegisterSchema}
                    >
                        {({
                            errors,
                            touched,
                            isSubmitting,
                            isValid,
                            dirty,
                        }) => (
                            <Box
                                sx={{ my: 3 }}
                                onSubmit={handleSubmit}
                                component="form"
                                noValidate
                            >
                                <Typography color="textPrimary" variant="h4">
                                    Create a new account
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Use your email to create a new account
                                </Typography>
                                {errors.firstName && touched.firstName ? (
                                    <div style={{ color: "red" }}>
                                        {errors.firstName}
                                    </div>
                                ) : null}
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label="First Name"
                                    margin="normal"
                                    name="firstName"
                                    variant="outlined"
                                />
                                {errors.lastName && touched.lastName ? (
                                    <div style={{ color: "red" }}>
                                        {errors.lastName}
                                    </div>
                                ) : null}
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label="Last Name"
                                    margin="normal"
                                    name="lastName"
                                    variant="outlined"
                                />
                                {errors.email && touched.email ? (
                                    <div style={{ color: "red" }}>
                                        {errors.email}
                                    </div>
                                ) : null}
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label="Email Address"
                                    margin="normal"
                                    name="email"
                                    type="email"
                                    variant="outlined"
                                />
                                {errors.phoneNumber && touched.phoneNumber ? (
                                    <div style={{ color: "red" }}>
                                        {errors.phoneNumber}
                                    </div>
                                ) : null}
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label="Phone Number"
                                    margin="normal"
                                    name="phoneNumber"
                                    type="phone"
                                    variant="outlined"
                                />
                                <FormControl sx={{ width: "100%" }}>
                                    <InputLabel>Role</InputLabel>
                                    <Select
                                        value={role}
                                        defaultValue={role}
                                        label={role}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={"User"}>User</MenuItem>
                                        <MenuItem value={"Administrator"}>
                                            Administrator
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                                {errors.password && touched.password ? (
                                    <div style={{ color: "red" }}>
                                        {errors.password}
                                    </div>
                                ) : null}
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label="Password"
                                    margin="normal"
                                    name="password"
                                    type="password"
                                    variant="outlined"
                                />
                                {errors.confirmPassword &&
                                touched.confirmPassword ? (
                                    <div style={{ color: "red" }}>
                                        {errors.confirmPassword}
                                    </div>
                                ) : null}
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label="Confirm password"
                                    margin="normal"
                                    name="confirmPassword"
                                    type="password"
                                    variant="outlined"
                                />
                                <Box
                                    sx={{
                                        alignItems: "center",
                                        display: "flex",
                                        ml: -1,
                                    }}
                                ></Box>
                                <Box sx={{ py: 2 }}>
                                    <Button
                                        disabled={!(isValid && dirty)}
                                        color="primary"
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                    >
                                        {isSubmitting
                                            ? "Loading"
                                            : "Sign Up Now"}
                                    </Button>
                                </Box>
                            </Box>
                        )}
                    </Formik>
                </Container>
            </Box>
        </>
    );
};
export default AddNewUser;

/*import React, { useState } from "react";
import { TextField, Button, Container, Stack } from "@mui/material";


const AddUser = () => {
    const [user, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setValues({
            ...user,
            [name]: value,
        });
    };

    ///
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [password, setPassword] = useState("");
    ///

    

    function handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault();
        console.log(user);
    }

    return (
        <React.Fragment>
            <h2>Add User</h2>
            <form onSubmit={hang={2} direction="row" sx={{ marginBottom: 4 }}>
                    <TextField
                        type="text"
                        variant="outlined"
                        color="secondary"
                        label="First Name"
                        onChange={(e) =ndleSubmit} action="">
                <Stack spaci> setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        variant="outlined"
                        color="secondary"
                        label="Last Name"
                        onChange={handleChange}
                        value={user.lastName}
                        fullWidth
                    />
                </Stack>
                <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                    <TextField
                        type="email"
                        variant="outlined"
                        color="secondary"
                        label="Email"
                        onChange={handleChange}
                        value={user.email}
                        fullWidth
                        required
                    />
                    <TextField
                        type="phone"
                        variant="outlined"
                        color="secondary"
                        label="Phone number"
                        onChange={handleChange}
                        value={user.phoneNumber}
                        fullWidth
                    />
                </Stack>
                <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                    <TextField
                        type="password"
                        variant="outlined"
                        color="secondary"
                        label="Password"
                        onChange={handleChange}
                        value={user.password}
                        required
                        fullWidth
                    />
                    <TextField
                        type="password"
                        variant="outlined"
                        color="secondary"
                        label="Confime Password"
                        onChange={handleChange}
                        value={user.confirmPassword}
                        required
                        fullWidth
                    />
                </Stack>

                <Button variant="outlined" color="primary" type="submit">
                    Add
                </Button>
            </form>
        </React.Fragment>
    );
};

export default AddUser;*/

/*import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
 import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';

export default function AddUser() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     <FormControl>
    <FormLabel>Enter Name</FormLabel>
    <TextField type="text" size='small' defaultValue="Name" ></TextField>
    <FormLabel>Enter Surname</FormLabel>
    <TextField type="text" size='small' defaultValue="Surname" ></TextField>
    <FormLabel>Enter Email</FormLabel>
    <TextField type="email" size='small' defaultValue="Email" ></TextField>
    <FormLabel>Enter Phone Number</FormLabel>
    <TextField type="phone" size='small' defaultValue="Phone Number" ></TextField>
    <FormLabel>Enter Password</FormLabel>
    <TextField type="password" size='small' defaultValue="Password" ></TextField>
    <FormLabel>Confirm Password</FormLabel>
    <TextField type="password" size='small' defaultValue="Password" ></TextField>

    <Button>Submit</Button>
</FormControl>
    </Box>
  );
}*/
