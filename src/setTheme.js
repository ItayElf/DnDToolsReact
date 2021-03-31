const setTheme = (dark) => {
    // if (dark) {
    //     document.body.style.backgroundColor = "#121212"
    //     document.body.style.color = "#ffffff"
    //     Array.from(document.getElementsByTagName("input")).forEach(i => {
    //         if (!i.className.includes("btn")) {
    //             i.style.backgroundColor = "#121212"
    //             i.style.color = "#ffffff"
    //         } else {
    //             i.style.backgroundColor = "#03dac6"
    //             i.style.borderColor= "#03dac6"
    //             i.style.color = "#000000"
    //         }
            
    //     })
    //     Array.from(document.getElementsByTagName("button")).forEach(i => {
    //         if (i.className.includes("btn-primary")) {
    //             i.style.backgroundColor = "#bb86fc"
    //             i.style.borderColor= "#bb86fc"
    //             i.style.color = "#000000"
    //         } else if (i.className.includes("btn-danger")) {
    //             i.style.backgroundColor = "#cf6679"
    //             i.style.borderColor= "#cf6679"
    //             i.style.color = "#000000"
    //         }
    //     })
    // } else {
    //     document.body.style.backgroundColor = "#ffffff"
    //     document.body.style.color = "#121212"
    //     Array.from(document.getElementsByTagName("input")).forEach(i => {
    //         if (!i.className.includes("btn")) {
    //             i.style.backgroundColor = "#ffffff"
    //             i.style.color = "#000000"
    //         } else {
    //             i.style.backgroundColor = "#198754"
    //             i.style.borderColor= "#198754"
    //             i.style.color = "#ffffff"
    //         }
    //     })
    //     Array.from(document.getElementsByTagName("button")).forEach(i => {
    //         if (i.className.includes("btn-primary")) {
    //             i.style.backgroundColor = "#0d6efd"
    //             i.style.borderColor= "#0d6efd"
    //             i.style.color = "#ffffff"
    //         } else if (i.className.includes("btn-danger")) {
    //             i.style.backgroundColor = "#dc3545"
    //             i.style.borderColor= "#dc3545"
    //             i.style.color = "#ffffff"
    //         }
    //     })
    // }
    if (dark) {
        document.body.classList.add("dark")
        Array.from(document.getElementsByTagName("input")).forEach(i => {
            i.classList.add("dark")
        })
        Array.from(document.getElementsByTagName("button")).forEach(i => {
            i.classList.add("dark")
        })
    } else {
        document.body.classList.remove("dark")
        Array.from(document.getElementsByTagName("input")).forEach(i => {
            i.classList.remove("dark")
        })
        Array.from(document.getElementsByTagName("button")).forEach(i => {
            i.classList.remove("dark")
        })
    }
}

export default setTheme