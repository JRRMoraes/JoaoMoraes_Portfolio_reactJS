import React from "react";
import Painel from "../ui_visuais/painel";
import Editavel from "../ui_visuais/editavel";
import "./consumoJsonBruto.css";

class ConsumoJsonBruto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            completo: false,
            conteudo: [],
            erro: null,
        };
    }

    componentDidMount() {
        fetch("https://api.randomuser.me/")
            .then((res) => res.json())
            .then(
                (result) => {
                    this.setState({
                        conteudo: result.results,
                        completo: true,
                    });
                    console.log(JSON.stringify(this.state.conteudo, null, 2));
                },
                (error) => {
                    this.setState({
                        erro: error,
                        completo: true,
                    });
                    console.log(error);
                }
            );
    }

    render() {
        const { completo, conteudo, erro } = this.state;

        if (!completo) {
            return <Painel titulo="Consumo Json Bruto">Carregando ...</Painel>;
        } else if (erro) {
            return (
                <Painel titulo="Consumo Json Bruto">
                    Erro em: {erro.message}
                </Painel>
            );
        } else {
            //tratar
            const pessoa = conteudo[0];
            return (
                <Painel titulo="Consumo Json Bruto">
                    {/* //this.state.titulo; */}
                    <h2>
                        {pessoa.name.title}
                        {"  "}
                        {pessoa.name.first}
                        {"  "}
                        {pessoa.name.last}
                    </h2>
                    <p>Nascido em </p>
                    <br />
                    {pessoa.email}
                    {pessoa.gender}
                    <br />
                    <Editavel titulo="E-mail:" valor={pessoa.email}></Editavel>

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
            );
        }
    }

    titulo = "Consumo Json Bruto";
}

export default ConsumoJsonBruto;
