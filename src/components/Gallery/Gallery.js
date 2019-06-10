import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import bali_surf from '../../assets/portfolio/bali_surf.jpg'
import kayla_buff from '../../assets/portfolio/kayla_buff.jpg'
import colombia_fly from '../../assets/portfolio/colombia_fly.jpg'
import peacock_abel from '../../assets/portfolio/peacock_abel.jpg'
import gfc_tacoma from '../../assets/portfolio/gfc_tacoma.jpg'
import jakob_backcast from '../../assets/portfolio/jakob_backcast.jpg'
import jeep_five from '../../assets/portfolio/jeep_five.jpg'
import landon_wheelie from '../../assets/portfolio/landon_wheelie.jpg'
import janelle_royal from '../../assets/portfolio/janelle_royal.jpg'
import jakob_cheesman from '../../assets/portfolio/jakob_cheesman.jpg'
import janelle_hood from '../../assets/portfolio/janelle_hood.jpg'
import elfin_cove from '../../assets/portfolio/elfin_cove.jpg'
import shyannne_yeti from '../../assets/portfolio/shyanne_yeti.jpg'
import landon_reeling from '../../assets/portfolio/landon_reeling.jpg'
import matador_surf from '../../assets/portfolio/matador_surf.jpg'
import benchmade_tree from '../../assets/portfolio/benchmade_tree.jpg'
import charley_costa from '../../assets/portfolio/charley_costa.jpg'
import blue_steam from '../../assets/portfolio/blue_steam.jpg'
import grande_tail from '../../assets/portfolio/grande_tail.jpg'
import loki_primo from '../../assets/portfolio/loki_primo.jpg'
import shyanne_backpack from '../../assets/portfolio/shyanne_backpack.jpg'
import shyanne_casting from '../../assets/portfolio/shyanne_casting.jpg'
import ted_white from '../../assets/portfolio/ted_white.jpg'
import landon_spray from '../../assets/portfolio/landon_spray.jpg'
import umpqua_blue from '../../assets/portfolio/umpqua_blue.jpg'
import boat_fog from '../../assets/portfolio/boat_fog.jpg'
import trees_fog from '../../assets/portfolio/trees_fog.jpg'
import cheesman_black from '../../assets/portfolio/cheesman_black.jpg'
import kayla_landscape from '../../assets/portfolio/kayla_landscape.jpg'

const IMAGES =
[{
  src: boat_fog,
  thumbnail: boat_fog,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Shot for Elfin Cove Resort, AK"
},
{
  src: gfc_tacoma,
  thumbnail: gfc_tacoma,
  thumbnailWidth: 400,
  thumbnailHeight: 500,
  caption: "September snow during GoFast DirtCamp"
},
{
  src: kayla_buff,
  thumbnail: kayla_buff,
  thumbnailWidth: 300,
  thumbnailHeight: 212,
  caption: "Shot for Buff USA in Colombia"
},
{
  src: colombia_fly,
  thumbnail: colombia_fly,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Peacock Bass crusher for Umpqua"
},
{
  src: peacock_abel,
  thumbnail: peacock_abel,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Abel Peacock Bass Reel"
},
{
  src: jeep_five,
  thumbnail: jeep_five,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Shot for Kelty Built, featured on @Jeep"
},
{
  src: jakob_cheesman,
  thumbnail: jakob_cheesman,
  thumbnailWidth: 400,
  thumbnailHeight: 500,
  caption: "Umpqua Feather Merchants"
},

{
  src: janelle_royal,
  thumbnail: janelle_royal,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Janelle featured in Iron and Air magazine"
},
{
  src: jakob_backcast,
  thumbnail: jakob_backcast,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Umpqua Feather Merchants"
},
{
  src: landon_wheelie,
  thumbnail: landon_wheelie,
  thumbnailWidth: 400,
  thumbnailHeight: 500,
},
{
  src: matador_surf,
  thumbnail: matador_surf,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Matador Freerain"
},
{
  src: janelle_hood,
  thumbnail: janelle_hood,
  thumbnailWidth: 400,
  thumbnailHeight: 500,
  caption: "@motogypsy featured in Iron and Air"
},
{
  src: benchmade_tree,
  thumbnail: benchmade_tree,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Fly Lords X Benchmade Knife Company"
},
{
  src: elfin_cove,
  thumbnail: elfin_cove,
  thumbnailWidth: 400,
  thumbnailHeight: 500,
  caption: "Elfin Cove Resort, AK"
},
{
  src: charley_costa,
  thumbnail: charley_costa,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Costa Sunglasses"
},
{
  src: landon_reeling,
  thumbnail: landon_reeling,
  thumbnailWidth: 400,
  thumbnailHeight: 500,
  caption: "Yeti"
},
{
  src: blue_steam,
  thumbnail: blue_steam,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Umpqua Feather Merchants"
},
{
  src: shyannne_yeti,
  thumbnail: shyannne_yeti,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Yeti in AK"
},
{
  src: grande_tail,
  thumbnail: grande_tail,
  thumbnailWidth: 400,
  thumbnailHeight: 500,
  caption: "Redington in Colombia"
},
{
  src: shyanne_backpack,
  thumbnail: shyanne_backpack,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Shot for REI/Fly Lords"
},
{
  src: landon_spray,
  thumbnail: landon_spray,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Shot for REI/Fly Lords"
},
{
  src: loki_primo,
  thumbnail: loki_primo,
  thumbnailWidth: 400,
  thumbnailHeight: 500,
  caption: "Primo Water Company with @loki"
},
{
  src: ted_white,
  thumbnail: ted_white,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "509"
},
{
  src: shyanne_casting,
  thumbnail: shyanne_casting,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Shot for REI/Fly Lords"
},
{
  src: umpqua_blue,
  thumbnail: umpqua_blue,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Umpqua Feather Merchants"
},
{
  src: bali_surf,
  thumbnail: bali_surf,
  thumbnailWidth: 400,
  thumbnailHeight: 500,
  caption: "Uluwatu, Bali"
},
{
  src: kayla_landscape,
  thumbnail: kayla_landscape,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Payara waters with Fly Lords"
},
{
  src: cheesman_black,
  thumbnail: cheesman_black,
  thumbnailWidth: 400,
  thumbnailHeight: 500,
  caption: "Primo Water Company with @loki"
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