import React from 'react';
import TextField from '@mui/material/TextField';

const CustomTextInput = (props) => {
    return (
        <div className="CustomTextInput">
            <TextField
                className="custom-textarea"
                label={props.label}
                multiline
                variant="standard"
                defaultValue={props.text}
                InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                    style: {
                        fontSize: '16px',
                        color: '#000',
                        fontWeight: 600,
                        lineHeight: '24px',
                        textAlign: 'left',
                        font: 'Onest'
                    }
                }}
                InputLabelProps={{
                    style: {
                        // shrink: true,
                        fontSize: '20px',
                        color: 'gray',
                        fontWeight: 600,
                        lineHeight: '24px',
                        textAlign: 'left',
                        font: 'Onest',
                       
                    }
                }}
            />
        </div>
    );
}

export default CustomTextInput;
