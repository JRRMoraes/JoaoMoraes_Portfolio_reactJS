import React from "react";

class Editavel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: props.titulo,
            valor: props.valor,
            valorOriginal: props.valor,
            emEdicao: false,
            tituloAcima: props.tituloAcima | true,
        };
        this.MontarTitulo = this.MontarTitulo.bind(this);
        this.FoiAlterado = this.FoiAlterado.bind(this);
    }

    render() {
        const { titulo, valor, valorOriginal, emEdicao, tituloAcima } =
            this.state;
        const { divTitulo } = this.MontarTitulo();
        return (
            <div>
                a <this.MontarTitulo /> a2 {this.MontarTitulo()} a3 b{" "}
                <div>{valor}</div>c <div>{this.FoiAlterado}</div>d{" "}
                <div>{titulo}</div>e {".. "}
                <divTitulo /> f{tituloAcima}
            </div>
        );
    }

    MontarTitulo() {
        return (
            <div>
                {this.state.titulo} {this.state.tituloAcima}
            </div>
        );
    }

    FoiAlterado() {
        return this.valor !== this.valorOriginal;
    }
}

export default Editavel;
