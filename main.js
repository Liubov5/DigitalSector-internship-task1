import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
import { setupInput } from './loader.js'

document.querySelector('#app').innerHTML = `
  <div class='upload'>
    <form>
      <input class='upload__input'  type='file' multiple />
      <button type='submit'>Загрузить</button>
    </form>
    <ul>
      
    </ul>
  </div>
`

setupInput(document.querySelector('.upload__input'))
