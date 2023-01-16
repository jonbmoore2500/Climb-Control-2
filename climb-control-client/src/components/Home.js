import React from 'react'

function Home() {

    return(
        <div id="homeDiv">
            <p>This is my phase 3 project. It organizes Climbers, Setters, Routes, and Climbs.</p>
            <p>
                In the Climbers tab you can view all the Climbers and 
                assign them Climbs to pair them with Problems they have successfully climbed.
                This might update some information about the climber, such as the hardest Problem they have climbed
                or the average difficulty of all the Problems they have climbed.
            </p>
            <p>
                In the Problems tab you can view all the available Problems, along with information about them.
                Only Problems that are still available to be climbed are displayed. You can also use the form to 
                create new Problems or edit or delete an existing Problem.
            </p>
        </div>
    )
}

export default Home 