document.querySelector("body").className = ""

var impactsSd = document.querySelector("#impacts")
var sdIndicator=document.querySelector("#sd-indicator")
var sdFwd=document.querySelector(".slideshow-btn#fwd-btn")
var sdBwd=document.querySelector(".slideshow-btn#bwd-btn")
var current=0

var causeList = document.querySelector("#causes")
var actionsList = document.querySelector("#actions")
var policyAccs = document.querySelector("#policies")

function AccToggle(i){
    console.log(i)
    var e=policyAccs.children[i]
    var acc=e.querySelector(".accordion")
    var btn=acc.querySelector(".accordion-btn")

    if(!acc.classList.contains("active")){
        btn.querySelector(".icon").innerText="-"
        acc.classList.toggle("active")
    }else{
        btn.querySelector(".icon").innerText="+"
        acc.classList.toggle("active")
    }
}

function moveSlide(n){
    if(n<0){
        n=impacts.length-1
    }else if(n>=(impacts.length)){
        n=0
    }

    var slides=impactsSd.children

    for (let index = 0; index < slides.length; index++) {
        const slide = slides[index];
        
        if(index==n){
            slide.classList.add("show")
        }else{
            slide.classList.remove("show")
        }
    }

    sdIndicator.innerText=(n+1).toString()+"/"+impacts.length.toString()

    current=n

    console.log(current)
}

for(var i=0;i<impacts.length;i++){
    var impact=impacts[i]

    var slide=document.createElement("div")
    slide.className="slide"

    var img=document.createElement("img")
    img.className="slide-img"
    img.src=impact.img
    slide.appendChild(img)

    var tCont=document.createElement("div")
    tCont.className="slide-text"

    var title=document.createElement("h2")
    title.innerText=impact.title
    tCont.appendChild(title)

    var text=document.createElement("p")
    text.innerText=impact.text
    text.className="t-center"
    tCont.appendChild(text)

    var link=document.createElement("a")
    link.innerText="Learn More"
    link.href=impact.link
    tCont.appendChild(link)

    if(i==0){
        slide.classList.add("show")
    }

    slide.appendChild(tCont)

    impactsSd.appendChild(slide)
}

var timeout

var moveSlideAuto=()=>{
    moveSlide(current+1)
    timeout=setTimeout(moveSlideAuto,5000)
}

timeout=setTimeout(moveSlideAuto,300)

sdFwd.addEventListener("click",()=>{
    clearTimeout(timeout)
    moveSlide(current+1)
    timeout=setTimeout(moveSlideAuto,5000)
})

sdBwd.addEventListener("click",()=>{
    clearTimeout(timeout)
    moveSlide(current-1)
    timeout=setTimeout(moveSlideAuto,5000)
})

sdIndicator.innerText=(current+1).toString()+"/"+impacts.length.toString()

for(var i=0;i<causes.length;i++){
    var cause=causes[i]
    
    var item = document.createElement("div")
    item.className = "listitem hoverable"

    var body = document.createElement("div")
    body.className = "listitem-body scroll-transition scroll-text-transition"

    var titleP = document.createElement("p")
    titleP.innerText = cause.title
    titleP.className="t-white"
    body.appendChild(titleP)

    var textP = document.createElement("p")
    textP.innerText = cause.text
    textP.className="t-white"
    body.appendChild(textP)

    var link=document.createElement("a")
    link.innerText="Learn More"
    link.href=cause.link
    body.appendChild(link)

    var img = document.createElement("img")
    img.className = "listitem-img"
    img.src = cause.img

    item.appendChild(img)
    item.appendChild(body)

    causeList.appendChild(item)
}

var grflex=document.createElement("div")

for(var index=0;index<actions.length;index++){
    var action = actions[index]
    grflex.className="gr-flex"

    var item = document.createElement("div")
    item.className = "listitem borderless"

    var body = document.createElement("div")
    body.className = "listitem-body"

    var titleP = document.createElement("p")
    titleP.innerText = action.title
    body.appendChild(titleP)

    var textP = document.createElement("p")
    textP.innerText = action.text
    textP.className="t-grey"
    body.appendChild(textP)

    var img = document.createElement("img")
    img.className = "listitem-img"
    img.src = action.img

    item.appendChild(img)
    item.appendChild(body)

    grflex.appendChild(item)

    if((index+1)%2==0 | index==(actions.length-1)){
        actionsList.appendChild(grflex)
        grflex=document.createElement("div")
    }
}

for(var i=0;i<policies.length;i++){
    var policy=policies[i]

    var outer=document.createElement("div")
    outer.className="flexjcenter"

    var accordion=document.createElement("div")
    accordion.className="accordion accordion-white"

    var accBtn=document.createElement("button")
    accBtn.className="accordion-btn"
    accBtn.index=i
    accBtn.addEventListener("click",AccToggle.bind(this,i))
    accordion.appendChild(accBtn)

    var btnText=document.createElement("p")
    btnText.innerText=policy.title
    accBtn.appendChild(btnText)

    var btnIcon=document.createElement("span")
    btnIcon.className="icon"
    btnIcon.innerText="+"
    accBtn.append(btnIcon)

    var accPanel=document.createElement("div")
    accPanel.className="accordion-panel"
    accPanel.innerText=policy.text
    accordion.appendChild(accPanel)

    outer.appendChild(accordion)
    policyAccs.appendChild(outer)

    console.log(i)
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    });
});


observer.observe(document.querySelector(".hero-content"));
observer.observe(document.querySelector("section.actions"))
observer.observe(document.querySelector("#lm"))

var st_elements=document.querySelectorAll(".scroll-transition")

for(var i=0;i<st_elements.length;i++){
    observer.observe(st_elements[i])
}
// setTimeout(()=>{
//     document.querySelector(".splash").classList.add("splash-move")
//     setTimeout(()=>{
//         document.querySelector(".splash").remove()
//     },2000)
// },1000)