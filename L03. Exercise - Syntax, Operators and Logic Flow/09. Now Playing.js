function nowPlaying(inputData) {
    let song = inputData[0];
    let artist = inputData[1];
    let length = inputData[2];

    let result = `Now Playing: ${artist} - ${song} [${length}]`;
    console.log(result);
}

// function tests
nowPlaying(['Number One', 'Nelly', '4:09']);