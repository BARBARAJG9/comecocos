statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.splatter)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    statusbar.value += 10
    sprites.destroy(otherSprite, effects.hearts, 500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -2
})
let statusbar: StatusBarSprite = null
tiles.setCurrentTilemap(tilemap`level1`)
info.setScore(0)
let PacMan = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 f f f 3 3 . 
    . 3 3 3 3 3 3 3 3 3 f f 1 3 3 3 
    . 3 3 3 3 3 3 3 3 3 f f f 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(PacMan)
controller.moveSprite(PacMan, 100, 100)
PacMan.setPosition(64, 16)
PacMan.setBounceOnWall(true)
animation.runImageAnimation(
PacMan,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 f f f 3 3 . 
    . 3 3 3 3 3 3 3 3 3 f f 1 3 3 3 
    . 3 3 3 3 3 3 3 3 3 f f f 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 f f f 3 3 . 
    . 3 3 3 3 3 3 3 3 3 f f 1 3 3 3 
    . 3 3 3 3 3 3 3 3 3 f f f 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 . . . . . . . . 
    . 3 3 3 3 3 3 3 . . . . . . . . 
    . 3 3 3 3 3 3 3 3 . . . . . . . 
    . . 3 3 3 3 3 3 3 3 3 . . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    `],
500,
true
)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.value = 100
statusbar.setBarBorder(1, 15)
statusbar.positionDirection(CollisionDirection.Top)
statusbar.attachToSprite(PacMan, 0, 1)
let Fantasma1 = sprites.create(img`
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 f 5 5 5 5 5 f 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 f f f 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 . 5 5 5 . 5 5 5 . 5 5 5 5 
    . 5 . . . 5 . . . 5 . . . 5 . . 
    `, SpriteKind.Enemy)
Fantasma1.setPosition(randint(0, 784), randint(32, 656))
Fantasma1.setBounceOnWall(true)
Fantasma1.setVelocity(50, 50)
let Fantasma2 = sprites.create(img`
    . . . 8 8 8 8 8 8 8 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    8 8 8 8 f 8 8 8 8 8 f 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 f f f 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 . 8 8 8 . 8 8 8 . 8 8 8 8 
    . 8 . . . 8 . . . 8 . . . 8 . . 
    `, SpriteKind.Enemy)
Fantasma2.setPosition(randint(0, 784), randint(32, 656))
Fantasma2.setBounceOnWall(true)
Fantasma2.setVelocity(50, 50)
let Fantasma3 = sprites.create(img`
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 f 2 2 2 2 2 2 2 f 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 f f f 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 . 2 2 2 . 2 2 2 . 2 2 2 
    . 2 2 2 . 2 2 2 . 2 2 2 . 2 2 2 
    . . 2 . . . 2 . . . 2 . . . 2 . 
    `, SpriteKind.Enemy)
Fantasma3.setPosition(randint(0, 784), randint(32, 656))
Fantasma3.setBounceOnWall(true)
Fantasma3.setVelocity(50, 50)
let Fantasma_4 = sprites.create(img`
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 f 7 7 7 7 7 7 7 f 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 f f f 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 . 7 7 7 . 7 7 7 . 7 7 7 
    . 7 7 7 . 7 7 7 . 7 7 7 . 7 7 7 
    . . 7 . . . 7 . . . 7 . . . 7 . 
    `, SpriteKind.Player)
Fantasma_4.setPosition(randint(0, 784), randint(32, 656))
Fantasma_4.setBounceOnWall(true)
Fantasma_4.setVelocity(50, 50)
let COMIDA_1 = sprites.create(img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 8 
    . . . . . . 8 8 8 7 7 8 8 6 8 8 
    . . e e e e c 6 6 8 8 . 8 7 8 . 
    . e 2 5 4 2 e c 8 . . . 6 7 8 . 
    e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
    e 2 e e 2 2 2 2 e e e e c 6 8 . 
    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e c c e c 2 2 2 2 2 2 2 e 
    . . . . . . . c 2 e e 2 2 e 2 c 
    . . . . . . . c e e e e e e 2 c 
    . . . . . . . . c e 2 2 2 2 c . 
    . . . . . . . . . c c c c c . . 
    `, SpriteKind.Food)
COMIDA_1.setPosition(randint(0, 784), randint(32, 656))
COMIDA_1.setBounceOnWall(true)
let COMIDA_2 = sprites.create(img`
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 8 6 6 . . . 6 8 . . 
    . . . e e e 8 8 6 6 . 6 7 8 . . 
    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
    e e 2 e 2 2 4 2 2 e e e c . . . 
    e e e e 2 e 2 2 e e e c . . . . 
    e e e 2 e e c e c c c . . . . . 
    . c c c c c c c . . . . . . . . 
    `, SpriteKind.Food)
COMIDA_2.setPosition(randint(0, 784), randint(32, 656))
COMIDA_2.setBounceOnWall(true)
let COMIDA_3 = sprites.create(img`
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 8 6 6 . . . 6 8 . . 
    . . . e e e 8 8 6 6 . 6 7 8 . . 
    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
    e e 2 e 2 2 4 2 2 e e e c . . . 
    e e e e 2 e 2 2 e e e c . . . . 
    e e e 2 e e c e c c c . . . . . 
    . c c c c c c c . . . . . . . . 
    `, SpriteKind.Food)
COMIDA_3.setPosition(randint(0, 784), randint(32, 656))
COMIDA_3.setBounceOnWall(true)
forever(function () {
    if (info.score() == 100) {
        game.gameOver(true)
        game.setGameOverEffect(true, effects.confetti)
    }
})
