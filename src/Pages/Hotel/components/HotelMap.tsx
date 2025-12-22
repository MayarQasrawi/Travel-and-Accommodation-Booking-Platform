import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface MapProps {
	hotel: {
		lat: number;
		lng: number;
		hotelName: string;
	};
	attractions?: { name: string; lat: number; lng: number }[];
}

const hotelIcon = new L.Icon({
	iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
	iconSize: [48, 48],
	iconAnchor: [16, 32],
});

const attractionIcon = new L.Icon({
	iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
	iconSize: [28, 28],
	iconAnchor: [14, 28],
});

export function HotelMap({ hotel, attractions = [] }: MapProps) {
	return (
		<div className="rounded overflow-hidden h-72 w-full ">
			<MapContainer center={[hotel.lat, hotel.lng]} zoom={14} scrollWheelZoom={false} className="w-full h-full">
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

				{/* Hotel  */}
				<Marker position={[hotel.lat, hotel.lng]} icon={hotelIcon}>
					<Popup>{hotel.hotelName}</Popup>
				</Marker>

				{/* Nearby Attractions */}
				{attractions.map((attr, i) => (
					<Marker key={i} position={[attr.lat, attr.lng]} icon={attractionIcon}>
						<Popup>{attr.name}</Popup>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
}
