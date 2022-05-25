import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';

export const TopHeaderButton = styled(Button)({
    color: '#fafcfe',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 18,
    padding: '6px 12px',
    lineHeight: 1.5,
    borderColor: '#fffffb',
    borderRadius: 15,
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#fffdfd',
        boxShadow: 'none',
        color: '#111111'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#cbc4cc',
        borderColor: '#bbbcbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

export const BottomHeaderButton = styled(Button)({
    color: '#fafcfe',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 15,
    //padding: '6px 12px',
    lineHeight: 1.5,
    borderColor: '#fffffb',
    borderRadius: 15,
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#fffdfd',
        boxShadow: 'none',
        color: '#111111'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#cbc4cc',
        borderColor: '#bbbcbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});