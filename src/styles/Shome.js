import styled from "styled-components";
import banner from '../img/galery/cabeludo.png'

export const Main = styled.main`
    margin: 0 auto;
    max-width: 1080px;
    width: 100%;
    align-items: center;
`

export const Fig = styled.figure`
    position: relative;
    border: 2px solid red;

    img{
        object-fit: contain;
        width: 100%;
        display: flex;
        position: relative;

    }
`
export const Figh1 = styled.h1`
    @media (min-width: 1067px) and (max-width: 1080px){
        font-style: normal;
        width: 20%;
        color: white;
        font-size: 3.5rem;
        line-height: 3rem;
        position: absolute;
        bottom: 5%;
        left: 15%;  
    }
    @media screen and (min-width: 942px) and (max-width: 1066px){
        font-style: normal;
        width: 20%;
        color: white;
        font-size: 3rem;
        line-height: 2.7rem;
        position: absolute;
        bottom: 0%;
        left: 15%;
    }
    @media screen and (min-width: 805px) and (max-width: 941px){
        font-style: normal;
        width: 20%;
        color: white;
        font-size: 3rem;
        line-height: 2.3rem;
        position: absolute;
        top: 70%;
        left: 15%;
        border: 2px solid green;
    }
    @media screen and (max-width: 804px){
        font-weight: lighter;
        display: flex;
        position: absolute;
        width: 70%;
        color: white;
        text-align: left;
        font-size: 2rem;
        left: 15%;
        bottom: 40%;
        right: 17%;
        border: 2px solid green;
    }
`
export const Figp = styled.p`
    @media (min-width: 1067px) and (max-width: 1080px){
        font-weight: lighter;
        position: absolute;
        width:  15%;
        color: white;
        text-align: left;
        font-size: 1.2rem;
        bottom: 10%;
        right: 17%;
    }
    @media screen and (min-width: 805px) and (max-width: 1066px){
        font-weight: lighter;
        position: absolute;
        width: 20%;
        color: white;
        text-align: left;
        font-size: 1.2rem;
        bottom: 10%;
        right: 17%;
        border: 2px solid green;
    }
    @media screen and (max-width: 804px){
        font-weight: lighter;
        display: flex;
        position: absolute;
        width: 70%;
        color: white;
        text-align: left;
        font-size: 1.2rem;
        left: 15%;
        bottom: 20%;
        right: 17%;
        border: 2px solid green;
    }
    @media screen and (max-width: 522px){
        font-weight: lighter;
        display: flex;
        position: absolute;
        width: 70%;
        color: white;
        text-align: left;
        font-size: 1rem;
        left: 15%;
        bottom: 35%;
        right: 17%;
        border: 2px solid green;
    }
`
export const T2 = styled.section`
    @media screen and (min-width: 805px){
        padding: 3vh 7vw 5vh 7vw;
        background-color: #9767A9;
        color: white;
        display: flex;
    }
    @media screen and (max-width: 805px){
        padding: 3vh 7vw 5vh 7vw;
        background-color: #9767A9;
        color: white;
        display: flex;
        flex-direction: column;
    }
`
export const H2 = styled.h2`
    @media screen and (min-width: 805px){
        font-style: normal;
        font-size: 2rem;
        width: 100%;
        padding-right: 3vw;
    }
    @media screen and (max-width: 805px){
        font-style: normal;
        font-size: 2rem;
        width: 100%;
    }
`
export const Section = styled.div`
    @media screen and (min-width: 705px){
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-gap: 15px;
        padding: 2vh 0; 
    
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
    }
        img:hover{
            border: 1px solid black;
            cursor: pointer;
            transform: scale(1.2);
        }
    } 
    @media screen and (max-width: 704px){
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(8, 25vw);
        grid-gap: 15px;
        padding: 2vh 2vw;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
    }
        img:hover{
            border: 1px solid black;
            cursor: pointer;
            transform: scale(1.2);
        }
    } 
`
export const Img1 = styled.img`
    @media screen and (min-width: 705px){
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
    }
    @media screen and (max-width: 704px){
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 4;
    }
`
export const Img2 = styled.img`
    @media screen and (min-width: 705px){
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 2;
    }
    @media screen and (max-width: 704px){
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 1;
    }
`
export const Img3 = styled.img`
    @media screen and (min-width: 705px){
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 3;
    }
    @media screen and (max-width: 704px){
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 6;
        grid-row-end: 9;
    }
`
export const Img4 = styled.img`
    @media screen and (min-width: 705px){
        grid-column-start: 5;
        grid-column-end: 7;
        grid-row-start: 1;
        grid-row-end: 4;
    }
    @media screen and (max-width: 704px){
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 6;
        grid-row-end: 8;
    }
`
export const Img5 = styled.img`
    @media screen and (min-width: 705px){
        grid-column-start: 7;
        grid-column-end: 8;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    @media screen and (max-width: 704px){
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 8;
        grid-row-end: 9;
    }
`
export const Img6 = styled.img`
    @media screen and (min-width: 705px){
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 4;
        grid-row-end: 3;
    }
    @media screen and (max-width: 704px){
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 4;
        grid-row-end: 6;
    }
`
export const Img7 = styled.img`
    @media screen and (min-width: 705px){
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 3;
    }
    @media screen and (max-width: 704px){
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 1;
    }
`
export const Img8 = styled.img`
    @media screen and (min-width: 705px){
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 3;
        grid-row-end: 4;
    }
    @media screen and (max-width: 704px){
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 2;
        grid-row-end: 4;
    }
`
export const Img9 = styled.img`
    @media screen and (min-width: 705px){
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 3;
        grid-row-end: 4;
    }
    @media screen and (max-width: 704px){
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 8;
        grid-row-end: 9;
    }
`
export const Img10 = styled.img`
    @media screen and (min-width: 705px){
        grid-column-start: 7;
        grid-column-end: 8;
        grid-row-start: 2;
        grid-row-end: 4;
    }
    @media screen and (max-width: 704px){
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 6;
        grid-row-end: 8;
    }
`
