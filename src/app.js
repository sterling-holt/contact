import './global.scss'


let params = {}
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
    for (const [key, value] of urlParams) {
        params[key] = value;
    }
console.log(params)



//  ------------
let app = document.createDocumentFragment()
//  ------------
let photo = document.getElementById("contact-photo")
photo.setAttribute("src", "data:image/jpeg;base64, iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEXiAHT////gAGf87PPgAGrgAGb/+v3iAHHjGHrnUpD//P7hAG/hAGzsgKvqbqHoYJj65Oz41OPvlbnwnr72xNfzr8n63ejpZ53xpcP2xtn86/LmPojnTY/nV5LujLL+9Pn3zd30vNHth6/fAGDseqfztMzkJX7lM4PmQ4rqbaFnGP+9AAAEHElEQVR4nO3de0OqMBjH8UHDWSzvF7TjtczO+3+Dx8vJsHB7gLGL/b5/R/gJHAg2GEMIIYQQQgghhBBCCCGEEEIINVHsRbw5oHzwonlzRB75UXzvwicIIYTQeRBCCKH7PBG2euvNeDhYLrfKF/v2/LwcDMej/iokYW+3fRQx51zKNE1flX+H18NPpFJyHsuXt/EkAOHTpsNimYqvhRKlMPdiRSq5nO5aXgtn05in3xYiC89MmSxG3gozxsXPhcoJj0jOhl4Ks1QWLlRaeEhKldGNcN2+9bG0ivBgZDO/hJ2kYP88V03IWDz1SDhh34eXXFWFh9954+BhX7i5vQFZDSETyc4P4TBRLlRdeFi2cMCxLRxo1ldHyOKBe2Gm3oI1hSzJXAtHOmBNIUt+HjWsCuf6ldUUMj53KnxXjaLn6grFu0vhtvhE7aq6QiaX7oQT7ZuQGRCypOdM+KLfR00IxYcr4Yi0pvpCFl+Pp/aEhGGGGRGKvRvhjHYbz4CQxWsnwj+kTWhEKBYuhHPKQMrMCFmSv9hoSzhQfCa8enEmhFdXNWwJ27Sd1IzwaqyxJOxRV2NEyOLc2aklYUY4YTtlRijH1oUL4k5qSChy16UsCcnfaTEjZMK2cGJbmHsj2hHuqG9DU0L+dTfDjnBJPBoaE6Zf16TsCLvUgcbY+7BjWUj7XHHMlPDFspD+9UBDwtxgakW4oq/ElDC2KySfsxkUXj5eWBHSD4fGhPxyPcqKsO9AeLnXZkU4Ix/wzQn7VoUjB9vwFwkb/J63nPfOzcf291I57n/W4L8j8M/oQGNCJi9rL//CG82Y0NsgDD8Iww/C8IMw/CAMPwjDD8Lwg9CvdLMdFC1TQVhlNWbiUUtZ1DYibOtW43BOBVNCTRBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBC6L9QLB6VLYoWqnCHVLca8n+VVSBqMiSsshqHhXUfv0oQhh+E4Qdh+EEYfhCGH4ThB2H4QRh+EIbf")


//  let name = document.getElementById("name")
//  name.innerText = params.name && params.name

//  let title = document.getElementById("title")
//  title.innerText = params.title && params.title

//  let phone = document.getElementById("phone")
//  phone.innerText = params.phone && params.phone




document.getElementById("btn").addEventListener("click", e => {
    const data = `BEGIN:VCARD\nVERSION:3.0\nFN:${params.name}\nTEL;TYPE=CELL:${params.phone && params.phone}\nEND:VCARD`
    const url = window.URL.createObjectURL(new Blob([data], { type: 'text/vcard' }))

    let a = document.createElement("a")
    a.href = url
    a.download = `${params.name}.vcf`
    document.body.appendChild(a)
    a.click()

    
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)

    console.log(data)
    console.log(url)
})




//  ----------------
//  append our app to root
document.getElementsByTagName("body")[0].appendChild(app)
//  ----------------