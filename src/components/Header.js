import * as React from 'react'

import { AppBar, Toolbar, Button } from '@mui/material';

export default function Header() {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <Button variant="contained">Hello World</Button>
                    {/* Call to action -> View resume */}
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </div>
    );
}
