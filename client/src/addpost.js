import { useState } from "react";
import styled from "styled-components";
import api from "./api/posts";

const AddPost = () => {

    const [title, setTitle] =  useState()
    const [text, setText] =  useState()
    const [succe, setCucce] =  useState()
    const handleSubmit = async (e)=>{
        e.preventDefault();
            try {
              const response = await api.post("add", {
                  title,
                  text
                });
              setCucce(response.data.message);
            } catch (err) {
              if (err.response) {
                // not in the 200 response range
                console.log(err.response.data);
                console.log(err.response.headers);
                console.log(err.response.status);
              } else {
                console.log(`Error: ${err.message}`);
              }
            }
    } 
    return ( 
        <Contenair>
            <form onSubmit={handleSubmit}>
                <h2>Ajouter Des Posts</h2>
                {succe ?
                <div className="succes"> 
                    <strong>{succe}</strong> 
                    <button className="btnSucess">Voir le post</button>
                </div>
                :""}
                <label>Titre du post</label>
                <input type="text" placeholder="titre du post..."
                    onChange={(e) => setTitle(e.target.value)} />
                <label>Text du post</label>
                <textarea placeholder="text du post..." 
                    onChange={(e) => setText(e.target.value)} />
                <button>Ajouter</button>
            </form>
        </Contenair>
     );
}
 

const Contenair = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    form{
        background-color: #e8e7e7;
        box-shadow: 10px 10px 10px lightblue;
        display: flex;
        flex-direction: column;
        padding: 30px;

    }
    form h2{
        background-color: #e8e7e7;
        font-size: 30px;
        border: 2px dashed black;
        text-align: center;
        
    }
    form label{
        font-size: 20px;
    }
    form input{
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    form button{
        border: none;
        border-radius: 30px;
        padding: 10px;
        background-color: #273746;
        color: #e8e7e7;
        margin-top: 10px;
    }
    form .btnSucess{
        width: 20%;
        border: none;
        border-radius: 30px;
        padding: 10px;
        background-color: #27AE60;
        color: #e8e7e7;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    form textarea{
        width: 534px;
        height: 318px;
        resize: none;
    }
    form .succes{
        display: flex;
        flex-direction: column;
    }
`


export default AddPost;