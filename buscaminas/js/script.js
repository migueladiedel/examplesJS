(function() { 
// variables de configuración 
    var elapsedSeconds = 0; 
    var width = 8, height = 8, minesCount = 8; 
    var totalAttempts = (width * height) - minesCount; 
     
    window.onload = function() { 
        setInterval(function() { 
            elapsedSeconds += 1; 
            document.getElementById('timer').innerHTML = elapsedSeconds; 
        }, 1000); 
     
    drawMines(width, height, 'mines'); 
    matrix = generateField(width, height, minesCount); 
 
    buttons = document.getElementsByName('btn'); 
 
    for (var i = 0; i < buttons.length; i++) { 
        document.getElementById(buttons[i].id).onclick = function(e) { 
            var point = e.target.id.split('_'); 
            e.target.value = matrix[parseInt(point[0])][parseInt(point[1])]; 
            if (matrix[parseInt(point[0])][parseInt(point[1])] == '*') { 
                alert('Has perdido!'); 
                //location.href = 'index.html'; 
            }; 
            e.target.disabled = "true"; 
            totalAttempts--; 
            if (!totalAttempts) { 
                alert('Increible ganaste!'); 
                //location.href = 'index.html'; 
            } 
        } 
    } 
}})(); 
 
function generateField(width, height, maxMines) { 
    var field = makeMatrix(width, height); 
    var minesCounter = 0; 
 
    while(minesCounter < maxMines) { 
        var randomMine = getRandom(0, 1); 
        var randomPosition = [getRandom(0, width - 1), getRandom(0, height - 1)]; 
 
        if (!field[randomPosition[0]][randomPosition[1]]) { 
            minesCounter += (randomMine) ? 1 : 0; 
            if (randomMine) { 
                field[randomPosition[0]][randomPosition[1]] =  '*'; 
 
                for (var x=randomPosition[0]-1; x<=randomPosition[0]+1; x++) { 
                    for (var y=randomPosition[1]-1; y<=randomPosition[1]+1; y++) { 
                        try { 
                            field[x][y] += (field[x][y] != '*') ? 1 : ''; 
                        } 
                        catch(e) { }//TypeError probablemente 
                    } 
                } 
            } 
        } 
    } 
    return field; 
} 
 
function getRandom(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)); 
} 
 
function makeMatrix(width, height) { 
    var matrix = new Array(height); 
    for (var i=0; i<height; i++) { 
        matrix[i] = new Array(width); 
        for (var j = 0; j<width; j++) { 
            matrix[i][j] = 0; 
        } 
    } 
    return matrix; 
} 
 
function drawMines(width, height, elementId) { 
    var div = document.getElementById(elementId); 
    div.innerHTML = ''; 
 
    for(var i = 0; i < height; i++) { 
        for(var j = 0; j < width; j++) { 
           div.innerHTML  += '<input type="button" name="btn" id="' + i + '_' + j + '" style="width:50px; height:50px" value=" "/>'; 
        } 
        div.innerHTML += '<br/>'; 
    } 
} 