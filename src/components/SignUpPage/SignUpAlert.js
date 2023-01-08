import React, { useState } from "react";
import {Alert, AlertTitle} from '@mui/material';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';

function SignUpAlert({isError, handleClick}) {
  const component 
    = isError? (
    <Alert sx={{width:"100%", height:"40px"}} severity="error">
      <AlertTitle>
        Server not found. Try again.
        <IconButton onClick={handleClick} color="secondary" aria-label="add an alarm">
          <CloseIcon/>
        </IconButton>
      </AlertTitle>
      </Alert>
    ): <div></div>
    return component
}

export default SignUpAlert