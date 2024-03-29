import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import { Link } from "react-router-dom";

export const adminMenu = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <Link to="">
                {" "}
                <ListItemText primary="Dashboard" />
            </Link>
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <Link to="users">
                {" "}
                <ListItemText primary="Users" />
            </Link>
        </ListItemButton>
    </React.Fragment>
);

export const userMenu = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <Link to="">
                {" "}
                <ListItemText primary="Dashboard" />
            </Link>
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <Link to="users">
                {" "}
                <ListItemText primary="Users" />
            </Link>
        </ListItemButton>
    </React.Fragment>
);
