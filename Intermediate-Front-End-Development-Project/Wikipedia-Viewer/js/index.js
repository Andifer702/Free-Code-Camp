$(document).ready(function() {
    var p = document.querySelector('p');
    
    $("#go").click(function() {
        var input = document.getElementById('search').value;
        var encoded = encodeURIComponent(input)
        if (input === '') {
            p.style.backgroundColor = 'transparent';
            p.classList.add = 'hide';
            p.innerHTML = '';
        } else {
            $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search=" + encoded + "&callback=?", function(data) {
                p.innerHTML = "<br> Click the links below";
                p.classList.remove('hide');
                var i = 0
                for (i; i < 5; i++){
                    if (data[3][0] == undefined){
                      p.innerHTML = '<h2> No Matching Result </h2>'
                    }
                    else if (data[3][i] !== undefined){
                        p.innerHTML += '<h2> <a href ="' + data[3][i] + '" target = "_blank">' + data[1][i] + '<br>' + '<h3>' + data[2][i] + '</h3>' + '</h2>' 
                    } else {
                        p.innerHTML += '<h2 class = "hide"> </h2>';
                    }
                }
            });
        }
    });
});
                
