import * as React from 'react'

import { AppBar, Toolbar, Button } from '@mui/material';

export default function Header() {
    console.log("Header")
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Button variant="contained">Hello World</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
