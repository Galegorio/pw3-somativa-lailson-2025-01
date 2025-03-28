import React from "react";
import style from "./createBook.module.css";
import { useState, useEffect } from "react";
import Input from "../form/Input.jsx";
import Select from "../form/Select.jsx";
import Button from "../form/Button.jsx";

const CreateBook = () => {

    /* CRIA A ESTRUTURA DE STATE PARA OS DADOS DE LIVRO */
    const[book, setBook] = useState({});

    /* CRIA A ESTRUTURA DE STATE PARA OS DADOS DE CATEGORIA*/
    const[categories, setCategories] = useState([]);

     // captura de dados dos elementos de input
    function handlerChangeBook(event){
        setBook({...book, [event.target.name] : event.target.value });
        console.log(book);
    }

    // captura de dados dos elementos de select
    function handlerChangeCategory(event){
        setBook({...book, cod_categoria : event.target.options[event.target.selectIndex].text})
    }

    //Envio dos dados para a API
    function submit(event){
        event.preventDefault();
        console.log
    } 

    // RECUPERA OS DADOS DE CATEGORIA DA API REST
    useEffect(()=>{
        fetch('http://127.0.0.1:5000/listagemCateorias', {
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'*'
            }
        }).then((resp)=>
            resp.json()
        ).then((categorias)=>{
            console.log('TESTE: ' + categorias.data);
        }).catch((error)=>{
            console.log('ERRO: ' + error);
        })
    }, []);


    return(
        <section className={style.create_book_container}>

            <h1>Cadastro de Livro: </h1>

            <form onSubmit={submit}>

                <Input 
                    type="text"
                    name="nome_livro"
                    id="nome_livro"
                    placeholder="Digite o livro desejado: "
                    text="Insira um livro: "
                    handlerChange={handlerChangeBook}
                />

                <Input 
                    type="text"
                    name="autor_livro"
                    id="autor_livro"
                    placeholder="Digite o nome do autor: "
                    text="Coloque o nome do autor: "
                    handlerChange={handlerChangeBook}
                />

                <Input 
                    type="text"
                    name="descricao_livro"
                    id="descricao_livro"
                    placeholder="Digite a descrição do livro escolhido: "
                    text="Insira a descrição do livro: "
                    handlerChange={handlerChangeBook}
                />

                <Select
                    name="cod_categorias"
                    id="cod_categoria"
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