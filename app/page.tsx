"use client";
import Button from "@mui/material/Button";



export default function Home() {

  return (
    <>
        <div>
            <h1>Select below to see a random cat :)</h1>
            <form action={"/cat"} method="POST">
                <Button type="submit" color="primary">
                    See Cat
                </Button>
            </form>
        </div>
    </>
  );
}
