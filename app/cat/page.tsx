import {getCatData} from "@/app/lib/route";
import Cats from "@/app/components/cat-image";

export default async function CatsPage(){
    const data = await getCatData();

    return(
        <>
            <div className="flex-col">
                <div className="flex justify-center">
                    <h1 className="text-2xl mb-5 font-bold">Cats :)</h1>
                </div>
                {data != null? <Cats data={data}/>: null}
            </div>
        </>
    )
}