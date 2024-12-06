export interface Episodios {
    results: [
    {
      id: number,
      name: string,
      air_date: Date,
      episode: string,
      characters: string [],
      url: string,
      created: Date
    }
  ]
}
