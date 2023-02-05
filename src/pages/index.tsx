import { PokemonHome } from "@/components";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Lemon Hive Assesment</title>
            </Head>
            <main>
                <PokemonHome />
            </main>
        </>
    );
}
