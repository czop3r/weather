export interface Weather {
    cityId: string;
    date: string;
    temperature: number;
    precipitation: number;
    humidity: number;
    windInfo: {
        speed: number,
        direction: string
    };
    pollenCount: number;
    type: string;
}
