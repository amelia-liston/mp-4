import {getCatData} from "@/app/lib/route";
import Cats from "@/app/components/cat-image";

export default async function CatsPage(){
    const data = await getCatData();

    return(
        <>
            <h1>Cat Images</h1>
            {data != null? <Cats data={data}/>: null}
        </>
    )
}