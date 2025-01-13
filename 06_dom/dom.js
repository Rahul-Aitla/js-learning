document.getElementById('title') // ise hum title ko access kar sakte hai

document.getElementById('title').id // .id de kar uske andar ke elements ko access kar sakte hai

document.getElementById('title').className // class ko access karne ke liye className likhna padega class nhi
document.getElementById('title').getAttribute('id') // isse id milti hai
document.getElementById('title').getAttribute('class') // aise hi class bhi

document.getElementById('title').setAttribute('class', 'text') // aise class ko change kar sakte hai
// NOTE: isse overwrite hota hia vo class ho ya id jo bhi hai

title.style.padding = "20px" // se hum styling kar sakte hai

title.innerText // jo page pe visible hai vo hi dikhta hai 
title.textContent // agar koi chiz koi property ke vaje se nhi dikh rahi hai tho vo bhi is method se dikhegi
title.innerHTML // isse sare html tags vagera sab dikhata hai

document.querySelectorAll() // isse sare elements select ho jate hai
// querySelectorAll() hamesha nodelist deta hai return me 
// so maps, filters use nhi kar sakte hai

document.getElementsByClassName('list-item') // return me HTMLcollection milta hai

Array.from() // isko use karke htmlcollection, nodelist ko array me convert kar sakte hai