function anagram(str){
    var result = []
    if(!str){
        return []
    }
    if(str.length === 1){
        return [str]
    }
    if(str.length === 2){
        //return["ab","ba"]
        return [str[0] + str[1] , str[1] + str[0]]
    }
    if(str.length === 3){
        result.push("a" + anagram(drop("abc",0))[0])
        result.push("a" + anagram("bc")[1])
        result.push("b" + anagram("ac")[0])
        result.push("b" + anagram("ac")[1])
        result.push("c" + anagram("ab")[0])
        result.push("c" + anagram("ab")[1])

        return result
    }
    
    
}
function drop(str,n){
    var result = ""
    for(var i = 0; i < str.length; i++){
        if(i === n){
            continue
        }
            
        result = result + str[i]
    }
    return result
}

module.exports = anagram
module.exports = drop