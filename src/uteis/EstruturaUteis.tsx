export interface IBase_Ajuste {
    _ajusteVersao?: number
    _ajusteData?: Date
}


export function ProcessarIBaseAjuste(baseAjuste: IBase_Ajuste) {
    if (!baseAjuste._ajusteVersao)
        baseAjuste._ajusteVersao = -1
    else
        baseAjuste._ajusteVersao++
    baseAjuste._ajusteData = new Date()
}


export interface IReturn_AprovarEFormatar {
    aprovado: boolean
    ehNovo: boolean
    inconsistencia: string
}