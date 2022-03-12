# Battleship Game implementation for the Odin Project

[Live Demo](https://paposeco.github.io/battleship/)

## Features

The player is asked to place 5 ships: carrier (5), battleship (4), destroyer(3), submarine(3) and patrolboat (2). Once the fleet is placed the game begins. The player tries to hit the computer fleet by clicking on an empty location on the computer's board; the computer plays next. The game continues until a player manages to sink the other player's fleet.

## Computer

The computer will start by choosing a random location. Once it hits a ship, it will try all valid locations around the hit location. If the ship orientation has been found, it will only look on that direction.

## Final thoughts

On the first iteration, the game could be played on a terminal with node. Fun times.
I could have done a better job of coding (mixed some dom with game elements), but I lost steam at the end. Overall I'm happy with the result.
