"use client";
import Button from "@mui/material/Button";



export default function Home() {

  return (
    <>
        <div className="flex-col">
            <h1 className="mb-5 mt-5 flex justify-center text-2xl">Select below to see a random cat :)</h1>
            <form className="flex justify-center" action={"/cat"} method="GET">
                <Button variant="outlined" size="large" type="submit" color="primary">
                    See Cat
                </Button>
            </form>
        </div>
    </>
  );
}
