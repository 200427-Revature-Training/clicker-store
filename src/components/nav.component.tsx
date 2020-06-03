import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, makeStyles, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
}));

export const NavComponent: React.FC<RouteComponentProps> = (props) => {

    const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Clicker Store
                </Typography>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => setMenuAnchor(e.currentTarget)}    
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            <Menu
                id="simple-menu"
                anchorEl={menuAnchor}
                keepMounted
                open={Boolean(menuAnchor)}
                onClose={() => setMenuAnchor(null)}
            >
                <MenuItem onClick={() => props.history.push('/')}>Clicker Home</MenuItem>
                <MenuItem onClick={() => props.history.push('/store')}>Store</MenuItem>
                <MenuItem onClick={() => props.history.push('/display')}>Display</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default withRouter(NavComponent);