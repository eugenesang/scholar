function mapString(string){
  string=toLowerCase(string);
  let obj={};
  for (let i=0; i<string.length; i++){
    if(obj[string[i]]){
      obj[string[i]].push(i)
    }else{
      obj[string[i]]=[i];
    }
  }
  return obj
}
function toLowerCase(string){
  let newstr='';
  for(let i=0; i<string.length; i++){
    let x=string[i];
    let y=string.charCodeAt(i);
    if(y>64 && y<91){
    y=String.fromCharCode(y+32);
    }else{y=String.fromCharCode(y)};
    newstr+=y;
  }
  string=newstr;
  return string;
}
function findNextIndex(array, minIndex){
  for (let element of array){
  if(element>=minIndex){
    return element+1;
  }
  }
  return false
}
function isSubsequence(word, map){
  word=toLowerCase(word);
  map=mapString(map)
  let minIndex=0;
  for(let letter of word){
    if(map[letter]){
      minIndex=findNextIndex(map[letter],  minIndex)
      if (minIndex===false){
        return false
      }
    }else {return false}
  }
  return true
}
module.exports=isSubsequence; 
