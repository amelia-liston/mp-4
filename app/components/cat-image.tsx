"use client";
import styled from "styled-components";
import {CatTypes} from "../types/cat";

const AllCatsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: lavender;
`;

const OneCatDiv=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    font: small-caps calc(2px + 1vw) "SF Pro Rounded";
    text-align: center;
    border-radius: 15px;
    background-color: pink;
`;

const StyledImage=styled.img`
    display: block;
    max-width: 100%;
`;

export default function Cats(props: {data:CatTypes[]}){
    return (
        <>
            <AllCatsDiv>
                {
                    props.data.length === 0 ? (
                        <p>No cat data was fetched</p>
                        ) : (
                    props.data.map((cat: CatTypes) =>
                        <OneCatDiv key={cat.id} >
                            <StyledImage src={cat.url} alt={`image of a cat`}/>
                        </OneCatDiv>
                    )
                    )
                }
            </AllCatsDiv>
        </>
    );
}