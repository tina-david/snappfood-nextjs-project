'use client'

import Categories from "@/components/Categories";
import Slide from "@/components/Slide";

export default function Home() {

    return (
        <div className={'flex w-full justify-center flex-wrap p-4'}>
<Categories/>
<Slide/>
        </div>
    );
}
