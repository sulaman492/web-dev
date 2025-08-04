
        async function getCategory() {
            try {
                let response = await fetch("https://opentdb.com/api_category.php");
                data = await response.json();
                let categories = data.trivia_categories;

                let sel = document.querySelector(".category");
                sel.innerHTML = "";
                categories.forEach(e => {
                    let option = document.createElement("option");
                    option.value = e.id;
                    option.textContent = e.name;
                    sel.appendChild(option)
                });
            }
            catch (err) {
                document.querySelector(".category").innerHTML = "Unable to fetch data";
                console.log(err);
            }

        }
        getCategory();
        document.getElementById("quizForm").addEventListener("submit",async (e) => {
          e.preventDefault();  
        
          const formdata=new FormData(e.target)
          const data={
            amount:formdata.get("amount"),
            difficulty:formdata.get("difficulty"),
            category:formdata.get("category"),
            type:formdata.get("Type")
          }
          try{
            let res=await fetch("http://localhost:3000/quiz",{
                method:POST,
                  headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            let result=await res.JSON();
            console.log(result);
          }
          catch(err){

          }
          

        })
