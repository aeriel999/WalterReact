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
import { ChangePasswordSchema, RegisterSchema } from "../auth/validation";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Navigate } from "react-router-dom";

const Profile: React.FC = () => {
    const [isRedirect, setisRedirect] = useState(false);
    const { ChangePassword, LogOut } = useActions();
    const { user } = useTypedSelector((store) => store.UserReducer);

    if (isRedirect) {
        LogOut(user.Id)
        return <Navigate to="/dashboard" />;
    }

    const initialValues = {
        password: "",
        newPassword: "",
        confirmNewPassword: "",
    };

    /* 
       const [firstName, setname] = useState(user.Name);
    const [lastName, setlastname] = useState(user.LAstname);
    const [email, setemail] = useState(user.Email);
    const [phone, setphone] = useState(user.PhoneNumber);
    const id = user.Id;
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const newUser = {
            Id: id,
            FirstName: data.get("firstName"),
            LastName: data.get("lastName"),
            Email: data.get("email"),
            PhoneNumber: data.get("phoneNumber"),
            Role: role,
            Password: data.get("password"),
            confirmPassword: data.get("confirmPassword"),
        };

        EditUser(newUser);

        setisRedirect(true);
    };*/

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const newPassModel = {
            Id: user.Id,
            Password: data.get("password"),
            NewPassword: data.get("newPassword"),
            ConfirmNewPassword: data.get("confirmNewPassword"),
        };

       await  ChangePassword(newPassModel);

        setisRedirect(true);
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
                        validationSchema={ChangePasswordSchema}
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
                                    Update Password
                                </Typography>
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
                                {errors.newPassword && touched.newPassword ? (
                                    <div style={{ color: "red" }}>
                                        {errors.newPassword}
                                    </div>
                                ) : null}
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label="New Password"
                                    margin="normal"
                                    name="newPassword"
                                    type="password"
                                    variant="outlined"
                                />

                                {errors.confirmNewPassword &&
                                touched.confirmNewPassword ? (
                                    <div style={{ color: "red" }}>
                                        {errors.confirmNewPassword}
                                    </div>
                                ) : null}
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label="Confirm New password"
                                    margin="normal"
                                    name="confirmNewPassword"
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
                                        {isSubmitting ? "Loading" : "Update"}
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
export default Profile;

/*import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const UserDetails = () => {
    const { selectedUser } = useTypedSelector((store) => store.UserReducer);


  

    return <h1> </h1>;
};

export default UserDetails;

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
                               */
