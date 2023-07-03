import * as React from "react";

import { Button } from "@mui/material";

export default function Header () {
  return (
        <div>
            <Button variant="contained" disabled={true}>Download Resume</Button>
            {/* Call to action -> View resume */}
        </div>
  );
}
