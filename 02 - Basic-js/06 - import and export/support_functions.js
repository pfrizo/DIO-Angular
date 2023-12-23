function gets(){
    return Math.floor(Math.random() * 100) + 1;;
}

function print(text){
    console.log(text);
}

module.exports = {
    gets,
    print
}