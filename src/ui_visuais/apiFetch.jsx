import React from "react";

class ApiFetch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            completo: false,
            dados: [],
            erro: null,
            conteudo: [],
        };
        this.ImporUrl = this.ImporUrl.bind(this);
        this.ImportarSucesso = this.ImportarSucesso.bind(this);
        this.JsonPorExtenso = this.JsonPorExtenso.bind(this);
        this.MontarIncompletoConteudo =
            this.MontarIncompletoConteudo.bind(this);
        this.MontarErroConteudo = this.MontarErroConteudo.bind(this);
    }

    componentDidMount() {
        // this.setState({
        //     incompletoConteudo: this.MontarIncompletoConteudo(),
        // });
        // forceUpdate(callback ?: () => void): void;

        fetch(this.state.url)
            .then((res) => res.json())
            .then(
                (result) => {
                    this.ImportarSucesso(result);
                    // this.setState({
                    //     dados: result,
                    //     conteudo: result.results,
                    //     completo: true,
                    // });
                    // console.log(this.JsonPorExtenso(this.state.conteudo));
                },
                (error) => {
                    this.setState({
                        erro: error,
                        conteudo: (
                            <div id="apiFetch_Erro">
                                Erro em: {error.message}
                            </div>
                        ),
                        completo: true,
                    });
                    console.log(error);
                }
            );
    }

    render() {
        const { url, completo, dados, erro, conteudo } = this.state;
        return conteudo;
    }

    ImporUrl(_url) {
        this.setState({ url: _url });
    }

    ImportarSucesso(_result) {
        this.setState({
            dados: _result,
            conteudo: _result.results,
            completo: true,
        });
        //if debug
        console.log(this.JsonPorExtenso(this.state.conteudo));
    }

    JsonPorExtenso(_objJson) {
        return JSON.stringify(_objJson, null, 4);
    }

    MontarIncompletoConteudo() {
        return <div id="apiFetch_Incompleto">Carregando ...</div>;
    }

    MontarErroConteudo(_erro) {
        return <div id="apiFetch_Erro">Erro em: {_erro.message}</div>;
    }
}

export default ApiFetch;
