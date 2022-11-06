const container = document.getElementById('container')


for (let i =0; i<5; i++){
    const div = document.createElement('div')
    div.className = 'element'
    div.textContent = `Element ${i+1}`
    container.appendChild(div)
}
