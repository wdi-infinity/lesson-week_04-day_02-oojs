


class RecorAlbums {

    constructor (){

        this.artistName = 'Coldplay' ;
        this.albumName = 'Ghost Stories' ;
        this.songs = ['Always in My Head' , 'Magic','Ink','A Sky Full of Stars'] ;
        this.currentSong = 'Ink' ;
    }
    nextSong(){
        for (let i in this.songs){
            if (this.currentSong === this.songs[i]){
                return this.songs[i+1]
            }
        }
    }
    previousSong(){
        for (let i in this.songs){
            if (this.currentSong === this.songs[i]){
                return this.songs[i-1]
            }
        }
    }
    }
