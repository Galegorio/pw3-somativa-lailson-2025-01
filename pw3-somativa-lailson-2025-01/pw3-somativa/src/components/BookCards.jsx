import style from './bookCards.module.css'
import Button from './Button.jsx'

const BookCards = ({cod_livro, nome_livro, autor_livro, imagem})=>{
    return(
        <div className={style.bookCards}>

            <h3 className={style.title}>{nome_livro}</h3>

            <p className={style.autor}>{autor_livro}</p>

            <img src={imagem} alt='Capa' className={style.imagem}/>

            <Button label="DETALHE"/>
            
        </div>
    )
}

export default BookCards