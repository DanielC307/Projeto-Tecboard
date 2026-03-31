import './cardeventos.estilos.css'
export function CardEvento({ evento }) {
    return (
        <div className='cardevento'>
            <img src={evento.capa} alt={evento.titulo} />
            <div className='corpo'>
                <p className='tag'>
                    {evento.tema.nome}
                </p>
                <p>
                    {evento.data.toLocaleDateString('pt-br')}
                </p>
                <h4 className='titulo'>
                    {evento.titulo}
                </h4>
            </div>
        </div>
    )
}