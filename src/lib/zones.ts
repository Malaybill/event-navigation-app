export interface Zone {
    name: string;
    slug: string;
    image: string;
    color: string;
}

export const zones: Zone[] = [
    {
        name: "Main Stage",
        slug: "main-stage",
        image: "/maps/gray-map.svg",
        color: "#FF4D4D" // Red
    },
    {
        name: "VIP Lounge",
        slug: "vip-lounge",
        image: "/maps/gray-map.svg",
        color: "#9333EA" // Purple
    },
    {
        name: "Food Court",
        slug: "food-court",
        image: "/maps/gray-map.svg",
        color: "#F59E0B" // Amber
    },
    {
        name: "Merchandise Tent",
        slug: "merchandise",
        image: "/maps/gray-map.svg",
        color: "#3B82F6" // Blue
    }
];
