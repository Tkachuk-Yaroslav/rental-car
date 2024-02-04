import { createGlobalStyle } from 'styled-components';

import 'modern-normalize';
import ManropeMedium from '../fonts/Manrope-Medium.ttf';
import ManropeRegular from '../fonts/Manrope-Regular.ttf';
import ManropeSemiBold from '../fonts/Manrope-SemiBold.ttf';

import MontserratRegular from '../fonts/Montserrat-Regular.ttf';
import MontserratSemiBold from '../fonts/Montserrat-SemiBold.ttf';

const GlobalStyle = createGlobalStyle` 
@font-face {
        font-family: 'ManropeMedium';
        src: local('ManropeMedium'),
        url(${ManropeMedium}) format('ttf');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'ManropeSemiBold';
        src: local('ManropeSemiBold'),
        url(${ManropeSemiBold}) format('ttf');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'ManropeRegular';
        src: local('ManropeRegular'),
        url(${ManropeRegular}) format('ttf');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'MontserratRegular';
        src: local('MontserratRegular'),
        url(${MontserratRegular}) format('ttf');
        font-weight: 400;
        font-style: normal;
    }

     @font-face {
        font-family: 'MontserratSemiBold';
        src: local('MontserratSemiBold'),
        url(${MontserratSemiBold}) format('ttf');
        font-weight: 600;
        font-style: normal;
    }




body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    font-family: 'ManropeRegular';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* code {
    font-family: 'Roboto', sans-serif;
} */

a {
    text-decoration: none;
    color: currentColor;
}

p {
    padding: 0;
    margin: 0;
}


ul,
ol {
    list-style: none;
    padding: 0;
    margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    padding: 0;
}

h2 {
    font-family: 'ManropeSemiBold';
    /* color: #EFEDE8; */

}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

input,
textarea,
select,
button {
    font: inherit;
}

button {
    cursor: pointer;
    border: none;

}

`;

export default GlobalStyle;
