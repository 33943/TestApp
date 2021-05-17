import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

export const COLORS = {
    //base colors
    blue1: '#0066B3',
    blue2: '#0095D6',
    orange: '#F78B1F',
    green: '#00AC54',
    brown: '#BA8860',
    red: '#D81920',
    purple: '#993F98',
    yellow: '#FFCB05',
    gray1: '#77787B',
    gray2: '#6D6E71',
    red: '#FF0000',
};

export const SIZES = {
    //global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 23,

    //font sizes
    h1: 36,
    h2: 24,
    h3: 18,
    h4: 14,
    h5: 12,

    //app dimensions
    width,
    height,
};

export const FONTS = {
    h1: { fontFamily: "BMDOHYEON_ttf", fontSize: SIZES.h1, lineHeight:50 },
    h2: { fontFamily: "BMDOHYEON_ttf", fontSize: SIZES.h2, lineHeight:30 },
    h3: { fontFamily: "BMDOHYEON_ttf", fontSize: SIZES.h3, lineHeight:24 },
    h4: { fontFamily: "BMDOHYEON_ttf", fontSize: SIZES.h4, lineHeight:20 },
    h5: { fontFamily: "BMDOHYEON_ttf", fontSize: SIZES.h5, lineHeight:16 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;