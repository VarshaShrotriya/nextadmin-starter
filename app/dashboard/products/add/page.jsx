import React from 'react'
import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css'

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder='title' name='title' required />
        <select name="cat" id="cat">
          <option value="general">Choose a category</option>
          <option value="americanshorthairs">American Shorthairs</option>
          <option value="rabbits">Rabbits</option>
          <option value="siamesecats">Siamese cats</option>
        </select>
        <input type="number" placeholder='price' name='price' />
        <input type="number" placeholder='stock' name='stock' />
        <input type="text" placeholder='color' name='color' />
        <input type="text" placeholder='size' name='size' />
        <textarea name="desc" id="desc"  rows="16" placeholder='Description'></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddProductPage