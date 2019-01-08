//Uma factory retorna um novo 
module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}