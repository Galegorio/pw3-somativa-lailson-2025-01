import React from "react";
import style from "./createBook.module.css";
import { useState } from "react";
import Input from "../form/Input.jsx";
import Select from "../form/Select.jsx";
import Button from "../form/Button.jsx";

const CreateBook = () => {

    /* CRIA A ESTRUTURA DE STATE PARA OS DADOS DE LIVRO */
    const[book, setBook] = useState({});

     // captura de dados dos elementos de input
    function handlerChangeBook(event){
        setBook({...book, [event.target.name] : event.target.value });
        console.log(book);
    }

    // captura de dados dos elementos de select
    function handlerChangeCategory(event){
        setBook({...book, category : event.target.options[event.target.selectIndex].text})
    }

    //Envio dos dados para a API
    function submit(event){
        event.preventDefault();
        console.log
    } 

    return(
        <section className={style.create_book_container}>

            <h1>Cadastro de Livro: </h1>

            <form onSubmit={submit}>

                <Input type="text"
                    name="txt_livro"
                    id="tct_livro"
                    placeholder="Digite o livro desejado: "
                    text="Insira um livro: "
                    handlerChange={handlerChangeBook}
                />

                <Input type="text"
                    name="txt_autor"
                    id="tct_livro"
                    placeholder="Digite o nome do autor: "
                    text="Coloque o nome do autor: "
                    handlerChange={handlerChangeBook}
                />

                <Input type="text"
                    name="txt_descricao"
                    id="tct_livro"
                    placeholder="Digite a descrição do livro escolhido: "
                    text="Insira a descrição do livro: "
                    handlerChange={handlerChangeBook}
                />

                <Select
                    name="slc_categorias"
                    id="slc_categorias"
                    text="Categorias do livro: "
                    handlerChange={handlerChangeBook}
                />

                <Button
                    title="salvar"
                />
            </form>
        </section>
    )
}

export default CreateBook;