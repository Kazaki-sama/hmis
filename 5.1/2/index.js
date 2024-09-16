const rows=document.querySelectorAll('tbody tr');
const lastRow=rows[rows.length - 1]
rows.forEach((row, index)=>{
    if(index%2!=0){
        row.classList.add('highlight')
    }
})


lastRow.classList.remove('highlight')


