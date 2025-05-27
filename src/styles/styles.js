

// Cores principais
const PINK = '#ef6599';
const YELLOW = '#FEC43C';
const GREEN = '#62C682';
const BLUE = '#65C4F5';
const LIGHT_YELLOW = '#FDE6A9';
const WHITE = '#fff';
const BLACK = '#000';

export const colors = {
    // #ef6599
    // #FEC43C
    // #62C682
    // #65C4F5
    // #FDE6A9
    screen: {
        auth:{
            login: {
                background: WHITE,
                text: PINK,
                border: PINK,
                inputBorder: PINK,
            },
            register: {
                background: PINK,
                text: WHITE,
                border: YELLOW,
                inputBorder: YELLOW,
            },
        }
    },

    text:{
        or_auth: PINK,
    },
    text_input: {
        border:  PINK,
    },
    button: {
        background: LIGHT_YELLOW,
        text_black: BLACK,
        text_white: WHITE,
        border: WHITE,
        
        confirm: {
            background: GREEN,
            text: WHITE,
        },
        cancel: {
            background: YELLOW,
            text: WHITE,
        },
        google: {
            background: PINK,
            text: BLACK,
            border: PINK,
        }
    }
}