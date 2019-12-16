const danishWords = ['plante', 'kaffe', 'bog', 'a', 'op', 'planetarium'];

function findShortestWord(arr) {
        
    let word = arr[0]

    for (i = 0; i < arr.length; i++) {
        
        if (arr[i].length < word.length) 
            word = arr[i];
        }
        console.log(word);
        
    }
    
findShortestWord(danishWords);

