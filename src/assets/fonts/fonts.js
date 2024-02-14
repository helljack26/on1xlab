import { createGlobalStyle } from 'styled-components';

import RubikLightEot from './Rubik-Light/Rubik-Light.eot';
import RubikLightOtf from './Rubik-Light/Rubik-Light.otf';
import RubikLightTtf from './Rubik-Light/Rubik-Light.ttf';
import RubikLightWoff from './Rubik-Light/Rubik-Light.woff';

import RubikRegularEot from './Rubik-Regular/Rubik-Regular.eot';
import RubikRegularOtf from './Rubik-Regular/Rubik-Regular.otf';
import RubikRegularTtf from './Rubik-Regular/Rubik-Regular.ttf';
import RubikRegularWoff from './Rubik-Regular/Rubik-Regular.woff';

import RubikMediumEot from './Rubik-Medium/Rubik-Medium.eot';
import RubikMediumOtf from './Rubik-Medium/Rubik-Medium.otf';
import RubikMediumTtf from './Rubik-Medium/Rubik-Medium.ttf';
import RubikMediumWoff from './Rubik-Medium/Rubik-Medium.woff';



export default createGlobalStyle`
    @font-face {
        font-family: 'Rubik-Medium';
        src: local('Rubik-Medium'), local('Rubik-Medium'),
        url(${RubikMediumEot}) format('eot'),
        url(${RubikMediumOtf}) format('otf'),
        url(${RubikMediumTtf}) format('ttf'),
        url(${RubikMediumWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Rubik-Regular';
        src: local('Rubik-Regular'), local('Rubik-Regular'),
        url(${RubikRegularEot}) format('eot'),
        url(${RubikRegularOtf}) format('otf'),
        url(${RubikRegularTtf}) format('ttf'),
        url(${RubikRegularWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Rubik-Light';
        src: local('Rubik-Light'), local('Rubik-Light'),
        url(${RubikLightEot}) format('eot'),
        url(${RubikLightOtf}) format('otf'),
        url(${RubikLightTtf}) format('ttf'),
        url(${RubikLightWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;


