import { useState, Dispatch, SetStateAction, useEffect } from "react"


export function CriarState<T>(
    original: T
): [T, Dispatch<SetStateAction<T>>] {
    const [valor, setValor] = useState<T>(original)
    return [valor, setValor]
}


export function CriarStateComLocalStorage<T>(
    chaveStorage: string,
    original: T
): [T, Dispatch<SetStateAction<T>>] {

    function CarregarInicial() {
        let inicial = original
        let carregado = localStorage.getItem(chaveStorage)
        if (carregado)
            inicial = (JSON.parse(carregado) as T)
        return inicial
    }


    const [valor, setValor] = useState<T>(CarregarInicial())


    useEffect(() => {
        localStorage.setItem(chaveStorage, JSON.stringify(valor))
    },
        [valor]
    )


    return [valor, setValor]
}
