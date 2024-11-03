export function setupInput(element) {
  // let counter = 0
  // const setCounter = (count) => {
  //   counter = count
  //   element.innerHTML = `count is ${counter}`
  // }
  // element.addEventListener('click', () => setCounter(counter + 1))
  // setCounter(0)
  let files__array = [];

  element.oninput = (e) => {
    files__array.push(...e.target.files);
    console.log(files__array)
  }
}
