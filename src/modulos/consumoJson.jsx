import React from "react";
import Painel from "../ui_visuais/painel";
import Fecth_RandomUser_Div from "../dados/Fecth_RandomUser_div";
import ApiFetch from "../ui_visuais/apiFetch";
import Fecth_RandomUser_Heranca from "../dados/Fecth_RandomUser_Heranca";

export default (props) => {
    return (
        <Painel titulo="Consumo Json  Fecth_RandomUser">
            2A
            {/* <Fecth_RandomUser_Div /> */}
            <br />
            <Fecth_RandomUser_Heranca />
            <br />
            ===== COMO DIV ===== 2B
            <div>{Fecth_RandomUser_Heranca}</div>
            <br />
            <br />
            {/* <br />
            <br />

            <br />
            <br />
            <br />
            <ApiFetch url="https://api.randomuser.me/"></ApiFetch> */}
        </Painel>
    );
};
