import styled from "styled-components";

const Post = ({tile, text}) => {
    return ( 
        <Contenair>
            <h1>{tile}</h1>
            <p>{text}</p>
        </Contenair>
     );
}

const Contenair = styled.div`
    position: relative;
    width: 30%;
    background-color: #e8e7e7;
    display: flex;
    flex-direction: column;
    margin: 10px;
    box-shadow: 10px 10px 5px lightblue;
    padding: 10px;
    p{
        background-color: #e8e7e7;
        font-size: 18px;
    }
    h1{
        background-color: #e8e7e7;
        margin: 0px;
    }
`
export default Post;