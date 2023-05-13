// EqRywIaAut7DkhB0ni7cus5fXAMiNjNh
import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'the chosen' ]);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory)
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  return (  
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={ onAddCategory }
      />


      {categories.map((category) => (
        <GifGrid
          key={ category }
          category={ category } />
      ))
      }


    </>
  )
}

