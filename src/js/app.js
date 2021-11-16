function acType(checkbox) {
    var checkboxes = document.getElementsByName('acType')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function tripWay(checkbox) {
    var checkboxes = document.getElementsByName('tripWay')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
} 