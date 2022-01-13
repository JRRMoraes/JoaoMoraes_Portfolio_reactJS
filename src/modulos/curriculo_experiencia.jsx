import React from "react";
import experiencias from "../dados/experiencia";
import Painel from "../ui_visuais/painel";

export default (props) => {
    function listarExperiencias() {
        return experiencias.map((exp) => {
            return (
                <li key={exp.id}>
                    {exp.nome} - {exp.periodo}
                    <br />
                    <p>Contato: {exp.site}</p>
                </li>
            );
        });
    }

    return (
        <Painel titulo="Experiências">
            <ul>{listarExperiencias()}</ul>
        </Painel>
    );
};
