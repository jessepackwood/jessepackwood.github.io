import React from 'react';
import Gallery from 'react-grid-gallery';
import bali_surf from '../../assets/portfolio/bali_surf.jpg'
import bali_surf_thumbnail from '../../assets/portfolio/bali_surf_thumbnail.jpg'
import kayla_buff from '../../assets/portfolio/kayla_buff.jpg'
import kayla_buff_thumbnail from '../../assets/portfolio/kayla_buff_thumbnail.jpg'
import colombia_fly from '../../assets/portfolio/colombia_fly.jpg'
import colombia_fly_thumbnail from '../../assets/portfolio/colombia_fly_thumbnail.jpg'
import peacock_abel from '../../assets/portfolio/peacock_abel.jpg'
import peacock_abel_thumbnail from '../../assets/portfolio/peacock_abel_thumbnail.jpg'
import gfc_tacoma from '../../assets/portfolio/gfc_tacoma.jpg'
import gfc_tacoma_thumbnail from '../../assets/portfolio/gfc_tacoma_thumbnail.jpg'
import jakob_backcast from '../../assets/portfolio/jakob_backcast.jpg'
import jakob_backcast_thumbnail from '../../assets/portfolio/jakob_backcast_thumbnail.jpg'
import jeep_five from '../../assets/portfolio/jeep_five.jpg'
import jeep_five_thumbnail from '../../assets/portfolio/jeep_five_thumbnail.jpg'
import landon_wheelie from '../../assets/portfolio/landon_wheelie.jpg'
import landon_wheelie_thumbnail from '../../assets/portfolio/landon_wheelie_thumbnail.jpg'
import janelle_royal from '../../assets/portfolio/janelle_royal.jpg'
import janelle_royal_thumbnail from '../../assets/portfolio/janelle_royal_thumbnail.jpg'
import jakob_cheesman from '../../assets/portfolio/jakob_cheesman.jpg'
import jakob_cheesman_thumbnail from '../../assets/portfolio/jakob_cheesman_thumbnail.jpg'
import janelle_hood from '../../assets/portfolio/janelle_hood.jpg'
import janelle_hood_thumbnail from '../../assets/portfolio/janelle_hood_thumbnail.jpg'
import elfin_cove_thumbnail from '../../assets/portfolio/elfin_cove_thumbnail.jpg'
import elfin_cove from '../../assets/portfolio/elfin_cove.jpg'

import shyannne_yeti from '../../assets/portfolio/shyanne_yeti.jpg'
import shyannne_yeti_thumbnail from '../../assets/portfolio/shyanne_yeti_thumbnail.jpg'

import landon_reeling from '../../assets/portfolio/landon_reeling.jpg'
import landon_reeling_thumbnail from '../../assets/portfolio/landon_reeling_thumbnail.jpg'

import matador_surf from '../../assets/portfolio/matador_surf.jpg'
import matador_surf_thumbnail from '../../assets/portfolio/matador_surf_thumbnail.jpg'

import benchmade_tree from '../../assets/portfolio/benchmade_tree.jpg'
import benchmade_tree_thumbnail from '../../assets/portfolio/benchmade_tree_thumbnail.jpg'
import charley_costa from '../../assets/portfolio/charley_costa.jpg'
import charley_costa_thumbnail from '../../assets/portfolio/charley_costa_thumbnail.jpg'

import blue_steam from '../../assets/portfolio/blue_steam.jpg'
import blue_steam_thumbnail from '../../assets/portfolio/blue_steam_thumbnail.jpg'
import grande_tail from '../../assets/portfolio/grande_tail.jpg'
import grande_tail_thumbnail from '../../assets/portfolio/grande_tail_thumbnail.jpg'

import loki_primo from '../../assets/portfolio/loki_primo.jpg'
import loki_primo_thumbnail from '../../assets/portfolio/loki_primo_thumbnail.jpg'

import shyanne_backpack from '../../assets/portfolio/shyanne_backpack.jpg'
import shyanne_backpack_thumbnail from '../../assets/portfolio/shyanne_backpack.jpg'

import shyanne_casting from '../../assets/portfolio/shyanne_casting.jpg'
import shyanne_casting_thumbnail from '../../assets/portfolio/shyanne_casting_thumbnail.jpg'

import ted_white from '../../assets/portfolio/ted_white.jpg'
import ted_white_thumbnail from '../../assets/portfolio/ted_white_thumbnail.jpg'

import landon_spray from '../../assets/portfolio/landon_spray.jpg'
import landon_spray_thumbnail from '../../assets/portfolio/landon_spray.jpg'

import umpqua_blue from '../../assets/portfolio/umpqua_blue.jpg'
import umpqua_blue_thumbnail from '../../assets/portfolio/umpqua_blue_thumbnail.jpg'

import boat_fog from '../../assets/portfolio/boat_fog.jpg'
import boat_fog_thumbnail from '../../assets/portfolio/boat_fog_thumbnail.jpg'

import trees_fog from '../../assets/portfolio/trees_fog.jpg'
import cheesman_black from '../../assets/portfolio/cheesman_black.jpg'
import cheesman_black_thumbnail from '../../assets/portfolio/cheesman_black.jpg'

import kayla_landscape from '../../assets/portfolio/kayla_landscape.jpg'

const IMAGES =
[{
  src: boat_fog,
  thumbnail: boat_fog_thumbnail,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Elfin Cove Resort, AK"
},
{
  src: gfc_tacoma,
  thumbnail: gfc_tacoma_thumbnail,
  thumbnailWidth: 400,
  thumbnailHeight: 500,
  caption: "Go Fast Campers, Montana"
},
{
  src: kayla_buff,
  thumbnail: kayla_buff_thumbnail,
  thumbnailWidth: 300,
  thumbnailHeight: 212,
  caption: "Buff USA, Colombia"
},
{
  src: colombia_fly,
  thumbnail: colombia_fly_thumbnail,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Umpqua Feather Merchants"
},
{
  src: peacock_abel,
  thumbnail: peacock_abel_thumbnail,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Abel Reels, Colombia"
},
{
  src: jeep_five,
  thumbnail: jeep_five_thumbnail,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Kelty, Utah"
},
{
  src: jakob_cheesman,
  thumbnail: jakob_cheesman_thumbnail,
  thumbnailWidth: 400,
  thumbnailHeight: 500,
  caption: "Umpqua Feather Merchants, Colorado"
},
{
  src: janelle_royal,
  thumbnail: janelle_royal_thumbnail,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Janelle shot in Colombia, featured in Iron and Air magazine"
},
{
  src: jakob_backcast,
  thumbnail: jakob_backcast_thumbnail,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Umpqua Feather Merchants"
},
{
  src: landon_wheelie,
  thumbnail: landon_wheelie_thumbnail,
  thumbnailWidth: 400,
  thumbnailHeight: 500,
},
{
  src: matador_surf,
  thumbnail: matador_surf_thumbnail,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Matador Freerain, Hawaii"
},
{
  src: janelle_hood,
  thumbnail: janelle_hood_thumbnail,
  thumbnailWidth: 400,
  thumbnailHeight: 500,
  caption: "Janelle shot in Colombia, featured in Iron and Air Magazine"
},
{
  src: benchmade_tree,
  thumbnail: benchmade_tree_thumbnail,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Fly Lords & Benchmade Knife Company"
},
{
  src: elfin_cove,
  thumbnail: elfin_cove_thumbnail,
  thumbnailWidth: 400,
  thumbnailHeight: 500,
  caption: "Elfin Cove Resort, AK"
},
{
  src: charley_costa,
  thumbnail: charley_costa_thumbnail,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Costa Sunglasses, AK"
},
{
  src: landon_reeling,
  thumbnail: landon_reeling_thumbnail,
  thumbnailWidth: 400,
  thumbnailHeight: 500,
  caption: "Yeti, AK"
},
{
  src: blue_steam,
  thumbnail: blue_steam_thumbnail,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Umpqua Feather Merchants, Colorado"
},
{
  src: shyannne_yeti,
  thumbnail: shyannne_yeti_thumbnail,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Yeti in AK"
},
{
  src: grande_tail,
  thumbnail: grande_tail_thumbnail,
  thumbnailWidth: 400,
  thumbnailHeight: 500,
  caption: "Redington in Colombia"
},
{
  src: shyanne_backpack,
  thumbnail: shyanne_backpack_thumbnail,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "REI"
},
{
  src: landon_spray,
  thumbnail: landon_spray_thumbnail,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Fly Lords in Alaska"
},
{
  src: loki_primo,
  thumbnail: loki_primo_thumbnail,
  thumbnailWidth: 400,
  thumbnailHeight: 500,
  caption: "Primo Water Company with @loki"
},
{
  src: ted_white,
  thumbnail: ted_white_thumbnail,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "509"
},
{
  src: shyanne_casting,
  thumbnail: shyanne_casting_thumbnail,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "REI"
},
{
  src: umpqua_blue,
  thumbnail: umpqua_blue_thumbnail,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Umpqua Feather Merchants"
},
{
  src: bali_surf,
  thumbnail: bali_surf_thumbnail,
  thumbnailWidth: 400,
  thumbnailHeight: 500,
  caption: "Uluwatu, Bali"
},
{
  src: kayla_landscape,
  thumbnail: kayla_landscape,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Fish Colombia & Fly Lords"
},
{
  src: cheesman_black,
  thumbnail: cheesman_black_thumbnail,
  thumbnailWidth: 400,
  thumbnailHeight: 500,
  caption: 'Arbor Anglers, Colorado'
},
]

const GridGallery = () => {
  return (
    <div>
      <Gallery 
        images={IMAGES} 
        backdropClosesModal={true} 
        margin={0} 
        rowHeight={250}
        enableImageSelection={false}
      />
    </div>
  )
}
        
export default GridGallery