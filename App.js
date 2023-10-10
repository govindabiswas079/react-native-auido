import React, { Fragment, useEffect } from 'react'
import { Button, NativeModules, ScrollView, View, } from "react-native";

const { RNAndroidStore, RNReactNativeGetMusicFiles } = NativeModules;
const App = () => {

  const GetAllSong = () => {
    RNAndroidStore.getAll({
      blured: true,
      artist: true,
      duration: true,
      genre: true,
      title: true,
      cover: true,
    }, (response) => {
      console.log(response)
    }, (error) => {
      console.log(error)
    })
  }
  const GetAllArtists = () => {
    RNAndroidStore.getArtists({},
      (response) => {
        console.log(response)
      }, (error) => {
        console.log(error)
      }
    )
  }
  const GetAllAlbums = () => {
    RNAndroidStore.getAlbums({},
      (response) => {
        console.log(response)
      }, (error) => {
        console.log(error)
      }
    )
  }
  const GetSongByAlbum = () => {
    RNAndroidStore.getSong({
      album: "Code Blue (2019)",
      // artist: "Jubin Nautiyal"
    },
      (response) => {
        console.log(response)
      }, (error) => {
        console.log(error)
      }
    )
  }
  const GetSongByArtist = () => {
    RNAndroidStore.getSong({
      // album: "Code Blue (2019)",
      artist: "Jubin Nautiyal"
    },
      (response) => {
        console.log(response)
      }, (error) => {
        console.log(error)
      }
    )
  }

  const deleteSongById = () => {
    RNAndroidStore.deleteSongById("224044")
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const deleteSongByArtist = () => {
    RNAndroidStore.deleteSongByArtist("8777974403958468320")
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
        console.log(error)
      })
  }
  const deleteSongByAlbum = () => {
    RNAndroidStore.deleteSongByAlbum(209450742757367244)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }




  useEffect(() => {
    RNReactNativeGetMusicFiles.getAll({
      blured: true, // works only when 'cover' is set to true
      artist: true,
      duration: true, //default : true
      genre: true,
      title: true,
      cover: true,
    },
      (response) => {
        // console.log(response)
      }, (error) => {
        // console.log(error)
      }
    )
  }, []);


  const buttons = [
    { id: 1, onPress: () => GetAllSong(), Title: 'Get All Song', },
    { id: 2, onPress: () => GetAllArtists(), Title: 'Get All Artists', },
    { id: 3, onPress: () => GetAllAlbums(), Title: 'Get All Albums', },
    { id: 4, onPress: () => GetSongByAlbum(), Title: 'Get Song By Albums', },
    { id: 5, onPress: () => GetSongByArtist(), Title: 'Get Song By Artist', },
    { id: 6, onPress: () => deleteSongById(), Title: 'Delete Song By ID', },
    { id: 7, onPress: () => deleteSongByArtist(), Title: 'Delete Artist By ID', },
    { id: 8, onPress: () => deleteSongByAlbum(), Title: 'Delete Album By ID', },
  ];

  return (
    <Fragment>
      <ScrollView showsVerticalScrollIndicator={false}>
        {buttons?.map((value, index) => (
          <View key={index} style={{ paddingHorizontal: 15, paddingVertical: 5 }}>
            <Button onPress={value?.onPress} title={value?.Title} />
          </View>
        ))}
      </ScrollView>
    </Fragment>
  )
}

export default App