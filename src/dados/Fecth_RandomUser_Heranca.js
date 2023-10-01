import React from "react";
import ApiFetch from "../ui_visuais/apiFetch";
import Painel from "../ui_visuais/painel";
import Editavel from "../ui_visuais/editavel";

class Fecth_RandomUser_Heranca extends ApiFetch {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.ImporUrl("https://api.randomuser.me/");
    }

    render() {
        const { url, completo, dados, erro, conteudo } = this.state;

        if (!completo || erro) {
            return conteudo;
        } else {
            //tratar
            const pessoa = conteudo[0];

            return (
                <div>
                    3Aaaaa {pessoa.name.last}
                    <Painel titulo="Consumo Json Bruto">
                        {/* //this.state.titulo; */}
                        <h2>
                            {pessoa.name.title} {pessoa.name.first}
                            {pessoa.name.last}
                        </h2>
                        <p>Nascido em </p>
                        <br />
                        {pessoa.email}
                        {pessoa.gender}
                        <br />
                        <Editavel
                            titulo="E-mail:"
                            valor={pessoa.email}
                        ></Editavel>

                        {/* <ul>
                        {conteudo.map((C) => (
                            <li key={C.name}>
                                <div> {C.email}</div>
                            </li>
                        ))}
                    </ul> */}
                        <div>
                            {conteudo.map((C) => (
                                <div id={C.name.first}>
                                    <h2>
                                        {pessoa.name.title} {pessoa.name.first}
                                        {pessoa.name.last}
                                    </h2>
                                    <div> {C.email}</div>
                                    <Editavel
                                        titulo="E-mail:"
                                        valor={C.email}
                                    ></Editavel>
                                </div>
                            ))}
                        </div>
                        <br />
                        <div>
                            <h2>=== JSON ===</h2>
                            <div>{JSON.stringify(conteudo, null, 4)}</div>
                        </div>
                    </Painel>
                </div>
            );
        }
    }
}

export default Fecth_RandomUser_Heranca;
