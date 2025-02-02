export async function getProduts(){
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}


export async function getProduct(slug){
    const response = await fetch(`https://fakestoreapi.com/products/${slug}`);
    const data = await response.json();
    return data;
}