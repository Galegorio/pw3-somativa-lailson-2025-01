import React from "react";
import style from "./listBook.module.css";
import { useState, useEffect } from "react";
import cavernas from '../../assets/cavernas_aco .jpg';
import BookCard from "../BookCards";
import ContainerBook from "../layout/ContainerBook";

const ListBook = () => {

    const [books, setBooks] = useState([]);

    useEffect(()=>{

        fetch('http://127.0.0.1:5000/listagemLivros',{
            method: 'GET',
            mode:'cors',
            headers:{
                'Content-Type':'aplication/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'*',
            }
        })
        .then((resp)=>resp.json())
        .then((Bookdata)=>{
            console.log(Bookdata.data)
            setBooks(Bookdata.data);
        })
        .catch((err)=>{console.log(err)});
    },[]);

    return(
        <section>

            <h1>List book</h1>

            <ContainerBook>

                {
                    books.map((book)=>{

                        <BookCard 
                        nome_livro = {book.nome_livro} 
                        autor_livro  = {book.autor_livro}
                        imagem = {cavernas}
                        key = {book.cod_livro}
                        />
                    })
                }
            </ContainerBook>
           

        </section>
    )
}

export default ListBook;