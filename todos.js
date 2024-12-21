let todo=[];

let input=prompt("what you want to do?");
while(input.toLowerCase()!="quit"){

if(input.toLowerCase()=="new"){
   input= prompt("enter to-do task");
   console.log(`${input} added to list`);
   todo.push(input);
   input=prompt("what you want to do?");
}

if(input.toLowerCase()=="list"){
    console.log("*********");
    for(let i=0;i<todo.length;i++){
       console.log(`${i}: ${todo[i]}` );
    }
    console.log("*********");
    input=prompt("what you want to do?");
}

if(input.toLowerCase()=="delete"){
    input=prompt("enter index to delete");
    todo.splice(parseInt(input),1);
    console.log("Todo Removed");
    input=prompt("what you want to do?");
}
}

console.log("OK,QUITING THE APP");