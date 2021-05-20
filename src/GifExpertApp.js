import { useState } from "react";
import AddCategory from './components/AddCategory'
import GiffGrid from "./components/GiffGrid";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Piece']);

    return (
        <main className='main'>
            <article>
                <div className='container-title'>
                    <h1 className='title'>GifExpertApp</h1>
                    <AddCategory setCategories={setCategories} />
                </div>
                <section>
                    <h2>Categories:</h2>

                    {
                        categories.map((category) =>
                        (
                            <GiffGrid
                                key={category}
                                category={category}
                            />
                        )
                        )
                    }


                </section>
            </article>
        </main>
    )


}


export default GifExpertApp