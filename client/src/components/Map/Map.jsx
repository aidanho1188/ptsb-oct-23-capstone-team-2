import {MapContainer, TileLayer, Marker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function Map({lat, lng}) {
  return (
    <MapContainer center={[lat, lng]} zoom={13} style={{height: '100%', width: '100%', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px'}}>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
      <Marker position={[lat, lng]} />
    </MapContainer>
  )
}

export default Map
