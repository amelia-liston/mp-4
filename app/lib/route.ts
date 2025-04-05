"use server";
import {CatTypes} from "@/app/types/cat";

export async function getCatData(): Promise<CatTypes[]> {

    const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=9&api_key=${process.env.CAT_API_KEY}`, {
        method: "GET",
    });
    if(res.status !== 200){
        return [];
    } else {
        const data = await res.json();
        console.log(data);
        return data;
    }

}