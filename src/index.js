module.exports = function check(str, bracketsConfig) {

    if ( str.length % 2 !== 0 ) {
    //alert('Не подходит по длине');
    return false;
  }

  let newArr = bracketsConfig.map( (item) => {
    return item[0]+item[1];
  } )

  //alert(newArr);

  let strLen = str.length/2;

  for (let i=0; i < strLen; i++) {

    newArr.map( (item) => {
        str = str.replace(item, '');
    } )

    //alert(`str.length: ${strLen}, str: ${str}, i: ${i} `);
  }

    if (str.length == 0) {
    //alert('Подходит!');
    return true;
  } else {
    //alert('Не подходит!');
    return false;
  }

}
