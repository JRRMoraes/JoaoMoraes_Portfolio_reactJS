import { useState, useEffect } from "react"


export enum ConjuntoFetchEstado {
    _cfeInicio,
    cfeCarregando,
    cfeSucesso,
    cfeErro
}


export interface IProps_ConsumirFetch {
    url: string
    headers: Headers
}


export type IReturn_ConsumirFetch = {
    retorno: string
    estado: ConjuntoFetchEstado
    erro: string
}


export function ConsumirFetch({
    url,
    headers
}: IProps_ConsumirFetch
): IReturn_ConsumirFetch {

    const [retorno, setRetorno] = useState("")


    const [estado, setEstado] = useState<ConjuntoFetchEstado>(ConjuntoFetchEstado._cfeInicio)


    const [erro, setErro] = useState("")


    function FormatarHeaders() {
        if (!headers)
            headers = new Headers()
        if (!headers.has("Content-Type"))
            headers.append("Content-Type", "application/json")
        return headers
    }


    useEffect(() => {
        console.log("ConsumirFetch", url)
        fetch(url, {
            method: "GET",
            mode: "cors",
            headers: FormatarHeaders()
        })
            .then((respondendo) => respondendo.json())
            .then((resposta) => {
                setEstado(ConjuntoFetchEstado.cfeSucesso)
                setRetorno(resposta)
            })
            .catch((errado: Error) => {
                setEstado(ConjuntoFetchEstado.cfeErro)
                setErro(errado.name + " > " + errado.message)
            })
    }, [])


    return { retorno, estado, erro }
}