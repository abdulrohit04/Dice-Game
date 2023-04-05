
function startplay(){

    var player1 = Math.floor(Math.random()*6 +1)
    var player2 = Math.floor(Math.random()*6 +1)
    var randomImg1 = "images/"+"dice"+player1 + ".png"
    var randomImg2 = "images/"+"dice"+player2 + ".png"
    var img1El = document.querySelectorAll("img")[0]
    var img2El = document.querySelectorAll("img")[1]
    



    img1El.setAttribute("src", randomImg1)
    img2El.setAttribute("src", randomImg2)
    
    
    
}



    