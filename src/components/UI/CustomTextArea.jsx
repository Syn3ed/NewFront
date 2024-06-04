import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const CustomTextArea = (props) => {
    const [text, setText] = useState(props.text || "");
    const [remainingChars, setRemainingChars] = useState(props.maxLength);

    useEffect(() => {
        setText(props.text || "");
        setRemainingChars(props.maxLength - (props.text ? props.text.length : 0));
    }, [props.text, props.maxLength]);

    const handleTextChange = (event, value) => {
        const newText = value !== undefined ? value : event.target.value;
        if (props.maxLength && newText.length > props.maxLength) {
            return;
        }
        setText(newText);
        setRemainingChars(props.maxLength - newText.length);
        props.onTextChange(newText);
    };

    const renderOption = (props, option, { selected }) => (
        <li {...props} style={{ borderBottom: '2px solid #ddd' }}>
            {option}
        </li>
    );

    return (
        <div className="CustomTextArea">
            {props.options ? (
                <Autocomplete
                    options={props.options}
                    inputValue={text}
                    onInputChange={(event, value) => handleTextChange(event, value)}
                    renderOption={renderOption}
                    freeSolo
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={props.label}
                            placeholder={props.placeholder}
                            multiline
                            variant="standard"
                            InputProps={{
                                ...params.InputProps,
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
                    )}
                />
            ) : (
                <TextField
                    className="custom-textarea"
                    label={props.label}
                    placeholder={props.placeholder}
                    multiline
                    variant="standard"
                    onChange={handleTextChange}
                    value={text}
                    inputProps={{
                        maxLength: props.maxLength,
                    }}
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
            )}
            {props.maxLength && (
                <div style={{ textAlign: 'right', fontSize: '12px', color: '#637175' }}>
                    Осталось символов: {remainingChars}
                </div>
            )}
        </div>
    );
}

export default CustomTextArea;
