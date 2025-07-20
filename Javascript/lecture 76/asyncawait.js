// async function getdata() {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(455)
//     }, 3500);    
//     })
    
// }

async function postdata() { 
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'POST',
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    });
    

    let data = await x.json();  // Parse the JSON response
    return data

   // let data = await x.json()
    //   return data
}



async function main() {
    console.log("Loading modules")

    console.log('fetching data');

    let data=await postdata()

   
    console.log(data);
    
}
main()