let songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];


let song = {
  songId: ' ',
  title: 'Andrew in Drag',
  artist: 'The magnetic fields'
}

function addSongToDatabase(song) {
   songDatabase = [...songDatabase, song]
   return songDatabase;
}

//console.log(addSongToDatabase(song))


function getSongByTitle(title) {
  let song = undefined;
  for (let i=0; i<songDatabase.length; i++) {
    if (songDatabase[i].title.match(title)) {
      song = songDatabase[i];
      return song;
    } return; 
  } 
}

//console.log(getSongByTitle('Andrew in Drag'));


let myPlaylist = [];

function addSongToMyPlaylist(title) {
  title = {songId: 2, title: '3 nails in wood', artist: 'The carpenters'};
  myPlaylist= [...myPlaylist, title]
  return myPlaylist;
}

console.log(addSongToMyPlaylist('3 nails in wood'));
