import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{   
    padding: 0;
    box-sizing: border-box;    
}

 :focus {
        outline: 0 ;
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple']};
    }
::-webkit-scrollbar{
    width: 20px;    
}

::-webkit-scrollbar-track{
    background: ${(props) => props.theme['base-profile']};
}

::-webkit-scrollbar-thumb{
    background: ${(props) => props.theme['base-border']};
    border-radius: 2px;
}

    body {
        background:${(props) => props.theme['base-background']};
       background: linear-gradient(
        to bottom,
        ${(props) => props.theme['base-background']},
        ${(props) => props.theme['base-border']}
      
       );     
      
        color:${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
         margin: 0 auto;
    }

    a {
        color:${(props) => props.theme['blue']};
        text-decoration: none;
    }

    a:hover{
        color:${(props) => props.theme['purple']};     
        cursor: pointer;
    }

    body, input, textarea, button {
        font: 400 1rem Nunito, sans-serif
    }
`
