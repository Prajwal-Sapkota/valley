import { Link } from 'react-router-dom';
import roomsData from '../../data/rooms.json'; // Adjust path as needed

export default function DropStay() {
  const featuredRooms = roomsData.rooms;

  return (
    <div id="stay"
      className="absolute left-30 top-full w-52 bg-black border-y border-emerald-700/50 text-white shadow-lg py-2 z-50 flex flex-col space-y-3"
    >
      {featuredRooms.map((room) => (
        <Link 
          key={room.id}
          to={`/rooms/${room.slug}`}
          className="text-sm hover:text-[#b99d75] transition-colors text-left ml-3 px-3 py-1"
          onClick={() => window.scrollTo(0, 0)}
        >
          {room.name}
        </Link>
      ))}
    </div>
  );
}