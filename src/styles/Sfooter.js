import styled from "styled-components";

export const Footer = styled.footer`
        margin: 0 auto;
        max-width: 1080px;
        width: 100%;
        align-items: center;
        padding-bottom: 5px;
`
export const Web= styled.div`
    @media screen and (min-width: 700px){
        background: #9767A9;
        display: flex;
        justify-content: space-between;
        color: white;
        padding: 2vh 6vw;
    }
`
export const Copy= styled.div`
    width: 55vw;

    @media screen and (max-width: 699px){
        width: 95%;
        margin-left: 10px;
    }
`
export const P = styled.p`
    font-size: 0.7rem;
`
export const Arrow = styled.div`
    @media screen and (min-width: 700px){
        display: flex;
        justify-content: space-evenly;
        width: 20vw;
        align-items: center;
        font-size: 1.7rem;

        a{
            color: white;
            text-decoration: none;
            padding: 0 5px;
            border-radius: 10px;
        }
        a:hover{
            cursor: pointer;
            background-color: white;
            color: #9767A9;
            opacity: 0.3;
        }
        p{
            font-size: 0.6rem;
        }
    }
    @media screen and (max-width: 700px){
        display: none;
    }
`
export const Mobile = styled.div`
    @media screen and (max-width: 700px){
        display: flex;
        justify-content: space-evenly;
        color: #9767A9;
        font-size: 2.5rem;
    }
    @media screen and (min-width: 700px){
        display: none;
    }
`
export const Redes = styled.div`
    @media screen and (min-width: 279px) and (max-width: 700px){
        display: flex;
        justify-content: space-evenly;
        width: 30vw;
        
        a{
            color: #9767A9;
            cursor: pointer;
            border-radius: 10px;
        }
        a:hover{
            opacity: 0.4;
        }
    }
`
export const Arrowmob = styled.div`
     @media screen and (min-width: 279px) and  (max-width: 700px){
        display: flex;
        justify-content: space-evenly;
        width: 30vw;

        a{
            color: #9767A9;
            cursor: pointer;
            border-radius: 10px;
        }
        a:hover{
            opacity: 0.4;
        }
    }
`