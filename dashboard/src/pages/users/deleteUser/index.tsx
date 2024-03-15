import React, { useState } from "react";

import { Button, TextField, Typography } from "@mui/material";

import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Navigate } from "react-router-dom";

const Delete: React.FC = () => {
    const [isRedirect, setisRedirect] = useState(false);
    const { selectedUser } = useTypedSelector((store) => store.UserReducer);
    const { DeleteUser } = useActions();

    if (isRedirect) {
        return <Navigate to="/dashboard/users" />;
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await DeleteUser(selectedUser.id);

        setisRedirect(true);
    };

    return (
        <>
            <React.Fragment>
                <Typography color="textPrimary" variant="h4">
                    Delete User
                </Typography>
                <Typography color="textSecondary" gutterBottom variant="body2">
                    Are you sure - you want to delete this user?
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        type="text"
                        variant="outlined"
                        color="secondary"
                        disabled
                        value={selectedUser.firstName}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        variant="outlined"
                        color="secondary"
                        disabled
                        value={selectedUser.email}
                        fullWidth
                    />

                    <Button
                        color="primary"
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                    >
                        Delete
                    </Button>
                </form>
            </React.Fragment>
        </>
    );
};

export default Delete;
