import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function MYCheckbox() {
    return (
        <Autocomplete
            multiple
            sx={{ padding: '18px', marginLeft: '10px' }}
            id="checkboxes-tags-demo"
            options={Interest}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.title}
                </li>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
                <TextField {...params} label="Interested In" placeholder="Cricket, Tech, Health, etc..." />
            )}
        />
    );
}

const Interest = [
    { title: 'Health' },
    { title: 'Technology' },
    { title: 'Cricket' },
    { title: 'Football' },
    { title: 'Study' },
    { title: 'Psychology' },
    { title: 'Psychology' },
];
