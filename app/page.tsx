"use client";

// import {useState, useEffect} from 'react';
import {getCatData} from "@/app/lib/route";
import Cats from "@/app/components/cat-image";


export default function Home() {
    //const [type, setType] = useState('');
    // const handleChange = async (event: SelectChangeEvent) => {
    //     setType(event.target.value as string);
    //     const artType = type.trim() as string;
    //     const {data} = await getArtData(artType);
    //     console.log(data);
    // };

  return (
    <>
        <div>
            <h1>Cat Images</h1>

        </div>
    </>
  );
}
