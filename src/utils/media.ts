import { css } from "styled-components";

const sizes: { [key: string]: number } = {
  mobileS: 375,
  mobile: 640,
  tablet: 992,
  desktop: 1200,
};

export const media = Object.keys(sizes).reduce((acc: any, label: string) => {
  acc[label] = (args: TemplateStringsArray) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(args)}
    }
  `;
  return acc;
}, {});
