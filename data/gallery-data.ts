export interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
  event: string
  location: string
  year: string
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/tech-conference-modern-stage.jpg",
    alt: "Corporate Conference in Mumbai",
    category: "Corporate Event",
    event: "Tech Summit 2024",
    location: "Mumbai",
    year: "2024",
  },
  {
    id: 2,
    src: "/tech-conference-modern-stage.jpg",
    alt: "Luxury Wedding in Kolkata",
    category: "Wedding",
    event: "Royal Wedding Ceremony",
    location: "Kolkata",
    year: "2024",
  },
  {
    id: 3,
    src: "/tech-conference-modern-stage.jpg",
    alt: "Brand Launch Event in Bengaluru",
    category: "Brand Launch",
    event: "Product Launch Gala",
    location: "Bengaluru",
    year: "2024",
  },
  {
    id: 4,
    src: "/tech-conference-modern-stage.jpg",
    alt: "Exhibition Booth in Delhi",
    category: "Exhibition",
    event: "Trade Show Participation",
    location: "New Delhi",
    year: "2023",
  },
  {
    id: 5,
    src: "/tech-conference-modern-stage.jpg",
    alt: "Wedding Reception in Chennai",
    category: "Wedding",
    event: "Grand Reception",
    location: "Chennai",
    year: "2023",
  },
  {
    id: 6,
    src: "/tech-conference-modern-stage.jpg",
    alt: "Corporate Retreat in Goa",
    category: "Corporate Event",
    event: "Annual Team Retreat",
    location: "Goa",
    year: "2023",
  },
  {
    id: 7,
    src: "/tech-conference-modern-stage.jpg",
    alt: "Product Activation in Hyderabad",
    category: "Product Activation",
    event: "Consumer Engagement Campaign",
    location: "Hyderabad",
    year: "2023",
  },
  {
    id: 8,
    src: "/tech-conference-modern-stage.jpg",
    alt: "Award Ceremony in Pune",
    category: "Corporate Event",
    event: "Excellence Awards Night",
    location: "Pune",
    year: "2023",
  },
  {
    id: 9,
    src: "/tech-conference-modern-stage.jpg",
    alt: "Cultural Festival in Jaipur",
    category: "Social Gathering",
    event: "Heritage Festival",
    location: "Jaipur",
    year: "2022",
  },
]

export const galleryCategories = [
  "All",
  "Corporate Event",
  "Wedding",
  "Brand Launch",
  "Exhibition",
  "Product Activation",
  "Social Gathering",
]