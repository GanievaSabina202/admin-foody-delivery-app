import { createGlobalStyle } from "styled-components";
import { colors } from "./color";

const GlobalStyle = createGlobalStyle`
    *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
    body,html {
        height:100%;
        margin: 0;
        padding: 0;
        background: ${colors.darkBlue_1};
        font-family:'Roboto', sans-serif;
        color:${colors.white}
    }
    *::-webkit-scrollbar {
  width: 5px;
}
/* Track */
*::-webkit-scrollbar-track {
  background:  ${colors.white}; 
  /* background:  ${colors.darkBlue_3};  */
}
 
/* Handle */
*::-webkit-scrollbar-thumb {
  background:  ${colors.lightPurple_2}; 
}
/* Handle on hover */
*::-webkit-scrollbar-thumb:hover {
  background:  ${colors.lightPurple_2}; 
}
`;
export default GlobalStyle