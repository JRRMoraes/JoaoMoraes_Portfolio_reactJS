import React, { useState } from "react";
import Painel from "../ui_visuais/painel";

export default (props) => {
    const [idade, setIdade] = useState(42);
    const [experienciaDelphi, setExperienciaDelphi] = useState(15);

    /*     const [nome, setNome] = useState("João Ricardo Rodrigues de Moraes");
    const [idade, setIdade] = useState(42);


    return (
        <Painel titulo="Portfólio de {nome} ">
            Sou <b>{nome}</b>, com {idade} anos, experiente em Delphi e SQL ({" "}
            {experienciaDelphi} anos ) e aprendendo novas tecnólogias, como o
            ReactJS em 2022.
        </Painel>
    ); */

    return (
        <Painel titulo="Portfólio de João Ricardo Rodrigues de Moraes">
            Sou <b>João Ricardo Rodrigues de Moraes</b>, com {idade} anos,
            experiente em Delphi e SQL ( {experienciaDelphi} anos ) e aprendendo
            novas tecnólogias, como o ReactJS em 2022.
        </Painel>
    );
};
