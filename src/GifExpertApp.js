import  React, {useState} from 'react'

import {AddCategory} from './components/AddCategory.js'

import {GifGrid} from './components/GifGrid.js'
export const GifExpertApp = () => {

   
    const [categories,setCategories]= useState( ['Dragon Ball']);
    
    // const handleAdd=()=>{
    //     setCategories([...categories,'nuevo'])
    // }
    
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            <ol>
                {categories.map((category)=>{
                    return(
                         <GifGrid 
                         key={category}
                         category={category}/>)
                })}    
            </ol>
        </div>
    )
}
  