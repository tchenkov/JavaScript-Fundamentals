function treasureLocator(inputData) {
    function Island(x1, y1, x2, y2, name) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.name = name;
    }
    function Treasure(x, y) {
        this.x = x;
        this.y = y;
    }
    function isTreasureOnIsland(treasure, island) {
        let x = treasure.x;
        let y = treasure.y;
        let xMin = island.x1;
        let xMax = island.x2;
        let yMin = island.y1;
        let yMax = island.y2;
        return xMin <= x && x <= xMax && yMin <= y && y <= yMax;
    }

    let islands = [];
    //noinspection SpellCheckingInspection
    islands.push(new Island(8, 0, 9, 1, "Tokelau"));
    islands.push(new Island(1, 1, 3, 3, "Tuvalu"));
    islands.push(new Island(5, 3, 7, 6, "Samoa"));
    islands.push(new Island(0, 6, 2, 8, "Tonga"));
    islands.push(new Island(4, 7, 9, 8, "Cook"));

    for (let i = 0; i < inputData.length; i += 2) {
        let treasure = new Treasure(inputData[i], inputData[i+1]);

        let result = 'On the bottom of the ocean';
        for (let island of islands) {
            if (isTreasureOnIsland(treasure, island)){
                result = island.name;
                break;
            }
        }

        console.log(result);
    }
}

// function tests
treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
console.log();
treasureLocator([6, 4]);