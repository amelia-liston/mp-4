"use server";
import {CatType} from "@/app/types/cat";

export async function getCatData(): Promise<CatType | null> {
    // try{
    //     const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10?api_key=${process.env.CAT_API_KEY}`);
    //     const data = await res.json();
    //     return data;
    // } catch (error) {
    //     console.error(error);
    //     return null;
    // }
    const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10?api_key=${process.env.CAT_API_KEY}`);
    if(res.status !== 200){
        return [];
    }else{
        const data = await res.json();
        console.log(data);
        return data;
    }

}