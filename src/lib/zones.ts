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
        image: "/maps/event-floor-plan.jpg",
        color: "#FF4D4D" // Red
    },
    {
        name: "VIP Lounge",
        slug: "vip-lounge",
        image: "/maps/event-floor-plan.jpg",
        color: "#9333EA" // Purple
    },
    {
        name: "Food Court",
        slug: "food-court",
        image: "/maps/event-floor-plan.jpg",
        color: "#F59E0B" // Amber
    },
    {
        name: "Merchandise Tent",
        slug: "merchandise",
        image: "/maps/event-floor-plan.jpg",
        color: "#3B82F6" // Blue
    }
];
