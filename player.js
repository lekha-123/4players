class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    getplayercount() {
        var playercountdata = database.ref("/playerCount");
        playercountdata.on("value",(data)=> {
            playerCount = data.val();
        });
    }
    updatec(count) {
        database.ref('/').update({
            playerCount: count
        });
    }
}