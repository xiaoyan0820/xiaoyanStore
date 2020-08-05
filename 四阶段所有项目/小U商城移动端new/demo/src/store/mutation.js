export default {
    allPrice(state,n){
        console.log(state,'数据',n,'此参数')
        state.priceAll = n
        //存session
    }
}