import React, { useState } from "react";
import { Formik, Field } from "formik";
import {
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from "@mui/material";
import { EditSchema } from "../../auth/validation";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Navigate } from "react-router-dom";

const UserDetails: React.FC = () => {
    
    const [isRedirect, setisRedirect] = useState(false);
    const { EditUser } = useActions();
    const { selectedUser } = useTypedSelector((store) => store.UserReducer);
    // const { selectedUser } = useTypedSelector((store) => store.UserReducer);
    // let userName = selectedUser.firstName;
    //const [name, setname] = React.useState(userName);
    //const [name, setname] = React.useState(selectedUser.firstName);
    //const [name, setname] = selectedUser.firstName;

    /*const user = {
        Id: selectedUser.Id ,
        FirstName: selectedUser.FirstName ,
        LastName: selectedUser.LastName ,
        Email: selectedUser.Email ,
        PhoneNumber: selectedUser.PhoneNumber ,
        Role: selectedUser.Role ,
    };

    const [firstName, setname] = useState(user.FirstName );
    const [lastName, setlastname] = useState(user.LastName);
    const [email, setemail] = useState(user.Email);
    const [phone, setphone] = useState(user.PhoneNumber);*/

    const [firstName, setname] = useState(selectedUser.firstName);
    const [lastName, setlastname] = useState(selectedUser.lastName);
    const [email, setemail] = useState(selectedUser.email);
    const [phone, setphone] = useState(selectedUser.phoneNumber);
    const [role, setRole] = useState(selectedUser.role);

    debugger;

    if (isRedirect) {
        return <Navigate to="/dashboard/users" />;
    }

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const newUser = {
            Id: selectedUser.id,
            FirstName: data.get("firstName"),
            LastName: data.get("lastName"),
            Email: data.get("email"),
            PhoneNumber: data.get("phoneNumber"),
            Role: role,
        };

        await EditUser(newUser);

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
                        validationSchema={EditSchema}
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
                                    Edit User information
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
                                    // defaultValue="defaultValue"
                                    value={firstName}
                                    onChange={(e: any) =>
                                        setname(e.target.value)
                                    }
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
                                    value={lastName}
                                    onChange={(e: any) =>
                                        setlastname(e.target.value)
                                    }
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
                                    value={email}
                                    onChange={(e: any) =>
                                        setemail(e.target.value)
                                    }
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
                                    value={phone}
                                    onChange={(e: any) =>
                                        setphone(e.target.value)
                                    }
                                />
                                <FormControl sx={{ width: "100%" }}>
                                    <InputLabel>Role</InputLabel>
                                    <Select
                                        value={role}
                                         
                                        label={role}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={"User"}>User</MenuItem>
                                        <MenuItem value={"Administrator"}>
                                            Administrator
                                        </MenuItem>
                                    </Select>
                                </FormControl>

                                <Box
                                    sx={{
                                        alignItems: "center",
                                        display: "flex",
                                        ml: -1,
                                    }}
                                ></Box>
                                <Box sx={{ py: 2 }}>
                                    <Button
                                        // disabled={!(isValid && dirty)}
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
export default UserDetails;

/*import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const UserDetails = () => {
    const { selectedUser } = useTypedSelector((store) => store.UserReducer);


  

    return <h1> </h1>;
};

export default UserDetails;*/
