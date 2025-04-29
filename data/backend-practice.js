const xhr = new XMLHttpRequest();
//  USING A BROWSER IS ALMOST THE SAME THING AS MAKING A GET REQUEST
xhr.addEventListener("load", () =>{
    console.log(xhr.response);
});

xhr.open("GET", "https://supersimplebackend.dev");
xhr.send();
xhr.response