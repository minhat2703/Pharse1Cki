function renderProduct() {
    axios.get('http://localhost:3000/Product')
        .then(response => {
            let dataProduct = response.data
            let renderProduct = dataProduct.map(dataProduct => {
                return `
                <tr>
                    <td>${dataProduct.id}</td>
                    <td>${dataProduct.nameProduct}</td>
                    <td>${dataProduct.imageProduct}</td>
                    <td>${dataProduct.descriptionProduct}</td>
                    <td>${dataProduct.colorProduct}</td>
                    <td>${dataProduct.quannityProduct}</td>
                    <td>${dataProduct.sizeProduct}</td>
                    <td>
                    <button data-toggle="modal" data-target="#updateProduct" id="update" onclick="updateProduct(${dataProduct.id})" ><i class="fa fa-cogs"></i></button>
                    <button onclick="deletedProdcut(${dataProduct.id})" id="deleted"><i class="fa fa-trash"></i></button>
                    </td>
                </tr>
            `
            }).join('')
            document.getElementById('tbl').innerHTML = renderProduct
        })
        .catch(error => {
            console.log(error);
        })
}


