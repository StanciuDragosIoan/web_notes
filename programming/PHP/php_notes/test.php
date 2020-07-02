<?php

function echo_card(
    $title = "Default Title",
    $desc = "Default Description",
    $img = "./images/fallback.jpg"
) {
    echo "
    <div>
        <h1>$title</h1>   
        <p>$desc</p>    
        <img src='$img' > 
    </div>";
}

echo_card();
