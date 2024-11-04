import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
import { setupInput, uploadImages } from './loader.js'

document.querySelector('#app').innerHTML = `
  <div class='upload'>
    <h3 class='upload__title'>Вы можете загрузить до 5 файлов JPG, JPEG, PNG, размер одного — до 10 МБ</h3>
    <form action='/' class='upload__form'>
      <input  class='upload__input' title=" "  type='file'  multiple />
      <button type='submit'>Загрузить</button>
    </form>
    <ul class='errors__list'></ul>
    <ul class='upload__list'>
    </ul>
  </div>
`

setupInput(document.querySelector('.upload__input'));
uploadImages(document.querySelector('.upload__form'))

