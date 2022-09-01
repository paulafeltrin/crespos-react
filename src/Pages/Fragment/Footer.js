import React from 'react';
import { GrFacebookOption } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { IoLogoYoutube } from "react-icons/io";
import { FiArrowUp } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import * as S from '../../styles/Sfooter'

export default class Footer extends React.Component{
    render(){
        return(
            <S.Footer>
                <S.Mobile>
                    <S.Redes>
                        <a href="#"><GrFacebookOption /></a>
                        <a href="#"><FiInstagram /></a>
                        <a href="#"><IoLogoYoutube /></a>
                    </S.Redes>
                    <S.Arrowmob>
                        <a href="#"><FiArrowLeft /></a>
                        <a href="#"><FiArrowUp /></a>
                        <a href="#"><FiArrowRight /></a>
                    </S.Arrowmob>
                </S.Mobile>

                <S.Web>
                    <S.Copy>
                        <S.P>Layout produzido por Paula para fins exclusivamente educacionais.</S.P>
                        <S.P>Referência: https://br.pinterest.com/pin/464644886562532897/ e https://todecacho.com.br/cabelo-crespo-natural/</S.P>
                    </S.Copy>
                    <S.Arrow>
                        <a href="#"><FiArrowLeft /><p>Página anterior</p></a>
                        <a href="#"><FiArrowUp /><p>Voltar ao topo</p></a>
                        <a href="#"><FiArrowRight /><p>Próxima página</p></a>
                    </S.Arrow>
                </S.Web>
            </S.Footer>
        )
    }
}