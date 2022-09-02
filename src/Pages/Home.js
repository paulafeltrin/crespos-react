import React from "react";
import Footer from './Fragment/Footer';
import banner from '../img/galery/cabeludo.png'

import img1 from '../img/galery/NoPath_Copia52.png'
import img2 from '../img/galery/NoPath_Copia54.png'
import img3 from '../img/galery/NoPath_Copia11.png'
import img4 from '../img/galery/NoPath_Copia10.png'
import img5 from '../img/galery/NoPath_Copia12.png'
import img6 from '../img/galery/gloriamaria.png'
import img7 from '../img/galery/NoPath_Copia53.png'
import img8 from '../img/galery/NoPath_Copia14.png'
import img9 from '../img/galery/cabelo_snoopydog.png'
import img10 from '../img/galery/NoPath_Copia9.png'
import * as S from '../styles/Shome'

export default function Home(){
    return(
        <>
            <S.Main>
            <S.Fig>
                <img src={banner} alt="img-homem de cabelo cacheado" />
            </S.Fig>
            <S.Figh1>Dicas e truques</S.Figh1>
            <S.Figp>De quem sabe muito de cabelos crespos</S.Figp>
            <S.T2>
                <S.H2>7 passos para se apaixonar pelo seu cabelo crespo natural</S.H2>
                <section>
                    <p>Sabemos que a jornada para a aceitação do cabelo crespo natural é longa e nada fácil de trilhar.</p>
                    <p>Afinal, é difícil se libertar das amarras e aprender a se amar depois de anos vivendo em uma sociedade preconceituosa que reprime as características mais comuns do ser humano, como a textura do seu cabelo.</p>
                    <p>Se você está disposta a se aventurar nesse caminho de autoconhecimento e aceitação, vem com a gente! E um segredo: não precisa ter medo!</p>
                </section>
            </S.T2>
                
            


            <S.Section>
                <S.Img1 src={img1} alt="img-homem com coroa"></S.Img1>
                <S.Img2 src={img2} alt="img-mulher de cachos"></S.Img2>
                <S.Img3 src={img3} alt="img-homem fumando"></S.Img3>
                <S.Img4 src={img4} alt="img-homem de cachos"></S.Img4>
                <S.Img5 src={img5} alt="img-mulher"></S.Img5>
                <S.Img6 src={img6} alt="img - gloria maria"></S.Img6>
                <S.Img7 src={img7} alt="img-homem"></S.Img7>
                <S.Img8 src={img8} alt="img - mulher de cachos"></S.Img8>
                <S.Img9 src={img9} alt="img-snoopydog"></S.Img9>
                <S.Img10 src={img10} alt="img - homem negro"></S.Img10>
            </S.Section>
            </S.Main>
            <Footer />
        </>
    )
}
