import React from "react";
import "./painel.css";

function Painel(props) {
    return (
        <div className="Painel">
            <div className="Titulo">{props.titulo}</div>
            <div className="Conteudo">{props.children}</div>
            <div className="Rodape">{props.rodape}</div>
        </div>
    );
}

export default Painel;
