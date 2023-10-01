import React, { useState } from "react";
import Painel from "../ui_visuais/painel";

export default (props) => {
    const [nome, setNome] = useState("João Ricardo Rodrigues de Moraes");
    const [idade, setIdade] = useState(42);
    const [experienciaDelphi, setExperienciaDelphi] = useState(15);

    return (
        <Painel titulo="Portfólio de João Ricardo Rodrigues de Moraes">
            Sou <b>{nome}</b>, com {idade} anos, experiente em Delphi e SQL ({" "}
            {experienciaDelphi} anos ) e aprendendo novas tecnólogias, como o
            ReactJS em 2022.
        </Painel>
    );
};
