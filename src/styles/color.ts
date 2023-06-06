import color from './color.module.scss';

const COLOR: {
  light: { [key: string]: string };
  dark: { [key: string]: string };
  solid: { [key: string]: string };
} = {
  light: {
    primary000: color.light_primary000,
    primary100: color.light_primary100,
    primary200: color.light_primary200,
    primary300: color.light_primary300,
    primary400: color.light_primary400,
    primary500: color.light_primary500,
    primary600: color.light_primary600,
    primary700: color.light_primary700,
    blue000: color.light_blue000,
    blue100: color.light_blue100,
    blue200: color.light_blue200,
    blue300: color.light_blue300,
    blue400: color.light_blue400,
    blue500: color.light_blue500,
    blue600: color.light_blue600,
    blue700: color.light_blue700,
    green000: color.light_green000,
    green100: color.light_green100,
    green200: color.light_green200,
    green300: color.light_green300,
    green400: color.light_green400,
    green500: color.light_green500,
    green600: color.light_green600,
    green700: color.light_green700,
    red000: color.light_red000,
    red100: color.light_red100,
    red200: color.light_red200,
    red300: color.light_red300,
    red400: color.light_red400,
    red500: color.light_red500,
    red600: color.light_red600,
    red700: color.light_red700,
  },
  dark: {
    primary000: color.dark_primary000,
    primary100: color.dark_primary100,
    primary200: color.dark_primary200,
    primary300: color.dark_primary300,
    primary400: color.dark_primary400,
    primary500: color.dark_primary500,
    primary600: color.dark_primary600,
    primary700: color.dark_primary700,
    blue000: color.dark_blue000,
    blue100: color.dark_blue100,
    blue200: color.dark_blue200,
    blue300: color.dark_blue300,
    blue400: color.dark_blue400,
    blue500: color.dark_blue500,
    blue600: color.dark_blue600,
    blue700: color.dark_blue700,
    green000: color.dark_green000,
    green100: color.dark_green100,
    green200: color.dark_green200,
    green300: color.dark_green300,
    green400: color.dark_green400,
    green500: color.dark_green500,
    green600: color.dark_green600,
    green700: color.dark_green700,
    red000: color.dark_red000,
    red100: color.dark_red100,
    red200: color.dark_red200,
    red300: color.dark_red300,
    red400: color.dark_red400,
    red500: color.dark_red500,
    red600: color.dark_red600,
    red700: color.dark_red700,
  },
  solid: {
    white: color.white,
    black: color.black,
  },
};

export { COLOR };
