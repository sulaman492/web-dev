const fn=()=>{
    console.log("Nothing")
}

const callback=(arg,fn)=>{
    console.log(arg)
    fn()
}

const loadScript=(src,callback)=>{
    let sc=document.createElement("script")
    sc.src=src
    sc.onload=callback("Harry",fn)
    document.head.append(sc)
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js", callback);