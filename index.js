let btn=document.getElementById("submit");
let tools=document.getElementById("tools");
let toolsHolder=document.getElementById("toolsHolder");
let input=document.getElementById("input");
let heading=document.getElementById("toolsHeading");
btn.addEventListener("click",renderinfo);
function renderinfo()
{
    toolsHolder.innerHTML="";
    tools.style.display="inline-block";
    let inputVal=input.value;
    heading.innerHTML=inputVal.toUpperCase();
    let obj=fetch("./tools.json");
    obj.then((response)=>{
        return response.json();
    }).then((response)=>{
        if(inputVal==="all"){
            response.all.forEach((e)=>{
                toolsHolder.innerHTML+=`
                
                <div class="box" data-aos="fade-in" data-aos-duration="1200">
                <h3>${e.name}</h3>
                <img src=${e.imgUrl} alt="img not found">
                <p style="font-family: 'Poppins', sans-serif" >${e.description}</p>
                <a href=${e.url}>open</a>
                </div>
                `
            })
        }
        if(inputVal==="text"){
            response.text.forEach((e)=>{
                toolsHolder.innerHTML+=`
                
                <div class="box" data-aos="fade-in" data-aos-duration="1200">
                <h3>${e.name}</h3>
                <img src=${e.imgUrl} alt="img not found">
                <p style="font-family: 'Poppins', sans-serif" >${e.description}</p>
                <a href=${e.url}>open</a>
                </div>
                `
            })
        }
        if(inputVal==="image"){
            response.image.forEach((e)=>{
                toolsHolder.innerHTML+=`
                
                <div class="box" data-aos="fade-in" data-aos-duration="1200">
                <h3>${e.name}</h3>
                <img src=${e.imgUrl} alt="img not found">
                <p style="font-family: 'Poppins', sans-serif" >${e.description}</p>
                <a href=${e.url}>open</a>
                </div>
                `
            })
        }
        if(inputVal==="video"){
            response.video.forEach((e)=>{
                toolsHolder.innerHTML+=`
                
                <div class="box" data-aos="fade-in" data-aos-duration="1200">
                <h3>${e.name}</h3>
                <img src=${e.imgUrl} alt="img not found">
                <p style="font-family: 'Poppins', sans-serif" >${e.description}</p>
                <a href=${e.url}>open</a>
                </div>
                `
            })
        }
        if(inputVal==="audio"){
            response.audio.forEach((e)=>{
                toolsHolder.innerHTML+=`
                
                <div class="box" data-aos="fade-in" data-aos-duration="1200">
                <h3>${e.name}</h3>
                <img src=${e.imgUrl} alt="img not found">
                <p style="font-family: 'Poppins', sans-serif" >${e.description}</p>
                <a href=${e.url}>open</a>
                </div>
                `
            })
        }
        if(inputVal==="market and bussiness"){
            response.marketingandbussiness.forEach((e)=>{
                toolsHolder.innerHTML+=`
                
                <div class="box" data-aos="fade-in" data-aos-duration="1200">
                <h3>${e.name}</h3>
                <img src=${e.imgUrl} alt="img not found">
                <p style="font-family: 'Poppins', sans-serif" >${e.description}</p>
                <a href=${e.url}>open</a>
                </div>
                `
            })
        }
        if(inputVal==="art"){
            response.art.forEach((e)=>{
                toolsHolder.innerHTML+=`
                
                <div class="box" data-aos="fade-in" data-aos-duration="1200">
                <h3>${e.name}</h3>
                <img src=${e.imgUrl} alt="img not found">
                <p style="font-family: 'Poppins', sans-serif" >${e.description}</p>
                <a href=${e.url}>open</a>
                </div>
                `
            })
        }
        if(inputVal==="developer"){
            response.developer.forEach((e)=>{
                toolsHolder.innerHTML+=`
                
                <div class="box" data-aos="fade-in" data-aos-duration="1200">
                <h3>${e.name}</h3>
                <img src=${e.imgUrl} alt="img not found">
                <p style="font-family: 'Poppins', sans-serif" >${e.description}</p>
                <a href=${e.url}>open</a>
                </div>
                `
            })
        }
        if(inputVal==="designer"){
            response.designer.forEach((e)=>{
                toolsHolder.innerHTML+=`
                
                <div class="box" data-aos="fade-in" data-aos-duration="1200">
                <h3>${e.name}</h3>
                <img src=${e.imgUrl} alt="img not found">
                <p style="font-family: 'Poppins', sans-serif" >${e.description}</p>
                <a href=${e.url}>open</a>
                </div>
                `
            })
        }

            
    })
}
