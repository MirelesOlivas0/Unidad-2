fetch('menu.json')
.then(response => response.json())
then(data=>{
    const menucontainer= document.getElementById
    (' menu-container');
    data.items.forEach(category=>{
        const categoryTitle= document.createElement('h2');
        categoryTitle.textContent= category.category;
        menucontainer.appendChild(categoryTitle);const table = document.
        createElement ('table');
        const tableHead= '<tr><th>foto</th><th>descripcion</th><th>precio</th><7tr>';
        let tableBody='';
        category.items.forEach (item =>{
            tableBody +=`1<tr>
               <td><img scr="${item.image} alt="${item.name}
               <td>${item.name} - "${item.description}"</td>
               <td>${item.precio}</td>
            </tr>`;
       })

    });
    
})
