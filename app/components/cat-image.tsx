"use client";
import styled from "styled-components";
import {CatData} from "../types/cat";

const AllCatsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: #D1F6FF;
`;

const OneCatDiv=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border: 3px solid lightblue;
    font: small-caps calc(2px + 1vw) "SF Pro Rounded";
    text-align: center;
    border-radius: 15px;
`;

const StyledImage=styled.img`
    display: block;
    max-width: 100%;
`;

export default function Cats(props: {data:CatData[]}){
    return (
        <>
            <AllCatsDiv>
                {
                    props.data.map((cat: CatData) =>
                        <OneCatDiv key={cat.id} >
                            <h1>{cat.id}</h1>
                            <StyledImage src={cat.url} alt={`image of a cat`}/>
                        </OneCatDiv>
                    )
                }
            </AllCatsDiv>
        </>
    );
}