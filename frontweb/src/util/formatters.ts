export const formatPrice = (price: number) => {

    const params = {maximumFractionDigits: 2, minimumFractionDigits: 2};
    return new Intl.NumberFormat('en-US', params).format(price);
    // return new Intl.NumberFormat('pt-BR', params).format(price);
}
