import { Film } from 'lucide-react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer"
    >
      {movie.Poster && movie.Poster !== "N/A" ? (
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-[300px] object-cover"
        />
      ) : (
        <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center">
          <Film className="w-16 h-16 text-gray-400" />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {movie.Title}
        </h3>
        <p className="text-sm text-gray-600">{movie.Year}</p>
      </div>
    </div>
  );
}