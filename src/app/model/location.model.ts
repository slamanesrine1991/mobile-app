export interface Place {
    title: string;
    city?: string;
    country?: string;
    keyWords?: string;
    selected?: boolean;
    coordinates?: {
        longitude: number;
        latitude: number;
    }
    photo?: string[];
    timestamp?: number;
}