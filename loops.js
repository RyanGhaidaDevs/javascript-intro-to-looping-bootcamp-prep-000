
//push is going to add element to end of array
//define array


function forLoop(array) {
  for (let i = 0; i < 25; i++) {

    if (i==1) {


      array.push( `"I am the 1 strange loop."`)

    } else {

      array.push(`"I am the ${i} strange loops."`)

    }

  }

  return array
  
}
