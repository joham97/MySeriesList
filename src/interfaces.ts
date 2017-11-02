export interface Series{
    id: string;
    seriesId: string;
    language: string;
    seriesName: string;
    banner: string;
    overview: string;
    firstAired: string;
    imdbId: string;
    zap2ItId: string;
    actors: string[];
    airsDayOfWeek: string;
    airsTime: string;
    contentRating: string;
    genres: string[];
    network: string;
    rating: string;
    runtime: string;
    status: string;
    fanart: string;
    lastUpdated: string;
    poster: string;
}

export interface Cover{
    cover: string;
}