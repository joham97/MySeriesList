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

export interface Episode{
    id: string;
    combinedEpisodeNumber: string;
    combinedSeason: string;
    dvdChapter: string;
    dvdDiscId: string;
    dvdEpisodeNumber: string;
    dvdSeason: string;
    directors: string[];
    epImgFlag: string;
    episodeName: string;
    episodeNumber: number;
    firstAired: string;
    guestStars: string[];
    imdbId: string;
    language: string;
    overview: string;
    productionCode: string;
    rating: string;
    seasonNumber: number;
    writers: string[];
    absoluteNumber: string;
    airsAfterSeason: number;
    airsBeforeSeason: number;
    airsBeforeEpisode: number;
    filename: string;
    lastUpdated: string;
    seriesId: string;
    seasonId: string;
}

export interface Season{
    seasonId: string;
    seasonNumber: number;
    episodes: Episode[];
}