class Game {
    constructor() {}
    getstate() {
        var statedata = database.ref("/gamestate");
        statedata.on("value", function (data) {
            gamestate = data.val();
        })
    }
    update(state) {
        database.ref('/').update({
            gamestate: state
        });
    }
    async start() {
        if (gamestate === 0) {
            player = new Player();
            var playercountdata = await database.ref("/playerCount").once("value");
            if (playercountdata.exists()) {
                playerCount = playercountdata.val();
                player.getplayercount()


            }
            form = new Form();
            form.display();
        }
    }
    play() {
        form.hide();
        textSize(30);
        fill("black");
        text("game start", 500, 350);
    }

}