import './formularo-de-eventos.estilos.css'
import { TituloFormulario } from '../TituloFormulario'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { Label } from '../Label'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { Botao } from '../botao'
import {ListaSuspensa} from '../ListaSuspensa'

export function FormularioDeEventos() {

  return (
    <form className='form-evento'>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <div className='campos'>
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">
            Qual o nome do evento?
          </Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            placeholder='Summer dev hits' />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do evento
          </Label>
          <CampoDeEntrada
            type="date"
            id="dataEvento"
            placeholder='Summer dev hits' />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do evento
          </Label>
          <ListaSuspensa />
        </CampoDeFormulario>
      </div>
      <div className='acoes'>
        <Botao>
          Criar Evento
        </Botao>
      </div>
    </form>
  )
}
