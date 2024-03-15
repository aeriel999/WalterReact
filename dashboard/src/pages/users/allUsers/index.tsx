import * as React from "react";
import { Link, Navigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { useEffect, useState } from "react";
import {
    DataGrid,
    GridApi,
    GridColDef,
    GridEditCellValueParams,
    GridValueGetterParams,
} from "@mui/x-data-grid";
import { Box, Button, Grid } from "@mui/material";
import { applyInitialState } from "@mui/x-data-grid/hooks/features/columns/gridColumnsUtils";
import UserDetails from "../userDetail";
import { forEachChild } from "typescript";

export default function DataTable() {
    const { GetAll } = useActions();
    const { GetUser } = useActions();
    const { user, allUsers } = useTypedSelector((store) => store.UserReducer);
    const [isRedirect, setisRedirect] = useState(false);
    const [isRedirectToDel, setisRedirectToDel] = useState(false);

    useEffect(() => {
        GetAll();
    }, []);

    const rows = allUsers;

    const columns: GridColDef[] = [
        { field: "firstName", headerName: "First name", width: 200 },
        { field: "lastName", headerName: "Last name", width: 200 },
        {
            field: "email",
            headerName: "Email",
            type: "email",
            width: 200,
        },
        {
            field: "phoneNumber",
            headerName: "PhoneNumber",
            width: 200,
        },
        {
            field: "emailConfirmed",
            headerName: "EmailConfirm",
            type: "bool",
            width: 200,
        },
        {
            field: "role",
            headerName: "Role",
            width: 200,
        },

        {
            field: "id",
            headerName: "Actions",
            width: 400,
            sortable: false,
            renderCell: (params: any) => {
                const onClick = async (e: any) => {
                    e.stopPropagation(); // don't select this row after clicking

                    console.log("params.id " + params.id);

                    await GetUser(params.id);

                    setisRedirect(true);
                };

                const delUser = async (e: any) => {
                    e.stopPropagation(); // don't select this row after clicking

                    await GetUser(params.id);

                    setisRedirectToDel(true);
                };

                return (
                    <>
                        {" "}
                        {user.role === "Administrator" && (
                            <Button onClick={onClick}>Edit</Button>
                        )}
                        {user.role === "Administrator" && (
                            <Button onClick={delUser}>Delete</Button>
                        )}
                    </>
                );
            },
        },
    ];

    if (isRedirect) {
        return <Navigate to="/dashboard/userDetails" />;
    }

    if (isRedirectToDel) {
        return <Navigate to="/dashboard/deleteUser" />;
    }

    return (
        <Box sx={{ display: "flex", width: "100%" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ mb: 2, textAlign: "right" }}>
                    {user.role === "Administrator" && (
                        <Button variant="contained">
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "#fff",
                                }}
                                to="/dashboard/addUser"
                            >
                                Add new user
                            </Link>
                        </Button>
                    )}
                </Grid>

                <div style={{ height: 400, width: "100%" }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                </div>
            </Grid>
        </Box>
    );
}
