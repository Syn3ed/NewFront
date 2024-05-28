import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

const CustomTextArea = (props) => {
    const [text, setText] = useState(props.text || "");

    useEffect(() => {
        setText(props.text || "");
    }, [props.text]);

    const handleTextChange = (event) => {
        const newText = event.target.value;
        setText(newText);
        props.onTextChange(newText);
    };

    return (
        <div className="CustomTextArea">
            <TextField
                className="custom-textarea"
                label={props.label}
                placeholder={props.placeholder}
                multiline
                variant="standard"
                onChange={handleTextChange}
                value={text}
                InputProps={{
                    disableUnderline: true,
                    style: {
                        fontSize: '16px',
                        color: '#282B2F',
                        fontWeight: 600,
                        lineHeight: '24px',
                        textAlign: 'left',
                        font: 'Onest'
                    }
                }}
                InputLabelProps={{
                    style: {
                        fontSize: '20px',
                        color: '#637175',
                        fontWeight: 600,
                        lineHeight: '24px',
                        textAlign: 'left',
                        font: 'Onest'
                    },
                    placeholder: {
                        fontSize: '20px',
                        color: 'gray',
                        fontWeight: 600,
                        lineHeight: '24px',
                        textAlign: 'left',
                        font: 'Onest'
                    }
                }}
            />
        </div>
    );
}

export default CustomTextArea;
