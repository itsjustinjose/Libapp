import { AppBar, Button, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>LibApp</Typography>
                <Button ><Link to={'/'}>View</Link></Button>
                <Button><Link to={'/add'}>View</Link>Delete</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar