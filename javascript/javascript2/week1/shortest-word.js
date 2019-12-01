const danishWords = ['plante', 'kaffe', 'bog', 'b', 'planetarium'];

function findShortestWord(arr) {
        
    let word = arr[0]

    for (i = 0; i < arr.length; i++) {
        
        if (arr[i].length < arr[0].length) 
            word = arr[i];
        }
        console.log(word);
        
    }
    
findShortestWord(danishWords);

