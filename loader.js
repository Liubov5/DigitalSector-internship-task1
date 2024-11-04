let files__array = [];

let errors = [];

export function setupInput(element) {
  
  element.oninput = (e) => {
    errors = []; //должен обнуляться при каждом новом выборе файла
    let count = 0;
    let temp_arr = [];
    for (let i = 0; i < e.target.files.length; i++) {
      //1. проверка на существование
      const resExist = checkExistFiles(e.target.files[i].name);
      if (!resExist) { //если не нашелся в массиве
        //2. проверка на тип
        const resType = checkType(e.target.files[i].type);
        if (resType === true) {
          //3. проверка на размер
          const resSize = checkLimitSize(e.target.files[i].size);
          if(resSize) {
            files__array.push (e.target.files[i]);
          }else {
            errors.push({
              name: e.target.files[i].name,
              text: `Превышен максимальный размер файла ${e.target.files[i].name}`
            })
            continue
          }
        } else {
          errors.push({
            name: e.target.files[i].name,
            text: `Неверный формат файла ${e.target.files[i].name}`
          })
          continue
        }
      }else {
        errors.push({
          name: e.target.files[i].name,
          text: ` Файл ${e.target.files[i].name} уже существует`
        });
        continue
      }
    }
    renderListImages(files__array);
    renderErrorList(errors);
    console.log(errors);
    console.log(files__array)
  }

}

export function uploadImages(element) {
  
  element.onsubmit = function(e) {
    e.preventDefault();
    if(files__array.length > 5) {
      alert('Превышено допустимое количество файлов: 5')
    } else {
      alert("Данные успешно загружены");
      files__array = [];
      errors = [];
      renderListImages(files__array);
      renderErrorList(errors)
    }
  }
}
//рендер списка файлов
function renderListImages (files) {
    const upload_list = document.querySelector(".upload__list");
    upload_list.innerHTML = "";
    
    for (let i = 0; i < files.length; i++) {
      let li = document.createElement("li");
      upload_list.appendChild(li);
      li.innerHTML =` 
        <span>
         <p> Название:  ${files[i].name} </p>
          <p>Формат:  ${files[i].type}</p>
          <p>Размер:  ${files[i].size} </p>
        </span>
        <span>
          <img src='${ URL.createObjectURL(files[i])}' />
        </span>
        <span>
          <button data-index='${i}' class='delete__btn'>Удалить</button>
        </span>
      `
    }
    const btns = document.querySelectorAll(".delete__btn");

    for(let i = 0; i < btns.length; i++) {
      btns[i].onclick = function() {
        deleteItem(btns[i].getAttribute("data-index"))
        
      }
    }
}

//проверка на существующее
function checkExistFiles (name) {
  if(files__array.length !== 0) {
    return files__array.some((file)=> {
      return file.name === name;
    })
  }else {
    return false;
  }
  
}

//проверка на 10мб одного файла
function checkLimitSize (size) {
  const limitSize = 10485760;
  return size <= limitSize ?  true  : false;
}

//проверка на тип
function checkType (file) {
  
  const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];

  return validImageTypes.some((type)=> {
    return type === file;
  })
}

//проверка на кол-во не более 5 перед отправкой на загрузить
function checkCount() {

}

//рендер списка ошибок
function renderErrorList(arg) {
  const errors_list = document.querySelector(".errors__list");
  errors_list.innerHTML = " ";

  for (let i = 0; i < arg.length; i++) {
    let li = document.createElement("li");
    errors_list.appendChild(li);
    li.innerHTML = arg[i].text;
  }
}

//удаление
function deleteItem(arg) {
  files__array.splice(arg, 1);
  renderListImages(files__array);
}

