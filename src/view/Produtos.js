import camiseta_dreamer from './img/camiseta_dreamer.png';
import camiseta_broken_saints from './img/camiseta_broken_saints.png';
import camiseta_evening from './img/camiseta_evening.png';
import camiseta_not_today from './img/camiseta_not_today.png';
import camiseta_outcast from './img/camiseta_outcast.png'
import camiseta_ramones from './img/camiseta_ramones.png'
import caneca_decaf_peco from './img/Caneca_Decaf_PeCo.png'
import caneca_black_ring from './img/caneca_black_ring.png'
import caneca_ceramica_rustica from './img/caneca_ceramica_rustica.png'
import caneca_never_settle from './img/caneca_never_settle.png'
import caneca_preto_fosco from './img/caneca_preto_fosco.png'
import caneca_the_grouds from './img/caneca_the_grouds.png'
import './Produtos.css'

function Produtos() {
  return (
    <div className="flex">
      <div>
        <img src={camiseta_dreamer} />
        <div className='descricao'>
          <p className='legenda'>Legenda</p>
          <hr />
          <p><strong>R$ 32, 00</strong></p>
        </div>
      </div>
      <div>
        <img src={camiseta_evening} />
        <div className='descricao'>
          <p className='legenda'>Legenda</p>
          <hr />
          <p><strong>R$ 32, 00</strong></p>
        </div>
      </div>
      <div>
        <img src={camiseta_outcast} />
        <div className='descricao'>
          <p className='legenda'>Legenda</p>
          <hr />
          <p><strong>R$ 32, 00</strong></p>
        </div>
      </div>
      <div>
        <img src={camiseta_not_today} />
        <div className='descricao'>
          <p className='legenda'>Legenda</p>
          <hr />
          <p><strong>R$ 32, 00</strong></p>
        </div>
      </div>
      <div>
        <img src={camiseta_ramones} />
        <div className='descricao'>
          <p className='legenda'>Legenda</p>
          <hr />
          <p><strong>R$ 32, 00</strong></p>
        </div>
      </div>
      <div>
        <img src={camiseta_broken_saints} />
        <div className='descricao'>
          <p className='legenda'>Legenda</p>
          <hr />
          <p><strong>R$ 32, 00</strong></p>
        </div>
      </div>
      <div>
        <img src={caneca_black_ring} />
        <div className='descricao'>
          <p className='legenda'>Legenda</p>
          <hr />
          <p><strong>R$ 32, 00</strong></p>
        </div>
      </div>
      <div>
        <img src={caneca_decaf_peco} />
        <div className='descricao'>
          <p className='legenda'>Legenda</p>
          <hr />
          <p><strong>R$ 32, 00</strong></p>
        </div>
      </div>
      <div>
        <img src={caneca_the_grouds} />
        <div className='descricao'>
          <p className='legenda'>Legenda</p>
          <hr />
          <p><strong>R$ 32, 00</strong></p>
        </div>
      </div>
      <div>
        <img src={caneca_preto_fosco} />
        <div className='descricao'>
          <p className='legenda'>Legenda</p>
          <hr />
          <p><strong>R$ 32, 00</strong></p>
        </div>
      </div>
      <div>
        <img src={caneca_never_settle} />
        <div className='descricao'>
          <p className='legenda'>Legenda</p>
          <hr />
          <p><strong>R$ 32, 00</strong></p>
        </div>
      </div>
      <div>
        <img src={caneca_ceramica_rustica} />
        <div className='descricao'>
          <p className='legenda'>Legenda</p>
          <hr />
          <p><strong>R$ 32, 00</strong></p>
        </div>
      </div>
      <div>
        <img src={caneca_ceramica_rustica} />
        <div className='descricao'>
          <p className='legenda'>Legenda</p>
          <hr />
          <p><strong>R$ 32, 00</strong></p>
        </div>
      </div>

    </div>
  )
}

export default Produtos;
