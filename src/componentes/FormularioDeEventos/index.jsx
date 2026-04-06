import './formularo-de-eventos.estilos.css'
import { TituloFormulario } from '../TituloFormulario'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { Label } from '../Label'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { Botao } from '../botao'
import { ListaSuspensa } from '../ListaSuspensa'

export function FormularioDeEventos({ temas, aoSubmeter }) {

  function aoFormSubmetido(formData) {
    console.log('opa, tá na hora de criar um novo evento', formData);
    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item) {
        return item.id == formData.get('tema')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento')
    }
    aoSubmeter(evento);

  }

  return (
    <form className='form-evento' action={aoFormSubmetido}>
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
            name='nomeEvento'
            placeholder='Summer dev hits' />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="capa">
            Qual o endereço da imagem da capa ?
          </Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            placeholder='http://...'
            name='capa' />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do evento
          </Label>
          <CampoDeEntrada
            type="date"
            id="dataEvento"
            name='dataEvento'
           />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="tema">
            Tema do Evento
          </Label>
          <ListaSuspensa id="tema" name="tema" itens={temas} />
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
