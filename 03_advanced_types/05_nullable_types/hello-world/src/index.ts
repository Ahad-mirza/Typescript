function create(name: string | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Hola");  
  }
}

create(undefined);  
create("Ahad"); 