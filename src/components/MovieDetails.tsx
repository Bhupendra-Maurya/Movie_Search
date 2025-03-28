import { MovieDetails as MovieDetailsType } from '../types';
import { X, Star, Clock, Film } from 'lucide-react';

interface MovieDetailsProps {
  movie: MovieDetailsType;
  onClose: () => void;
}

export function MovieDetails({ movie, onClose }: MovieDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
          
          {movie.Poster && movie.Poster !== "N/A" ? (
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-[400px] object-cover"
            />
          ) : (
            <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
              <Film className="w-20 h-20 text-gray-400" />
            </div>
          )}
          
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {movie.Title}
            </h2>
            
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                {movie.imdbRating}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {movie.Runtime}
              </span>
              <span>{movie.Year}</span>
              <span>{movie.Rated}</span>
            </div>
            
            <p className="text-gray-700 mb-4">{movie.Plot}</p>
            
            <div className="space-y-2">
              <p><strong>Director:</strong> {movie.Director}</p>
              <p><strong>Cast:</strong> {movie.Actors}</p>
              <p><strong>Genre:</strong> {movie.Genre}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}