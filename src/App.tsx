import React from "react"
import Apresentacao from "./modulos/apresentacao"
import Experiencia from "./modulos/curriculo_experiencia"
import ConsumoJsonBruto from "./modulos/consumoJsonBruto"
import ConsumoJson from "./modulos/consumoJson"


export function App(props) {
		return (
				<div>
						<Apresentacao />
						<Experiencia />
						<ConsumoJsonBruto />
						<ConsumoJson />
				</div>
		)
}
export default App
