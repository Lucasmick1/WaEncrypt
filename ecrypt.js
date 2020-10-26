class WaEncrypt{
    constructor(){

    }
    encode(secret, data){
        return this.#_magic(secret, data, 'encode');
    }
    decode(secret, data){
        if(this.#_isValid(secret, data)){
            let encodedText = this.#_isValid(secret, data)
            return this.#_magic(secret, encodedText, 'decode');
        }
        return {message: 'Invalid secret'}
    }
     #_magic(secret,data, key){
        let alfabet1 = this.#_makeRandomic(this.#_alfabetDefault1(), secret) 
        let alfabet2 = this.#_makeRandomic(this.#_alfabetDefault2(), secret) 
         
        let dataArray = []
        let newData = []
        if(typeof data === 'string'){
           dataArray = String(data).split('')
          
        }else if(typeof data === 'number'){
            dataArray = String(data).split('')
        }
        switch (key) {
            case 'encode':
                dataArray = [...String(data).split(''),'s','i','v','i','s','p','a','c','e','m','p','a','r','a','b','e','l','l','u','m']
                for(let i = 0; i < dataArray.length; i++){
                    if(dataArray[i] === '\\'){
                        newData.push('±') 
                    }else{
                        if(dataArray[i] === ' '){
                            newData.push(' ')
                        }else{
                            const index = alfabet1.indexOf(dataArray[i])
                                newData.push(alfabet2[index])   
                        }
                    }
                        
                }
                
                break;
            case 'decode':
                
                for(let i = 0; i < dataArray.length; i++){
                    
                    if(dataArray[i] === '±'){
                        newData.push('\\') 

                    }else{
                        if(dataArray[i] === ' '){
                            newData.push(' ')
                        }else{
                                const index = alfabet2.indexOf(dataArray[i])
                                    newData.push(alfabet1[index])
                                
                                
                            }
                    }
                }
                break
            default:
                break;
        }
        
        return newData.join('')
    }

    #_makeRandomic(array, secret){
        let secretArray = secret.split('')
        let newArray = [].concat(array)
        for(let i = 0; i < secretArray.length; i++){
            let init = newArray[newArray.indexOf(secretArray[i])]
            let random = newArray[0]
            newArray[newArray.indexOf(secretArray[i])] = random
            newArray[0] = init
        }
        return newArray
    
    }

    #_alfabetDefault1(){
        return ['a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z', 
        '0','1', '2','3','4','5','6','7','8','9', '.', ',', 
        'á', 'é', 'ã', '-', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K','ó','L','M','N','O','P','Q','R','S','T',
        'U','V','W','X','Y','Z','Ç','É','Ã','Á','À','ê','Ê','È',
        'ç','!',"@", '#','$','p', '/','ñ','Ñ','Ó','(', ')',']','}','{',
        '[', '%', '~', '+', "''", '""', "©", "|",";",'Ý', ":", "?",'°',
         ".",'£', '¢', '¬','¨',"&",'*','-', '=', '§',"¹", '²','³', '`', 
         '´', 'ª', 'º', '^','ý' 
        ]
    }
    #_alfabetDefault2(){
        return ["/", "h", "4", "#", ";", "j", "z", "0", "7", "i", "p", "q", "v",
         "n", "6", "5", "&", "u", "3", "g", "{", "m", "d", ")", "8", "1", "c",
          "k", "y", "t", "C", "2", "o", "x", "b", "9", "B", "D", "H", ".",'Ó', "L",
           "P", "I", "E", ",", "Q", "ç", "O", "Ã", "á", "R", "K", "M", "A", "ã",
            "a", "F", "N", "S", "T", "G", "-",
        "È", "À", "É", "Á", "Z",'ó', "Y", "V", "J", "X", "Ê",'Ý', "U", "Ç", "ê", "W",
        "@", "p", "}", "]", "w", "é", "f", "ñ", "s", "r", "!", "Ñ", "~", "$",
        "°", "|", ":", "(", "+", "[", "%", '"', "l", "?", "'", "©",
        "`", "²", ".", "*", "¢",'ý', "¨", "e", "¹", "³", "=", "£", "¬", "-", "§", 
        "º", "^", "ª", "´" 
        ]
        
    }

    #_isValid(secret, data){
        let stringControll = 'sivispacemparabellum'
        let dataToArray = data.split('')
        let stringEncoded = dataToArray.splice((dataToArray.length - 20), 20).join('')
       if(this.#_magic(secret, stringEncoded, 'decode') === stringControll){
           return dataToArray.join('')
        }else{
            return false
       }
        
    }
}



