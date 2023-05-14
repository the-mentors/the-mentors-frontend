import { css } from 'styled-components';


const variables = {
  flex: (direction = 'row', justify = 'center', align = 'center') => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,

  position: (position = 'relative', top = '0px', right = '0px') => `
    position: ${position};
    top : ${top};
    right : ${right};
  `,

  positionCenter: (position = 'absolute') => css`
    position: ${position};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,

  positionX: (position = 'absolute') => css`
    position: ${position};
    left: 50%;
    transform: translateX(-50%);
  `,

  positionY: (position = 'absolute') => css`
    position: ${position};
    top: 50%;
    transform: translateY(-50%);
  `,

  customFlex : (justify = "center", align = "center", direction = "row") => `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
  `,
  lightFontWeight: `
  font-weight: 100;`,
  regularFontWeight: `
  font-weight: 400`,
  boldFontWeight: `
  font-weight: 700`,
};

export default variables;
