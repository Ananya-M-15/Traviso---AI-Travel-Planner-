// itinerary.js - Traviso Stage 2: Personalized Recommendations & Energy-Aware Scheduling

// ==========================================
// 1. EXTENDED CURATED ACTIVITY DATASETS (STAGE 2)
// ==========================================
const CURATED_DESTINATIONS = {
    jaipur: {
        name: "Jaipur",
        activities: [
            {
                id: "jpr-amber-fort",
                period: "Morning",
                title: "Amber Fort & Maota Lake View",
                category: "Heritage & Sightseeing",
                estimatedDuration: 180,
                duration: "3 hours",
                intensity: 3,
                interests: ["Culture and History", "Photography", "Architecture"],
                travelStyles: ["Cultural", "Explorer"],
                companions: ["Solo", "Couple", "Friends", "Family"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: true,
                preferredTime: "Morning",
                isOptional: false,
                description: "Explore the expansive hilltop fort, famous for its grand courtyards, cobblestone paths, and Sheesh Mahal mirror mosaics."
            },
            {
                id: "jpr-thali-lunch",
                period: "Midday Break",
                title: "Traditional Rajasthani Thali Lunch",
                category: "Dining & Rest",
                estimatedDuration: 90,
                duration: "1.5 hours",
                intensity: 1,
                interests: ["Food and Dining", "Culture and History"],
                travelStyles: ["Relaxed", "Explorer", "Cultural"],
                companions: ["Solo", "Couple", "Friends", "Family"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: false,
                preferredTime: "Midday Break",
                isOptional: false,
                description: "Savor authentic Dal Baati Churma, Ker Sangri, and cooling mint chaas at a respected local heritage restaurant."
            },
            {
                id: "jpr-city-palace",
                period: "Afternoon",
                title: "City Palace & Jantar Mantar",
                category: "Architecture & Astronomy",
                estimatedDuration: 150,
                duration: "2.5 hours",
                intensity: 2,
                interests: ["Culture and History", "Photography", "Architecture"],
                travelStyles: ["Cultural", "Explorer"],
                companions: ["Solo", "Couple", "Friends", "Family"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: true,
                preferredTime: "Afternoon",
                isOptional: false,
                description: "Visit the royal palace museum and the adjacent UNESCO World Heritage 18th-century stone astronomical observatory."
            },
            {
                id: "jpr-hawa-mahal",
                period: "Evening",
                title: "Hawa Mahal & Johari Bazaar Walk",
                category: "Leisure & Crafts",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 2,
                interests: ["Shopping", "Photography", "Culture and History"],
                travelStyles: ["Relaxed", "Explorer", "Cultural"],
                companions: ["Solo", "Couple", "Friends"],
                costEstimate: "$ (Low)",
                isOutdoor: true,
                preferredTime: "Evening",
                isOptional: false,
                description: "Admire the 953 honeycomb windows of the Palace of Winds and browse authentic handmade block prints, blue pottery, and silver jewelry."
            },
            {
                id: "jpr-nahargarh",
                period: "Morning",
                title: "Nahargarh Fort Ridge Walk",
                category: "Scenic Panoramic Views",
                estimatedDuration: 150,
                duration: "2.5 hours",
                intensity: 3,
                interests: ["Adventure", "Nature and Outdoors", "Photography"],
                travelStyles: ["Adventure", "Explorer"],
                companions: ["Friends", "Couple", "Solo"],
                costEstimate: "$ (Low)",
                isOutdoor: true,
                preferredTime: "Morning",
                isOptional: false,
                description: "Take in sweeping panoramic morning views over the entire Pink City along the rugged Aravali mountain ramparts."
            },
            {
                id: "jpr-street-food",
                period: "Midday Break",
                title: "Local Street Food & Lassi Refreshment",
                category: "Food & Beverage",
                estimatedDuration: 60,
                duration: "1 hour",
                intensity: 1,
                interests: ["Food and Dining"],
                travelStyles: ["Relaxed", "Explorer"],
                companions: ["Solo", "Friends", "Couple"],
                costEstimate: "$ (Low)",
                isOutdoor: true,
                preferredTime: "Midday Break",
                isOptional: false,
                description: "Sample famous hot Pyaaz Kachoris and thick, creamy earthenware lassi served fresh on historic MI Road."
            },
            {
                id: "jpr-albert-hall",
                period: "Afternoon",
                title: "Albert Hall State Museum",
                category: "Art & Regional History",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 1,
                interests: ["Culture and History", "Photography"],
                travelStyles: ["Cultural", "Relaxed"],
                companions: ["Solo", "Couple", "Family"],
                costEstimate: "$ (Low)",
                isOutdoor: false,
                preferredTime: "Afternoon",
                isOptional: false,
                description: "Discover ancient metal crafts, Persian carpets, ivory carvings, and royal miniature paintings in an Indo-Saracenic palace."
            },
            {
                id: "jpr-jal-mahal",
                period: "Evening",
                title: "Jal Mahal Lake Promenade Stroll",
                category: "Relaxation & Photography",
                estimatedDuration: 90,
                duration: "1.5 hours",
                intensity: 1,
                interests: ["Nature and Outdoors", "Photography", "Relaxation"],
                travelStyles: ["Relaxed", "Cultural"],
                companions: ["Couple", "Family", "Solo"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Evening",
                isOptional: false,
                description: "Walk along the scenic Man Sagar lake promenade as the illuminated Water Palace reflects upon tranquil evening waters."
            },
            {
                id: "jpr-jaigarh",
                period: "Morning",
                title: "Jaigarh Fort & Jaivana Cannon",
                category: "Fortress Architecture",
                estimatedDuration: 150,
                duration: "2.5 hours",
                intensity: 2,
                interests: ["Culture and History", "Adventure"],
                travelStyles: ["Explorer", "Cultural", "Adventure"],
                companions: ["Friends", "Family", "Solo"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: true,
                preferredTime: "Morning",
                isOptional: false,
                description: "Inspect medieval water filtration complexes, defensive subterranean tunnels, and the world's largest historic wheeled cannon."
            },
            {
                id: "jpr-garden-cafe",
                period: "Midday Break",
                title: "Garden Cafe Shade Lunch",
                category: "Dining & Rest",
                estimatedDuration: 90,
                duration: "1.5 hours",
                intensity: 1,
                interests: ["Food and Dining", "Relaxation"],
                travelStyles: ["Relaxed", "Explorer"],
                companions: ["Couple", "Family", "Solo"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: true,
                preferredTime: "Midday Break",
                isOptional: false,
                description: "Recharge with freshly brewed tea, wood-fired bread, and seasonal salads in a tranquil courtyard cafe surrounded by bougainvillea."
            },
            {
                id: "jpr-patrika-gate",
                period: "Afternoon",
                title: "Patrika Gate & Jawahar Circle",
                category: "Photography & Culture",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 1,
                interests: ["Photography", "Culture and History"],
                travelStyles: ["Explorer", "Relaxed"],
                companions: ["Couple", "Family", "Friends"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Afternoon",
                isOptional: false,
                description: "Photograph the lavishly hand-painted cultural archways showcasing murals of Rajasthan's royal dynasties, monuments, and folklore."
            },
            {
                id: "jpr-chokhi-dhani",
                period: "Evening",
                title: "Chokhi Dhani Ethnic Cultural Evening",
                category: "Folk Performance & Dinner",
                estimatedDuration: 180,
                duration: "3 hours",
                intensity: 2,
                interests: ["Food and Dining", "Culture and History", "Nightlife"],
                travelStyles: ["Cultural", "Explorer"],
                companions: ["Family", "Couple", "Friends"],
                costEstimate: "$$$ (High)",
                isOutdoor: true,
                preferredTime: "Evening",
                isOptional: false,
                description: "Experience fire dancers, Kalbelia folk rhythms, traditional puppet theater, and a sit-down celebratory Rajasthani village feast."
            },
            {
                id: "jpr-galtaji",
                period: "Morning",
                title: "Galtaji Temple Valley Excursion",
                category: "Spiritual Experiences",
                estimatedDuration: 150,
                duration: "2.5 hours",
                intensity: 2,
                interests: ["Spiritual Experiences", "Nature and Outdoors", "Photography"],
                travelStyles: ["Cultural", "Adventure"],
                companions: ["Solo", "Friends", "Couple"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Morning",
                isOptional: false,
                description: "Walk through the sacred mountain pass featuring natural freshwater springs, carved stone pavilions, and historic shrines."
            },
            {
                id: "jpr-rooftop-lounge",
                period: "Evening",
                title: "Heritage Rooftop Dining & Stargazing",
                category: "Nightlife & Dining",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 1,
                interests: ["Nightlife", "Food and Dining"],
                travelStyles: ["Relaxed", "Explorer"],
                companions: ["Couple", "Friends"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: true,
                preferredTime: "Evening",
                isOptional: true,
                description: "Enjoy sunset mocktails and acoustic music on a historic rooftop terrace overlooking the illuminated old city walls."
            }
        ]
    },
    goa: {
        name: "Goa",
        activities: [
            {
                id: "goa-fort-aguada",
                period: "Morning",
                title: "Fort Aguada & Coastal Bastion Walk",
                category: "Coastal Heritage",
                estimatedDuration: 150,
                duration: "2.5 hours",
                intensity: 2,
                interests: ["Culture and History", "Photography", "Nature and Outdoors"],
                travelStyles: ["Explorer", "Cultural"],
                companions: ["Couple", "Family", "Solo"],
                costEstimate: "$ (Low)",
                isOutdoor: true,
                preferredTime: "Morning",
                isOptional: false,
                description: "Walk along the 17th-century Portuguese coastal fortress and historic lighthouse overlooking the open Arabian Sea."
            },
            {
                id: "goa-shack-lunch",
                period: "Midday Break",
                title: "Beachside Coastal Shacks Lunch",
                category: "Dining & Rest",
                estimatedDuration: 90,
                duration: "1.5 hours",
                intensity: 1,
                interests: ["Food and Dining", "Relaxation"],
                travelStyles: ["Relaxed", "Explorer"],
                companions: ["Solo", "Couple", "Friends", "Family"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: true,
                preferredTime: "Midday Break",
                isOptional: false,
                description: "Relax under palm-thatched canopies with authentic coconut fish curry, poi bread, and cold pressed tropical fruit juices."
            },
            {
                id: "goa-beach-stroll",
                period: "Afternoon",
                title: "Calangute & Candolim Beach Leisure",
                category: "Beach & Nature",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 1,
                interests: ["Nature and Outdoors", "Relaxation"],
                travelStyles: ["Relaxed"],
                companions: ["Family", "Couple", "Friends"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Afternoon",
                isOptional: false,
                description: "Enjoy gentle sea breezes, shoreline walking, and relaxing sun loungers along North Goa's golden sand coastline."
            },
            {
                id: "goa-anjuna-sunset",
                period: "Evening",
                title: "Anjuna Cliff Sunset Gathering",
                category: "Scenic Sunset & Music",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 1,
                interests: ["Nightlife", "Photography", "Nature and Outdoors"],
                travelStyles: ["Relaxed", "Adventure"],
                companions: ["Friends", "Couple"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: true,
                preferredTime: "Evening",
                isOptional: false,
                description: "Watch the golden sun dip into the horizon from red volcanic cliffs while listening to ambient evening music."
            },
            {
                id: "goa-old-goa",
                period: "Morning",
                title: "Basilica of Bom Jesus & Old Goa",
                category: "UNESCO Heritage",
                estimatedDuration: 150,
                duration: "2.5 hours",
                intensity: 2,
                interests: ["Culture and History", "Spiritual Experiences", "Architecture"],
                travelStyles: ["Cultural", "Explorer"],
                companions: ["Family", "Solo", "Couple"],
                costEstimate: "Free",
                isOutdoor: false,
                preferredTime: "Morning",
                isOptional: false,
                description: "Tour the baroque Jesuit basilica housing sacred relics, ornate gilded altars, and 16th-century Portuguese architecture."
            },
            {
                id: "goa-panaji-thali",
                period: "Midday Break",
                title: "Panaji Heritage Restaurant Lunch",
                category: "Regional Cuisine",
                estimatedDuration: 90,
                duration: "1.5 hours",
                intensity: 1,
                interests: ["Food and Dining"],
                travelStyles: ["Relaxed", "Cultural"],
                companions: ["Family", "Couple", "Solo"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: false,
                preferredTime: "Midday Break",
                isOptional: false,
                description: "Enjoy a traditional Goan Saraswat thali with Kokum sol kadhi, vegetable xacuti, and local seasonal accompaniments."
            },
            {
                id: "goa-fontainhas",
                period: "Afternoon",
                title: "Fontainhas Latin Quarter Walking Tour",
                category: "Culture & Architecture",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 2,
                interests: ["Culture and History", "Photography"],
                travelStyles: ["Cultural", "Explorer", "Relaxed"],
                companions: ["Solo", "Couple", "Friends"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Afternoon",
                isOptional: false,
                description: "Stroll vibrant narrow streets lined with yellow and indigo Portuguese colonial cottages, tiled balconies, and art bakeries."
            },
            {
                id: "goa-mandovi-cruise",
                period: "Evening",
                title: "Mandovi River Sunset Cruise",
                category: "Leisure & Scenery",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 1,
                interests: ["Relaxation", "Photography"],
                travelStyles: ["Relaxed", "Cultural"],
                companions: ["Family", "Couple", "Friends"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: true,
                preferredTime: "Evening",
                isOptional: false,
                description: "Glide along the calm Mandovi estuary watching mangroves and river lights accompanied by Goan folk dancers."
            },
            {
                id: "goa-dudhsagar",
                period: "Morning",
                title: "Dudhsagar Waterfalls Scenic Excursion",
                category: "Adventure & Wilderness",
                estimatedDuration: 240,
                duration: "4 hours",
                intensity: 3,
                interests: ["Adventure", "Nature and Outdoors", "Photography"],
                travelStyles: ["Adventure", "Explorer"],
                companions: ["Friends", "Solo"],
                costEstimate: "$$$ (High)",
                isOutdoor: true,
                preferredTime: "Morning",
                isOptional: false,
                description: "Ride an open 4x4 safari through the Bhagwan Mahavir Wildlife Sanctuary jungle trails to reach the four-tiered white falls."
            },
            {
                id: "goa-spice-farm",
                period: "Midday Break",
                title: "Spice Plantation Organic Buffet",
                category: "Culinary & Farm",
                estimatedDuration: 90,
                duration: "1.5 hours",
                intensity: 1,
                interests: ["Food and Dining", "Nature and Outdoors"],
                travelStyles: ["Cultural", "Relaxed"],
                companions: ["Family", "Couple", "Solo"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: true,
                preferredTime: "Midday Break",
                isOptional: false,
                description: "Dine on authentic plantation recipes served on fresh plantain leaves in a quiet grove of betel nut trees and vanilla vines."
            },
            {
                id: "goa-spice-tour",
                period: "Afternoon",
                title: "Guided Spice Botanical Walk",
                category: "Nature & Learning",
                estimatedDuration: 90,
                duration: "1.5 hours",
                intensity: 1,
                interests: ["Nature and Outdoors", "Culture and History"],
                travelStyles: ["Cultural", "Explorer"],
                companions: ["Family", "Couple", "Solo"],
                costEstimate: "$ (Low)",
                isOutdoor: true,
                preferredTime: "Afternoon",
                isOptional: false,
                description: "Learn how black pepper, cardamom, cinnamon bark, and nutmeg are organically cultivated and harvested by hand."
            },
            {
                id: "goa-chapora-sunset",
                period: "Evening",
                title: "Chapora Fort & Vagator Sunset",
                category: "Scenic Panorama",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 2,
                interests: ["Photography", "Nature and Outdoors"],
                travelStyles: ["Explorer", "Adventure"],
                companions: ["Friends", "Couple", "Solo"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Evening",
                isOptional: false,
                description: "Climb up to the historic clifftop ramparts of Chapora Fort for sweeping 360-degree sunset views over river and sea."
            },
            {
                id: "goa-palolem-kayak",
                period: "Morning",
                title: "South Goa Sea Kayaking & Dolphin Spotting",
                category: "Water Adventure",
                estimatedDuration: 150,
                duration: "2.5 hours",
                intensity: 3,
                interests: ["Adventure", "Nature and Outdoors"],
                travelStyles: ["Adventure"],
                companions: ["Friends", "Couple", "Solo"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: true,
                preferredTime: "Morning",
                isOptional: false,
                description: "Paddle across calm crescent bay waters off Palolem Beach, exploring secluded coves and spotting ocean dolphins."
            },
            {
                id: "goa-night-market",
                period: "Evening",
                title: "Arpora Night Market & Live Music",
                category: "Nightlife & Shopping",
                estimatedDuration: 150,
                duration: "2.5 hours",
                intensity: 2,
                interests: ["Nightlife", "Shopping", "Food and Dining"],
                travelStyles: ["Explorer", "Adventure"],
                companions: ["Friends", "Couple"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: true,
                preferredTime: "Evening",
                isOptional: true,
                description: "Explore open-air artisan stalls, international food counters, and vibrant acoustic stages under illuminated night skies."
            }
        ]
    },
    delhi: {
        name: "Delhi",
        activities: [
            {
                id: "del-red-fort",
                period: "Morning",
                title: "Red Fort & Mughal Sandstone Ramparts",
                category: "Historic Monuments",
                estimatedDuration: 150,
                duration: "2.5 hours",
                intensity: 2,
                interests: ["Culture and History", "Architecture", "Photography"],
                travelStyles: ["Cultural", "Explorer"],
                companions: ["Family", "Couple", "Solo"],
                costEstimate: "$ (Low)",
                isOutdoor: true,
                preferredTime: "Morning",
                isOptional: false,
                description: "Walk through the Lahore Gate into Emperor Shah Jahan's 17th-century palace, admiring the Diwan-i-Aam and royal pavilions."
            },
            {
                id: "del-chandni-chowk",
                period: "Midday Break",
                title: "Old Delhi Heritage Culinary Walk",
                category: "Food Culture & Dining",
                estimatedDuration: 90,
                duration: "1.5 hours",
                intensity: 2,
                interests: ["Food and Dining", "Culture and History"],
                travelStyles: ["Explorer", "Cultural"],
                companions: ["Friends", "Solo", "Couple"],
                costEstimate: "$ (Low)",
                isOutdoor: true,
                preferredTime: "Midday Break",
                isOptional: false,
                description: "Taste freshly fried stuffed paranthas in Paranthe Wali Gali, crispy jalebis, and creamy saffron rabri."
            },
            {
                id: "del-jama-masjid",
                period: "Afternoon",
                title: "Jama Masjid & Shahjahanabad Rickshaw Ride",
                category: "Culture & Heritage",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 2,
                interests: ["Culture and History", "Photography", "Spiritual Experiences"],
                travelStyles: ["Cultural", "Explorer"],
                companions: ["Solo", "Couple", "Friends"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Afternoon",
                isOptional: false,
                description: "Stand in the massive sandstone courtyard of India's grand congregational mosque and ride an electric rickshaw through spice bazaars."
            },
            {
                id: "del-india-gate",
                period: "Evening",
                title: "India Gate & Kartavya Path Stroll",
                category: "Civic Landmark & Evening Walk",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 1,
                interests: ["Culture and History", "Photography"],
                travelStyles: ["Relaxed", "Cultural"],
                companions: ["Family", "Couple", "Friends"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Evening",
                isOptional: false,
                description: "Stroll along the landscaped ceremonial avenue as twilight illuminates the 42-meter triumphal war memorial arch."
            },
            {
                id: "del-qutub-minar",
                period: "Morning",
                title: "Qutub Minar & Mehrauli Archaeological Park",
                category: "UNESCO Heritage",
                estimatedDuration: 150,
                duration: "2.5 hours",
                intensity: 2,
                interests: ["Culture and History", "Architecture", "Photography"],
                travelStyles: ["Cultural", "Explorer"],
                companions: ["Family", "Couple", "Solo"],
                costEstimate: "$ (Low)",
                isOutdoor: true,
                preferredTime: "Morning",
                isOptional: false,
                description: "Marvel at the 73-meter fluted sandstone minaret built in 1192 and the rust-resistant 4th-century Gupta iron pillar."
            },
            {
                id: "del-hauz-khas-lunch",
                period: "Midday Break",
                title: "Hauz Khas Village Lakeside Cafe",
                category: "Dining & Rest",
                estimatedDuration: 90,
                duration: "1.5 hours",
                intensity: 1,
                interests: ["Food and Dining", "Relaxation"],
                travelStyles: ["Relaxed", "Explorer"],
                companions: ["Friends", "Couple", "Solo"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: false,
                preferredTime: "Midday Break",
                isOptional: false,
                description: "Unwind with gourmet lunch overlooking the 14th-century royal water reservoir and medieval madrasa stone pavilions."
            },
            {
                id: "del-humayun-tomb",
                period: "Afternoon",
                title: "Humayun's Tomb & Sunder Nursery",
                category: "Mughal Architecture & Nature",
                estimatedDuration: 150,
                duration: "2.5 hours",
                intensity: 2,
                interests: ["Culture and History", "Nature and Outdoors", "Photography"],
                travelStyles: ["Cultural", "Relaxed"],
                companions: ["Couple", "Family", "Solo"],
                costEstimate: "$ (Low)",
                isOutdoor: true,
                preferredTime: "Afternoon",
                isOptional: false,
                description: "Explore the Persian-style charbagh garden tomb that inspired the Taj Mahal and walk the lush restored heritage nursery."
            },
            {
                id: "del-dilli-haat",
                period: "Evening",
                title: "Dilli Haat Craft Bazaar & Regional Dinner",
                category: "Handicrafts & Dining",
                estimatedDuration: 150,
                duration: "2.5 hours",
                intensity: 2,
                interests: ["Shopping", "Food and Dining", "Culture and History"],
                travelStyles: ["Explorer", "Cultural"],
                companions: ["Friends", "Family", "Couple"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: true,
                preferredTime: "Evening",
                isOptional: false,
                description: "Browse rural artisan stalls from every Indian state and taste authentic momos, Kashmiri wazwan, or Rajasthani sweets."
            },
            {
                id: "del-lodhi-gardens",
                period: "Morning",
                title: "Lodhi Gardens & Art District Walk",
                category: "Heritage & Street Art",
                estimatedDuration: 150,
                duration: "2.5 hours",
                intensity: 2,
                interests: ["Nature and Outdoors", "Photography", "Culture and History"],
                travelStyles: ["Relaxed", "Cultural"],
                companions: ["Couple", "Solo", "Friends"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Morning",
                isOptional: false,
                description: "Walk amongst 15th-century Sayyid & Lodhi mausoleums surrounded by ancient trees and open-air public art murals."
            },
            {
                id: "del-khan-market-lunch",
                period: "Midday Break",
                title: "Khan Market Bistro & Bookstore Cafe",
                category: "Dining & Rest",
                estimatedDuration: 90,
                duration: "1.5 hours",
                intensity: 1,
                interests: ["Food and Dining", "Shopping"],
                travelStyles: ["Relaxed"],
                companions: ["Solo", "Couple"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: false,
                preferredTime: "Midday Break",
                isOptional: false,
                description: "Enjoy artisanal sandwiches, fresh pasta, and espresso at a cozy heritage boutique cafe."
            },
            {
                id: "del-national-museum",
                period: "Afternoon",
                title: "National Museum Antiquities Tour",
                category: "Art & Antiquities",
                estimatedDuration: 150,
                duration: "2.5 hours",
                intensity: 1,
                interests: ["Culture and History"],
                travelStyles: ["Cultural"],
                companions: ["Solo", "Family"],
                costEstimate: "$ (Low)",
                isOutdoor: false,
                preferredTime: "Afternoon",
                isOptional: false,
                description: "View the 5,000-year-old Bronze Dancing Girl of Harappa, Silk Road Buddhist sculptures, and miniature painting folios."
            },
            {
                id: "del-connaught-place",
                period: "Evening",
                title: "Connaught Place Heritage Circle Promenade",
                category: "Architecture & Nightlife",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 2,
                interests: ["Shopping", "Nightlife", "Food and Dining"],
                travelStyles: ["Explorer"],
                companions: ["Friends", "Couple"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: true,
                preferredTime: "Evening",
                isOptional: false,
                description: "Walk beneath grand Georgian colonnades, explore underground markets, and unwind at historic cafes."
            },
            {
                id: "del-lotus-temple",
                period: "Morning",
                title: "Lotus Temple Silent Meditation",
                category: "Spiritual Experiences",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 1,
                interests: ["Spiritual Experiences", "Architecture", "Photography"],
                travelStyles: ["Relaxed", "Cultural"],
                companions: ["Solo", "Family", "Couple"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Morning",
                isOptional: false,
                description: "Experience quiet reflection inside the marble lotus-petal Bahá'í temple surrounded by nine serene reflecting pools."
            },
            {
                id: "del-agrasen-baoli",
                period: "Afternoon",
                title: "Agrasen ki Baoli Stepwell Discovery",
                category: "Heritage Discovery",
                estimatedDuration: 90,
                duration: "1.5 hours",
                intensity: 1,
                interests: ["Culture and History", "Photography"],
                travelStyles: ["Explorer", "Cultural"],
                companions: ["Solo", "Friends", "Couple"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Afternoon",
                isOptional: true,
                description: "Descend the 108 stone steps of this mysterious 14th-century stepwell hidden in the heart of modern New Delhi."
            }
        ]
    },
    paris: {
        name: "Paris",
        activities: [
            {
                id: "par-eiffel-tower",
                period: "Morning",
                title: "Eiffel Tower & Champ de Mars",
                category: "Iconic Landmark",
                estimatedDuration: 150,
                duration: "2.5 hours",
                intensity: 2,
                interests: ["Culture and History", "Photography"],
                travelStyles: ["Explorer", "Cultural"],
                companions: ["Couple", "Family", "Solo"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: true,
                preferredTime: "Morning",
                isOptional: false,
                description: "Admire the 330-meter iron masterpiece and take a leisurely walk across the manicured public lawns of Champ de Mars."
            },
            {
                id: "par-bistro-lunch",
                period: "Midday Break",
                title: "Traditional Parisian Bistro Lunch",
                category: "Dining & Culture",
                estimatedDuration: 90,
                duration: "1.5 hours",
                intensity: 1,
                interests: ["Food and Dining"],
                travelStyles: ["Relaxed", "Cultural"],
                companions: ["Couple", "Solo", "Friends"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: false,
                preferredTime: "Midday Break",
                isOptional: false,
                description: "Savor classic French culinary staples like quiche lorraine, croque-monsieur, and warm café au lait at a sidewalk terrace."
            },
            {
                id: "par-seine-cruise",
                period: "Afternoon",
                title: "Seine River Cruise to Île de la Cité",
                category: "River Sightseeing",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 1,
                interests: ["Photography", "Nature and Outdoors", "Culture and History"],
                travelStyles: ["Relaxed", "Cultural"],
                companions: ["Couple", "Family", "Solo"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: true,
                preferredTime: "Afternoon",
                isOptional: false,
                description: "Glide beneath historic stone bridges, observing the Louvre, Musée d'Orsay, and the Gothic towers of Notre-Dame Cathedral."
            },
            {
                id: "par-louvre-courtyard",
                period: "Evening",
                title: "Louvre Glass Pyramid & Tuileries Gardens",
                category: "Art & Architecture",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 1,
                interests: ["Culture and History", "Photography"],
                travelStyles: ["Cultural", "Relaxed"],
                companions: ["Couple", "Solo", "Friends"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Evening",
                isOptional: false,
                description: "Watch the illuminated glass pyramid glow at dusk and stroll the grand royal Tuileries park by tranquil fountains."
            },
            {
                id: "par-montmartre",
                period: "Morning",
                title: "Montmartre & Sacré-Cœur Basilica",
                category: "Bohemian Heritage",
                estimatedDuration: 180,
                duration: "3 hours",
                intensity: 3,
                interests: ["Culture and History", "Photography", "Adventure"],
                travelStyles: ["Cultural", "Explorer"],
                companions: ["Couple", "Solo", "Friends"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Morning",
                isOptional: false,
                description: "Climb cobblestone village hills to the highest point in Paris, watching painters in Place du Tertre and panoramic city views."
            },
            {
                id: "par-boulangerie",
                period: "Midday Break",
                title: "French Bakery Pastries & Warm Crêpes",
                category: "Food & Beverage",
                estimatedDuration: 60,
                duration: "1 hour",
                intensity: 1,
                interests: ["Food and Dining"],
                travelStyles: ["Relaxed", "Explorer"],
                companions: ["Family", "Couple", "Solo"],
                costEstimate: "$ (Low)",
                isOutdoor: true,
                preferredTime: "Midday Break",
                isOptional: false,
                description: "Enjoy sweet butter crêpes, pain au chocolat, and flaky almond croissants fresh from an artisanal corner boulangerie."
            },
            {
                id: "par-orsay-museum",
                period: "Afternoon",
                title: "Musée d'Orsay Impressionist Gallery",
                category: "Fine Arts",
                estimatedDuration: 150,
                duration: "2.5 hours",
                intensity: 1,
                interests: ["Culture and History"],
                travelStyles: ["Cultural", "Relaxed"],
                companions: ["Solo", "Couple", "Family"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: false,
                preferredTime: "Afternoon",
                isOptional: false,
                description: "Stand before world-renowned Impressionist masterworks by Monet, Van Gogh, Renoir, and Degas inside a grand Beaux-Arts railway terminal."
            },
            {
                id: "par-le-marais",
                period: "Evening",
                title: "Le Marais Historic District & Place des Vosges",
                category: "Architecture & Dining",
                estimatedDuration: 150,
                duration: "2.5 hours",
                intensity: 2,
                interests: ["Shopping", "Food and Dining", "Nightlife"],
                travelStyles: ["Explorer", "Relaxed"],
                companions: ["Friends", "Couple", "Solo"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: true,
                preferredTime: "Evening",
                isOptional: false,
                description: "Walk through 17th-century aristocratic courtyards, browse designer boutiques, and dine at a lively French brasserie."
            },
            {
                id: "par-sainte-chapelle",
                period: "Morning",
                title: "Sainte-Chapelle Stained Glass Marvel",
                category: "Gothic Architecture",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 1,
                interests: ["Culture and History", "Photography", "Spiritual Experiences"],
                travelStyles: ["Cultural"],
                companions: ["Couple", "Solo", "Family"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: false,
                preferredTime: "Morning",
                isOptional: false,
                description: "Be immersed in jewel-toned morning light filtering through 15 towering 13th-century stained glass windows."
            },
            {
                id: "par-latin-lunch",
                period: "Midday Break",
                title: "Latin Quarter Sidewalk Lunch",
                category: "Dining & Rest",
                estimatedDuration: 90,
                duration: "1.5 hours",
                intensity: 1,
                interests: ["Food and Dining", "Relaxation"],
                travelStyles: ["Relaxed"],
                companions: ["Couple", "Solo", "Friends"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: true,
                preferredTime: "Midday Break",
                isOptional: false,
                description: "Sit alongside historic student squares, fountain plazas, and famous bookshops with fresh baguette sandwiches and salad."
            },
            {
                id: "par-luxembourg-gardens",
                period: "Afternoon",
                title: "Jardin du Luxembourg & Medici Fountain",
                category: "Gardens & Leisure",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 1,
                interests: ["Nature and Outdoors", "Relaxation", "Photography"],
                travelStyles: ["Relaxed"],
                companions: ["Family", "Couple", "Solo"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Afternoon",
                isOptional: false,
                description: "Pull up a green metal chair by the octagonal pond, watching model vintage sailboats and shaded chestnut groves."
            },
            {
                id: "par-champs-elysees",
                period: "Evening",
                title: "Arc de Triomphe & Champs-Élysées Stroll",
                category: "Grand Boulevards",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 2,
                interests: ["Shopping", "Culture and History"],
                travelStyles: ["Explorer"],
                companions: ["Friends", "Couple"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Evening",
                isOptional: false,
                description: "Walk down the glittering illuminated avenue, viewing the Tomb of the Unknown Soldier and panoramic urban axes."
            },
            {
                id: "par-canal-martin",
                period: "Afternoon",
                title: "Canal Saint-Martin Bohemian Walk",
                category: "Local Discovery",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 1,
                interests: ["Nature and Outdoors", "Photography"],
                travelStyles: ["Relaxed", "Explorer"],
                companions: ["Solo", "Friends", "Couple"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Afternoon",
                isOptional: true,
                description: "Stroll romantic iron footbridges and shaded waterside locks where Parisian locals gather for leisurely afternoon picnics."
            },
            {
                id: "par-opera-garnier",
                period: "Morning",
                title: "Palais Garnier Opera House Tour",
                category: "Architectural Splendor",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 1,
                interests: ["Culture and History", "Architecture"],
                travelStyles: ["Cultural"],
                companions: ["Couple", "Solo"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: false,
                preferredTime: "Morning",
                isOptional: false,
                description: "Gaze up at Chagall's painted ceiling, the grand marble double staircase, and gilded chandeliers of this legendary opera palace."
            }
        ]
    },
    manali: {
        name: "Manali",
        activities: [
            {
                id: "man-hadimba",
                period: "Morning",
                title: "Hadimba Devi Temple & Ancient Cedar Forest",
                category: "Culture & Nature",
                estimatedDuration: 150,
                duration: "2.5 hours",
                intensity: 2,
                interests: ["Culture and History", "Nature and Outdoors", "Spiritual Experiences"],
                travelStyles: ["Cultural", "Relaxed"],
                companions: ["Family", "Couple", "Solo"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Morning",
                isOptional: false,
                description: "Visit the 16th-century four-tiered wooden pagoda temple sheltered among majestic centuries-old Himalayan deodar pine groves."
            },
            {
                id: "man-riverside-cafe",
                period: "Midday Break",
                title: "Old Manali Riverside Cafe Lunch",
                category: "Dining & Rest",
                estimatedDuration: 90,
                duration: "1.5 hours",
                intensity: 1,
                interests: ["Food and Dining", "Relaxation"],
                travelStyles: ["Relaxed", "Explorer"],
                companions: ["Couple", "Friends", "Solo"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: true,
                preferredTime: "Midday Break",
                isOptional: false,
                description: "Unwind beside the gushing Manalsu mountain stream with wood-fired pizza, herbal mint tea, and fresh trout specialties."
            },
            {
                id: "man-manu-temple",
                period: "Afternoon",
                title: "Old Manali Alpine Village & Manu Temple",
                category: "Alpine Village Culture",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 2,
                interests: ["Culture and History", "Spiritual Experiences", "Photography"],
                travelStyles: ["Cultural", "Explorer"],
                companions: ["Solo", "Couple", "Friends"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Afternoon",
                isOptional: false,
                description: "Wander through traditional stone-and-timber Himachali houses along winding orchard pathways leading to the Sage Manu shrine."
            },
            {
                id: "man-mall-road",
                period: "Evening",
                title: "Mall Road Stroll & Tibetan Market",
                category: "Leisure & Shopping",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 1,
                interests: ["Shopping", "Food and Dining"],
                travelStyles: ["Relaxed", "Explorer"],
                companions: ["Family", "Friends", "Couple"],
                costEstimate: "$ (Low)",
                isOutdoor: true,
                preferredTime: "Evening",
                isOptional: false,
                description: "Browse handwoven Kullu shawls, mountain honey, and Tibetan handicrafts while tasting hot steamed momos."
            },
            {
                id: "man-solang-valley",
                period: "Morning",
                title: "Solang Valley Mountain Adventure",
                category: "Himalayan Panorama & Sports",
                estimatedDuration: 210,
                duration: "3.5 hours",
                intensity: 3,
                interests: ["Adventure", "Nature and Outdoors", "Photography"],
                travelStyles: ["Adventure", "Explorer"],
                companions: ["Friends", "Solo", "Couple"],
                costEstimate: "$$$ (High)",
                isOutdoor: true,
                preferredTime: "Morning",
                isOptional: false,
                description: "Experience sweeping snow-dusted valley views, open alpine meadows, ropeway cable car ascents, and mountain paragliding."
            },
            {
                id: "man-valley-tea",
                period: "Midday Break",
                title: "Valley View Tea & Warm Refreshments",
                category: "Mountain Refreshment",
                estimatedDuration: 60,
                duration: "1 hour",
                intensity: 1,
                interests: ["Food and Dining", "Nature and Outdoors"],
                travelStyles: ["Relaxed", "Adventure"],
                companions: ["Family", "Friends", "Couple"],
                costEstimate: "$ (Low)",
                isOutdoor: true,
                preferredTime: "Midday Break",
                isOptional: false,
                description: "Sip steaming ginger cardamom chai and hot mountain snacks while gazing across the majestic Pir Panjal peaks."
            },
            {
                id: "man-vashisht-springs",
                period: "Afternoon",
                title: "Vashisht Village & Natural Sulphur Springs",
                category: "Village Heritage & Wellness",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 2,
                interests: ["Spiritual Experiences", "Nature and Outdoors", "Culture and History"],
                travelStyles: ["Cultural", "Relaxed"],
                companions: ["Solo", "Couple", "Friends"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Afternoon",
                isOptional: false,
                description: "Visit ancient wood-carved temples dedicated to sage Vashisht and dip into therapeutic natural thermal mineral baths."
            },
            {
                id: "man-jogini-waterfall",
                period: "Evening",
                title: "Jogini Waterfall Pine Forest Hike",
                category: "Scenic Nature Trail",
                estimatedDuration: 150,
                duration: "2.5 hours",
                intensity: 3,
                interests: ["Nature and Outdoors", "Adventure", "Photography"],
                travelStyles: ["Adventure", "Explorer"],
                companions: ["Friends", "Couple", "Solo"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Evening",
                isOptional: false,
                description: "Take an invigorating forested walking trail through apple orchards and pine groves up to roaring multi-tier cascading waterfalls."
            },
            {
                id: "man-naggar-castle",
                period: "Morning",
                title: "Naggar Castle & Roerich Heritage Gallery",
                category: "Himachali Heritage",
                estimatedDuration: 180,
                duration: "3 hours",
                intensity: 2,
                interests: ["Culture and History", "Architecture", "Photography"],
                travelStyles: ["Cultural", "Explorer"],
                companions: ["Family", "Couple", "Solo"],
                costEstimate: "$ (Low)",
                isOutdoor: true,
                preferredTime: "Morning",
                isOptional: false,
                description: "Tour the 500-year-old earthquake-resistant timber castle and Nicholas Roerich's evocative Himalayan oil paintings estate."
            },
            {
                id: "man-naggar-lunch",
                period: "Midday Break",
                title: "Traditional Himachali Lunch in Naggar",
                category: "Regional Dining",
                estimatedDuration: 90,
                duration: "1.5 hours",
                intensity: 1,
                interests: ["Food and Dining", "Culture and History"],
                travelStyles: ["Cultural", "Relaxed"],
                companions: ["Family", "Couple", "Solo"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: false,
                preferredTime: "Midday Break",
                isOptional: false,
                description: "Taste traditional Himachali steamed Siddu with desi ghee, spiced mountain lentils, and wild apricot chutney."
            },
            {
                id: "man-van-vihar",
                period: "Afternoon",
                title: "Beas River Bank Walk & Van Vihar",
                category: "Nature & Tranquility",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 1,
                interests: ["Nature and Outdoors", "Relaxation"],
                travelStyles: ["Relaxed"],
                companions: ["Family", "Couple", "Solo"],
                costEstimate: "$ (Low)",
                isOutdoor: true,
                preferredTime: "Afternoon",
                isOptional: false,
                description: "Walk tranquil shaded riverbank paths beside the tumbling Beas River under towering deodar forest canopies."
            },
            {
                id: "man-sunset-point",
                period: "Evening",
                title: "Sunset Viewpoint over Manali Valley",
                category: "Scenic Sunset",
                estimatedDuration: 90,
                duration: "1.5 hours",
                intensity: 1,
                interests: ["Nature and Outdoors", "Photography"],
                travelStyles: ["Relaxed", "Adventure"],
                companions: ["Couple", "Friends", "Solo"],
                costEstimate: "Free",
                isOutdoor: true,
                preferredTime: "Evening",
                isOptional: false,
                description: "Watch the golden evening alpenglow fade over snow peaks as cool mountain twilight descends across the valley."
            },
            {
                id: "man-atal-tunnel",
                period: "Morning",
                title: "Atal Tunnel & Sissu Lahaul Valley Excursion",
                category: "Mountain Road Excursion",
                estimatedDuration: 240,
                duration: "4 hours",
                intensity: 2,
                interests: ["Adventure", "Nature and Outdoors", "Photography"],
                travelStyles: ["Adventure", "Explorer"],
                companions: ["Friends", "Family", "Couple"],
                costEstimate: "$$$ (High)",
                isOutdoor: true,
                preferredTime: "Morning",
                isOptional: false,
                description: "Drive through the 9.02 km engineering marvel under Rohtang Pass to witness the arid, snow-capped landscapes of Lahaul Valley."
            },
            {
                id: "man-campfire-dinner",
                period: "Evening",
                title: "Riverside Bonfire Dinner & Stargazing",
                category: "Nightlife & Dining",
                estimatedDuration: 120,
                duration: "2 hours",
                intensity: 1,
                interests: ["Nightlife", "Food and Dining", "Nature and Outdoors"],
                travelStyles: ["Relaxed", "Adventure"],
                companions: ["Friends", "Couple"],
                costEstimate: "$$ (Moderate)",
                isOutdoor: true,
                preferredTime: "Evening",
                isOptional: true,
                description: "Gather around a warm mountain campfire with grilled specialties and clear dark Himalayan skies ideal for stargazing."
            }
        ]
    }
};

// ==========================================
// 2. EXTENDED GENERIC FALLBACK GENERATOR
// ==========================================
function buildGenericActivityCatalog(destination) {
    const d = destination;
    return [
        {
            id: `gen-historic-walk-${d.toLowerCase().replace(/\s+/g, '-')}`,
            title: `Historic Center Orientation Walk`,
            category: "Heritage Discovery",
            estimatedDuration: 150,
            duration: "2.5 hours",
            intensity: 2,
            interests: ["Culture and History", "Photography", "Architecture"],
            travelStyles: ["Explorer", "Cultural"],
            companions: ["Solo", "Couple", "Friends", "Family"],
            costEstimate: "Free",
            isOutdoor: true,
            preferredTime: "Morning",
            isOptional: false,
            description: `Discover the central monuments, historic squares, and founding heritage that shape ${d}'s rich character.`
        },
        {
            id: `gen-market-lunch-${d.toLowerCase().replace(/\s+/g, '-')}`,
            title: `Traditional Market Specialties Lunch`,
            category: "Dining & Rest",
            estimatedDuration: 90,
            duration: "1.5 hours",
            intensity: 1,
            interests: ["Food and Dining"],
            travelStyles: ["Relaxed", "Explorer", "Cultural"],
            companions: ["Solo", "Couple", "Friends", "Family"],
            costEstimate: "$$ (Moderate)",
            isOutdoor: false,
            preferredTime: "Midday Break",
            isOptional: false,
            description: `Savor authentic regional dishes, artisanal bread, and refreshing drinks at a well-regarded local market eatery.`
        },
        {
            id: `gen-cultural-tour-${d.toLowerCase().replace(/\s+/g, '-')}`,
            title: `Premier Cultural Landmark Tour`,
            category: "Culture & Architecture",
            estimatedDuration: 150,
            duration: "2.5 hours",
            intensity: 2,
            interests: ["Culture and History", "Architecture"],
            travelStyles: ["Cultural", "Explorer"],
            companions: ["Solo", "Couple", "Family"],
            costEstimate: "$$ (Moderate)",
            isOutdoor: true,
            preferredTime: "Afternoon",
            isOptional: false,
            description: `Tour one of the foremost architectural and historical landmarks defining ${d}.`
        },
        {
            id: `gen-promenade-walk-${d.toLowerCase().replace(/\s+/g, '-')}`,
            title: `Civic Promenade & Golden Hour Stroll`,
            category: "Leisure & Sunset",
            estimatedDuration: 120,
            duration: "2 hours",
            intensity: 1,
            interests: ["Nature and Outdoors", "Photography", "Relaxation"],
            travelStyles: ["Relaxed", "Explorer"],
            companions: ["Couple", "Family", "Friends", "Solo"],
            costEstimate: "Free",
            isOutdoor: true,
            preferredTime: "Evening",
            isOptional: false,
            description: `Unwind with a twilight walk through pedestrian avenues and vibrant civic gathering squares.`
        },
        {
            id: `gen-museum-art-${d.toLowerCase().replace(/\s+/g, '-')}`,
            title: `City Museum & Fine Arts Collection`,
            category: "Art & Antiquities",
            estimatedDuration: 180,
            duration: "3 hours",
            intensity: 1,
            interests: ["Culture and History"],
            travelStyles: ["Cultural", "Relaxed"],
            companions: ["Solo", "Couple", "Family"],
            costEstimate: "$$ (Moderate)",
            isOutdoor: false,
            preferredTime: "Morning",
            isOptional: false,
            description: `Explore curated galleries preserving the creative history, sculpture, and precious artifacts of ${d}.`
        },
        {
            id: `gen-cafe-break-${d.toLowerCase().replace(/\s+/g, '-')}`,
            title: `Neighborhood Cafe & Pastry Break`,
            category: "Dining & Rest",
            estimatedDuration: 90,
            duration: "1.5 hours",
            intensity: 1,
            interests: ["Food and Dining", "Relaxation"],
            travelStyles: ["Relaxed"],
            companions: ["Couple", "Solo", "Friends"],
            costEstimate: "$ (Low)",
            isOutdoor: false,
            preferredTime: "Midday Break",
            isOptional: false,
            description: `Enjoy warm local baked goods, espresso, and regional beverages in a peaceful historic quarter.`
        },
        {
            id: `gen-botanical-garden-${d.toLowerCase().replace(/\s+/g, '-')}`,
            title: `Botanical Gardens & Scenic Public Grounds`,
            category: "Nature & Relaxation",
            estimatedDuration: 120,
            duration: "2 hours",
            intensity: 1,
            interests: ["Nature and Outdoors", "Photography", "Relaxation"],
            travelStyles: ["Relaxed", "Explorer"],
            companions: ["Family", "Couple", "Solo"],
            costEstimate: "Free",
            isOutdoor: true,
            preferredTime: "Afternoon",
            isOptional: false,
            description: `Take a tranquil stroll through landscaped public gardens, water features, and shaded tree paths.`
        },
        {
            id: `gen-dinner-nightlife-${d.toLowerCase().replace(/\s+/g, '-')}`,
            title: `Culinary District Dinner & Evening Ambiance`,
            category: "Dining & Nightlife",
            estimatedDuration: 150,
            duration: "2.5 hours",
            intensity: 2,
            interests: ["Food and Dining", "Nightlife"],
            travelStyles: ["Explorer", "Adventure"],
            companions: ["Friends", "Couple"],
            costEstimate: "$$ (Moderate)",
            isOutdoor: false,
            preferredTime: "Evening",
            isOptional: false,
            description: `Experience evening dining traditions and regional gastronomy at a popular community restaurant.`
        },
        {
            id: `gen-panoramic-view-${d.toLowerCase().replace(/\s+/g, '-')}`,
            title: `Panoramic City Viewpoint & Trail`,
            category: "Scenic Panorama",
            estimatedDuration: 150,
            duration: "2.5 hours",
            intensity: 3,
            interests: ["Adventure", "Nature and Outdoors", "Photography"],
            travelStyles: ["Adventure", "Explorer"],
            companions: ["Friends", "Couple", "Solo"],
            costEstimate: "Free",
            isOutdoor: true,
            preferredTime: "Morning",
            isOptional: false,
            description: `Hike up or ascend to a prime vantage point for sweeping 360-degree views across ${d}.`
        },
        {
            id: `gen-artisan-market-${d.toLowerCase().replace(/\s+/g, '-')}`,
            title: `Old Town Artisan Crafts & Souvenir Alleys`,
            category: "Shopping & Crafts",
            estimatedDuration: 120,
            duration: "2 hours",
            intensity: 2,
            interests: ["Shopping", "Culture and History"],
            travelStyles: ["Explorer", "Cultural"],
            companions: ["Friends", "Family", "Couple"],
            costEstimate: "$$ (Moderate)",
            isOutdoor: true,
            preferredTime: "Afternoon",
            isOptional: false,
            description: `Wander through historic lanes meeting independent makers and traditional craft workshops in ${d}.`
        },
        {
            id: `gen-sunset-waterfront-${d.toLowerCase().replace(/\s+/g, '-')}`,
            title: `Waterfront or River Sunset Walk`,
            category: "Scenic Sunset",
            estimatedDuration: 120,
            duration: "2 hours",
            intensity: 1,
            interests: ["Nature and Outdoors", "Photography", "Relaxation"],
            travelStyles: ["Relaxed", "Adventure"],
            companions: ["Couple", "Friends", "Solo"],
            costEstimate: "Free",
            isOutdoor: true,
            preferredTime: "Evening",
            isOptional: false,
            description: `Watch the sunset over water or historic rooftops as evening lights begin to illuminate the city.`
        },
        {
            id: `gen-spiritual-shrine-${d.toLowerCase().replace(/\s+/g, '-')}`,
            title: `Historic Temple or Sanctuary Visit`,
            category: "Spiritual Experiences",
            estimatedDuration: 120,
            duration: "2 hours",
            intensity: 1,
            interests: ["Spiritual Experiences", "Culture and History"],
            travelStyles: ["Cultural", "Relaxed"],
            companions: ["Solo", "Family", "Couple"],
            costEstimate: "Free",
            isOutdoor: true,
            preferredTime: "Morning",
            isOptional: false,
            description: `Explore quiet sacred architecture and experience traditional spiritual rituals in ${d}.`
        }
    ];
}

// ==========================================
// 3. PERSONALIZATION SCORING ENGINE (STAGE 2)
// ==========================================
function scoreActivity(activity, preferences, scheduledIds, currentDayCategories, targetPeriod) {
    let score = 20; // Base score
    const matchReasons = [];

    // 1. Target Time of Day Alignment
    if (activity.preferredTime === targetPeriod) {
        score += 35;
    } else if (targetPeriod === "Midday Break" && activity.category.includes("Dining")) {
        score += 40;
    } else if (targetPeriod !== "Midday Break" && activity.category.includes("Dining")) {
        score -= 20; // Keep main meals in break slot
    }

    // 2. Interest Matching
    if (Array.isArray(preferences.interests) && Array.isArray(activity.interests)) {
        let matchedCount = 0;
        preferences.interests.forEach((userInt) => {
            if (activity.interests.includes(userInt)) {
                score += 30;
                matchedCount++;
                matchReasons.push(`Matches your interest in ${userInt}`);
            }
        });
    }

    // 3. Travel Style Matching
    if (Array.isArray(activity.travelStyles) && activity.travelStyles.includes(preferences.travelStyle)) {
        score += 25;
        matchReasons.push(`Aligned with ${preferences.travelStyle} travel style`);
    }

    // 4. Companions Matching
    if (Array.isArray(activity.companions) && activity.companions.includes(preferences.companions)) {
        score += 18;
        matchReasons.push(`Well-suited for traveling as ${preferences.companions}`);
    }

    // 5. Pace & Physical Intensity Alignment
    const pace = preferences.dailyPace || "Balanced";
    if (pace === "Light") {
        if (activity.intensity === 1) {
            score += 25;
            matchReasons.push("Low physical demand suited for Light pace");
        } else if (activity.intensity === 2) {
            score += 5;
        } else if (activity.intensity === 3) {
            score -= 30; // Heavy penalty for high intensity on Light days
        }
    } else if (pace === "Balanced") {
        if (activity.intensity === 2) {
            score += 20;
            matchReasons.push("Balanced intensity suited for your schedule");
        } else if (activity.intensity === 1) {
            score += 15;
        } else if (activity.intensity === 3) {
            score += 10;
        }
    } else if (pace === "Packed") {
        if (activity.intensity >= 2) {
            score += 25;
            matchReasons.push("Active experience matching a Packed pace");
        } else {
            score += 10;
        }
    }

    // 6. Category Variety (avoid consecutive repeat categories today)
    if (currentDayCategories.has(activity.category)) {
        score -= 25;
    }

    // 7. Repetition Penalty across previously scheduled days
    if (scheduledIds.has(activity.id)) {
        score -= 100;
    }

    // Primary human-readable explanation
    let primaryExplanation = "Curated destination highlight matching your itinerary schedule.";
    if (matchReasons.length > 0) {
        // Pick the top 1 or 2 reasons
        primaryExplanation = matchReasons.slice(0, 2).join(" • ");
    }

    return {
        score: score,
        matchReasons: matchReasons,
        explanation: primaryExplanation
    };
}

// ==========================================
// 4. CENTRALIZED ENERGY PACE CONFIG & SCHEDULER (STAGE 4)
// ==========================================

const ENERGY_PACE_CONFIG = {
    Light: {
        maxPoints: 4,
        label: "Light Demand",
        badgeClass: "energy-badge-light",
        meterFillClass: "fill-light",
        description: "Relaxed tempo with generous rest & lower exertion (limit: 4 points)."
    },
    Balanced: {
        maxPoints: 6,
        label: "Moderate Demand",
        badgeClass: "energy-badge-moderate",
        meterFillClass: "fill-moderate",
        description: "Steady rhythm blending key attractions with restorative breaks (limit: 6 points)."
    },
    Packed: {
        maxPoints: 8,
        label: "High Demand",
        badgeClass: "energy-badge-packed",
        meterFillClass: "fill-packed",
        description: "High-energy exploration maximizing daily sightseeing (limit: 8 points)."
    }
};

function generateItineraryPlan(destination, durationDays, startDateStr, endDateStr, preferences) {
    const normalizedKey = destination.trim().toLowerCase();
    const isCurated = Object.prototype.hasOwnProperty.call(CURATED_DESTINATIONS, normalizedKey);
    const curatedData = isCurated ? CURATED_DESTINATIONS[normalizedKey] : null;
    const resolvedName = curatedData ? curatedData.name : destination.trim();

    // Pool of available candidate activities
    const rawCatalog = curatedData ? curatedData.activities : buildGenericActivityCatalog(resolvedName);

    // Default preferences fallback
    const userPrefs = {
        travelStyle: (preferences && preferences.travelStyle) || "Explorer",
        companions: (preferences && preferences.companions) || "Couple",
        dailyPace: (preferences && preferences.dailyPace) || "Balanced",
        interests: (preferences && Array.isArray(preferences.interests) && preferences.interests.length > 0) 
            ? preferences.interests 
            : ["Culture and History", "Food and Dining"]
    };

    // Centralized Energy Limit Enforcement
    const paceConfig = ENERGY_PACE_CONFIG[userPrefs.dailyPace] || ENERGY_PACE_CONFIG.Balanced;
    const dailyMaxEnergy = paceConfig.maxPoints;

    const startDate = new Date(startDateStr);
    const scheduledIds = new Set();
    const lastScheduledDayMap = new Map(); // Tracks last day an activity was scheduled for multi-day spacing
    const days = [];

    const slotNames = ["Morning", "Midday Break", "Afternoon", "Evening"];

    for (let dayIndex = 1; dayIndex <= durationDays; dayIndex++) {
        const currentDayDate = new Date(startDate.getTime() + (dayIndex - 1) * 24 * 60 * 60 * 1000);
        const dateFormatted = currentDayDate.toLocaleDateString(undefined, {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        const dayActivities = [];
        const currentDayCategories = new Set();
        let totalDayEnergy = 0;
        let totalMinutesScheduled = 0;
        let hadHighIntensityActivity = false;

        slotNames.forEach((slot) => {
            const remainingEnergy = dailyMaxEnergy - totalDayEnergy;

            // If no energy remains, skip additional slots to strictly enforce pace budget
            if (remainingEnergy <= 0) {
                return;
            }

            // Reserve at least 1 point for Midday Break when scheduling Morning on Light pace
            const maxSlotEnergy = (slot === "Morning" && dailyMaxEnergy <= 4)
                ? Math.max(1, remainingEnergy - 1)
                : remainingEnergy;

            if (maxSlotEnergy < 1) {
                return;
            }

            // Candidate filtering for this slot:
            // 1. Must NOT already be scheduled today (no duplicates on the same day)
            // 2. Must fit within maxSlotEnergy
            // 3. For Midday Break, prioritize low-energy dining / rest (intensity = 1)
            let eligibleCandidates = rawCatalog.filter((act) => {
                // Rule: Never schedule an activity twice on the same day
                if (dayActivities.some((a) => a.id === act.id)) {
                    return false;
                }

                if (slot === "Midday Break") {
                    // Meal break must be low-energy dining / refreshment
                    const isDining = act.preferredTime === "Midday Break" ||
                                     act.category.includes("Dining") ||
                                     act.category.includes("Food") ||
                                     act.category.includes("Rest") ||
                                     act.category.includes("Beverage") ||
                                     act.intensity === 1;
                    return isDining;
                } else {
                    const actIntensity = act.intensity || 1;
                    return actIntensity <= maxSlotEnergy;
                }
            });

            // If Midday Break has no dining activity in catalog, fallback to generic lunch break
            if (slot === "Midday Break" && eligibleCandidates.length === 0) {
                eligibleCandidates = [{
                    id: `gen-meal-${resolvedName.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${dayIndex}`,
                    period: "Midday Break",
                    title: `Local Culinary Lunch & Midday Rest in ${resolvedName}`,
                    category: "Dining & Rest",
                    estimatedDuration: 75,
                    duration: "1.25 hours",
                    intensity: 1,
                    interests: ["Food and Dining"],
                    travelStyles: ["Relaxed", "Explorer"],
                    companions: ["Solo", "Couple", "Friends", "Family"],
                    costEstimate: "$$ (Moderate)",
                    isOutdoor: false,
                    preferredTime: "Midday Break",
                    isOptional: false,
                    description: `Recharge and enjoy authentic regional cuisine at a reputable local dining spot.`
                }];
            }

            // If no non-meal candidates fit within remaining budget, skip this slot gracefully
            if (eligibleCandidates.length === 0) {
                return;
            }

            // Score eligible candidates
            const scoredCandidates = eligibleCandidates.map((act) => {
                const result = scoreActivity(act, userPrefs, scheduledIds, currentDayCategories, slot);
                let effectiveScore = result.score;

                // Fatigue heuristic: avoid back-to-back intensity 3 activities
                if (hadHighIntensityActivity && act.intensity === 3) {
                    effectiveScore -= 60;
                }

                // Light pace penalty: strongly disfavor intensity 3 on Light pace
                if (userPrefs.dailyPace === "Light" && act.intensity === 3) {
                    effectiveScore -= 80;
                }

                // Multi-day trip spacing: penalize activities scheduled recently
                if (lastScheduledDayMap.has(act.id)) {
                    const daysAgo = dayIndex - lastScheduledDayMap.get(act.id);
                    if (daysAgo < 3) {
                        effectiveScore -= (4 - daysAgo) * 40;
                    }
                }

                return {
                    activity: act,
                    score: effectiveScore,
                    explanation: result.explanation
                };
            });

            // Sort descending by score
            scoredCandidates.sort((a, b) => b.score - a.score);

            const selectedCandidate = scoredCandidates[0];
            if (!selectedCandidate) return;

            const chosenAct = selectedCandidate.activity;
            // Meal break is strictly counted as 1 energy point
            const effectiveIntensity = slot === "Midday Break" ? 1 : (chosenAct.intensity || 1);

            // Double-check energy limit before pushing
            if (totalDayEnergy + effectiveIntensity > dailyMaxEnergy) {
                // If it would exceed, skip this activity rather than silently exceeding
                return;
            }

            scheduledIds.add(chosenAct.id);
            lastScheduledDayMap.set(chosenAct.id, dayIndex);
            currentDayCategories.add(chosenAct.category);

            totalDayEnergy += effectiveIntensity;
            totalMinutesScheduled += (chosenAct.estimatedDuration || 90);

            if (effectiveIntensity === 3) {
                hadHighIntensityActivity = true;
            }

            dayActivities.push({
                id: chosenAct.id,
                period: slot,
                title: chosenAct.title,
                category: chosenAct.category,
                estimatedDuration: chosenAct.estimatedDuration,
                duration: chosenAct.duration,
                intensity: effectiveIntensity,
                interests: chosenAct.interests,
                costEstimate: chosenAct.costEstimate || "$$ (Moderate)",
                isOutdoor: chosenAct.isOutdoor,
                isOptional: false,
                explanation: selectedCandidate.explanation,
                description: chosenAct.description
            });
        });

        // Determine Day Energy Demand Level based on actual points used
        let energyLevel = paceConfig.label;
        let energyBadgeClass = paceConfig.badgeClass;
        let meterFillClass = paceConfig.meterFillClass;

        if (totalDayEnergy <= 4) {
            energyLevel = "Light Demand";
            energyBadgeClass = "energy-badge-light";
            meterFillClass = "fill-light";
        } else if (totalDayEnergy <= 6) {
            energyLevel = "Moderate Demand";
            energyBadgeClass = "energy-badge-moderate";
            meterFillClass = "fill-moderate";
        } else {
            energyLevel = "High Demand";
            energyBadgeClass = "energy-badge-packed";
            meterFillClass = "fill-packed";
        }

        const scheduledHours = (totalMinutesScheduled / 60).toFixed(1);
        const nonMealActivities = dayActivities.filter(a => a.period !== "Midday Break");

        days.push({
            dayNumber: dayIndex,
            dateString: dateFormatted,
            theme: `Day ${dayIndex}: ${getDayTheme(userPrefs.travelStyle, dayIndex)}`,
            energy: {
                level: energyLevel,
                badgeClass: energyBadgeClass,
                meterFillClass: meterFillClass,
                pointsUsed: totalDayEnergy,
                pointsLimit: dailyMaxEnergy,
                percentage: Math.min(100, Math.round((totalDayEnergy / dailyMaxEnergy) * 100)),
                scheduledHours: scheduledHours,
                activityCount: nonMealActivities.length,
                hasMealBreak: dayActivities.some(a => a.period === "Midday Break"),
                isExceeded: false,
                exceededNote: null
            },
            activities: dayActivities
        });
    }

    return {
        destination: resolvedName,
        startDate: startDateStr,
        endDate: endDateStr,
        durationDays: durationDays,
        preferences: userPrefs,
        days: days
    };
}

function getDayTheme(travelStyle, dayIndex) {
    const styleThemes = {
        Relaxed: ["Arrival & Gentle Scenic Wonders", "Lakeside Relaxation & Heritage Cafes", "Tranquil Promenades & Local Flavors", "Unwinding Among Scenic Gardens", "Slow Living & Peaceful Havens"],
        Explorer: ["Orientation & Core City Highlights", "Historic Quarters & Cultural Treasures", "Panoramic Views & Iconic Neighborhoods", "Hidden Corners & Vibrant Markets", "Farewell Exploration & Memorable Sights"],
        Adventure: ["Arrival & Trail Excursion", "High-Energy Panoramic Ascents", "Wilderness Discovery & Outdoor Sports", "Rugged Bastions & Valley Overlooks", "Epic Horizons & Scenic Finale"],
        Cultural: ["Royal Heritage & Architectural Splendor", "Sacred Shrines & World Heritage Sites", "Fine Arts, Crafts & Masterpieces", "Historic Colonnades & Living Traditions", "Enduring Antiquities & Cultural Legacy"]
    };
    const list = styleThemes[travelStyle] || styleThemes.Explorer;
    return list[(dayIndex - 1) % list.length];
}

// ==========================================
// 5. WEATHER SERVICE CLIENT
// ==========================================
async function fetchCurrentWeather(destination) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    try {
        const response = await fetch('http://localhost:5000/api/travel/itinerary', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ destination: destination }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            let errorMsg = `Server returned status ${response.status}`;
            try {
                const errorData = await response.json();
                if (errorData && errorData.msg) errorMsg = errorData.msg;
            } catch (_) {}
            return { success: false, error: errorMsg };
        }

        const data = await response.json();
        return { success: true, data: data };
    } catch (err) {
        clearTimeout(timeoutId);
        let errorMsg = 'Could not connect to the weather service.';
        if (err.name === 'AbortError') {
            errorMsg = 'Weather request timed out.';
        } else if (err.message && err.message.includes('Failed to fetch')) {
            errorMsg = 'Weather backend server is currently offline or unreachable on port 5000.';
        }
        return { success: false, error: errorMsg };
    }
}

// ==========================================
// 6. SAFE DOM RENDERING ENGINE (STAGE 2)
// ==========================================

function createTextEl(tag, text, className) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    el.textContent = text;
    return el;
}

// Render Trip Overview & Weather Card with Preferences Display and Action Controls (Stage 3)
function renderOverviewHeader(container, plan, weatherState, onOpenPreferences, onSaveTrip, isTripSaved) {
    container.innerHTML = '';

    const headerCard = document.createElement('div');
    headerCard.className = 'trip-overview-card card';

    // Top Row: Title & Badge
    const topRow = document.createElement('div');
    topRow.className = 'overview-top-row';

    const titleGroup = document.createElement('div');
    const subtitle = createTextEl('span', 'Personalized Travel Itinerary', 'overview-badge');
    const title = createTextEl('h1', plan.destination, 'overview-title');
    titleGroup.appendChild(subtitle);
    titleGroup.appendChild(title);

    const metaBadge = document.createElement('div');
    metaBadge.className = 'duration-pill';
    metaBadge.textContent = `${plan.durationDays} ${plan.durationDays === 1 ? 'Day' : 'Days'} Trip`;

    topRow.appendChild(titleGroup);
    topRow.appendChild(metaBadge);
    headerCard.appendChild(topRow);

    // Date Range Row
    const dateRow = document.createElement('div');
    dateRow.className = 'overview-date-row';
    const startFormatted = new Date(plan.startDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    const endFormatted = new Date(plan.endDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    dateRow.textContent = `🗓️ ${startFormatted} — ${endFormatted}`;
    headerCard.appendChild(dateRow);

    // Active Preferences Summary Row (Stage 2)
    const prefsRow = document.createElement('div');
    prefsRow.className = 'overview-prefs-row';

    const p = plan.preferences;
    const styleBadge = createTextEl('span', `🌿 Style: ${p.travelStyle}`, 'pref-badge-pill');
    const compBadge = createTextEl('span', `👥 ${p.companions}`, 'pref-badge-pill');
    const paceBadge = createTextEl('span', `⚡ ${p.dailyPace} Pace (${p.dailyPace === 'Light' ? '4' : (p.dailyPace === 'Packed' ? '8' : '6')} pts)`, 'pref-badge-pill');
    
    prefsRow.appendChild(styleBadge);
    prefsRow.appendChild(compBadge);
    prefsRow.appendChild(paceBadge);

    if (Array.isArray(p.interests) && p.interests.length > 0) {
        const intBadge = createTextEl('span', `🎯 ${p.interests.join(', ')}`, 'pref-badge-pill');
        prefsRow.appendChild(intBadge);
    }

    headerCard.appendChild(prefsRow);

    // Weather Box
    const weatherBox = document.createElement('div');
    weatherBox.className = 'weather-box';
    weatherBox.id = 'weather-box';

    if (weatherState.loading) {
        weatherBox.className = 'weather-box weather-loading';
        const spinner = document.createElement('span');
        spinner.className = 'spinner';
        weatherBox.appendChild(spinner);
        weatherBox.appendChild(document.createTextNode(` Checking current live weather for ${plan.destination}...`));
    } else if (weatherState.success && weatherState.data) {
        weatherBox.className = 'weather-box weather-success';
        const tempBadge = createTextEl('span', `🌡️ ${weatherState.data.temperature}°C`, 'weather-temp');
        const descText = weatherState.data.description ? weatherState.data.description.charAt(0).toUpperCase() + weatherState.data.description.slice(1) : 'Clear';
        const condBadge = createTextEl('span', `• ${descText}`, 'weather-desc');
        
        const mainLine = document.createElement('div');
        mainLine.className = 'weather-main-line';
        mainLine.appendChild(tempBadge);
        mainLine.appendChild(condBadge);
        if (weatherState.data.humidity) {
            const humBadge = createTextEl('span', `• Humidity: ${weatherState.data.humidity}%`, 'weather-humidity');
            mainLine.appendChild(humBadge);
        }

        const noteLine = createTextEl('div', '* Live current destination weather conditions (not a future daily forecast).', 'weather-disclaimer');
        weatherBox.appendChild(mainLine);
        weatherBox.appendChild(noteLine);
    } else {
        weatherBox.className = 'weather-box weather-offline';
        const msg = weatherState.error || 'Live weather currently unavailable.';
        const errLine = createTextEl('div', `ℹ️ ${msg}`, 'weather-err-text');
        const noteLine = createTextEl('div', 'Your itinerary is fully ready below regardless of weather connectivity.', 'weather-disclaimer');
        weatherBox.appendChild(errLine);
        weatherBox.appendChild(noteLine);
    }
    headerCard.appendChild(weatherBox);

    // Action Controls (including Stage 3 Save Trip, Budget & Packing Shortcuts, Print)
    const actionRow = document.createElement('div');
    actionRow.className = 'overview-actions';

    // 1. Save Trip Button
    const saveTripBtn = document.createElement('button');
    saveTripBtn.type = 'button';
    saveTripBtn.id = 'save-trip-btn';
    saveTripBtn.className = isTripSaved ? 'btn btn-success' : 'btn';
    saveTripBtn.textContent = isTripSaved ? '✓ Saved to My Trips' : '💾 Save Trip';
    if (typeof onSaveTrip === 'function') {
        saveTripBtn.addEventListener('click', onSaveTrip);
    }

    // 2. Customize Preferences Button
    const editPrefBtn = document.createElement('button');
    editPrefBtn.type = 'button';
    editPrefBtn.className = 'btn-secondary';
    editPrefBtn.textContent = '⚙️ Customize Preferences';
    editPrefBtn.id = 'toggle-pref-btn';
    editPrefBtn.addEventListener('click', onOpenPreferences);

    // 3. Jump to Interactive Map (Stage 4)
    const mapJumpBtn = document.createElement('a');
    mapJumpBtn.href = '#map-section';
    mapJumpBtn.className = 'btn-secondary';
    mapJumpBtn.textContent = '🗺️ Map View';
    mapJumpBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const el = document.getElementById('map-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    });

    // 4. Jump to Budget Planner
    const budgetJumpBtn = document.createElement('a');
    budgetJumpBtn.href = '#budget-section';
    budgetJumpBtn.className = 'btn-secondary';
    budgetJumpBtn.textContent = '💰 Budget Planner';
    budgetJumpBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const el = document.getElementById('budget-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    });

    // 5. Jump to Packing Checklist
    const packJumpBtn = document.createElement('a');
    packJumpBtn.href = '#checklist-section';
    packJumpBtn.className = 'btn-secondary';
    packJumpBtn.textContent = '🎒 Packing List';
    packJumpBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const el = document.getElementById('checklist-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    });

    // 6. My Trips Link
    const myTripsBtn = document.createElement('a');
    myTripsBtn.href = 'my-trips.html';
    myTripsBtn.className = 'btn-secondary';
    myTripsBtn.textContent = '📂 My Trips';

    // 7. Plan Another Trip
    const backBtn = document.createElement('a');
    backBtn.href = 'index.html';
    backBtn.className = 'btn-secondary';
    backBtn.textContent = '← Plan Another';

    // 8. Print / PDF Export
    const printBtn = document.createElement('button');
    printBtn.type = 'button';
    printBtn.className = 'btn-secondary';
    printBtn.textContent = '🖨️ Print / Save as PDF';
    printBtn.addEventListener('click', () => window.print());

    actionRow.appendChild(saveTripBtn);
    actionRow.appendChild(editPrefBtn);
    actionRow.appendChild(mapJumpBtn);
    actionRow.appendChild(budgetJumpBtn);
    actionRow.appendChild(packJumpBtn);
    actionRow.appendChild(myTripsBtn);
    actionRow.appendChild(backBtn);
    actionRow.appendChild(printBtn);
    headerCard.appendChild(actionRow);

    container.appendChild(headerCard);
}

// Render Interactive Preference Editor Drawer (Stage 2)
function renderPreferenceDrawer(container, plan, onRegenerate) {
    const existingDrawer = document.getElementById('preferences-drawer');
    if (existingDrawer) existingDrawer.remove();

    const drawer = document.createElement('div');
    drawer.className = 'preferences-drawer';
    drawer.id = 'preferences-drawer';

    const header = document.createElement('div');
    header.className = 'drawer-header';
    const title = createTextEl('h3', 'Tailor Your Preferences', 'drawer-title');
    const closeBtn = createTextEl('button', '✕', 'drawer-close-btn');
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label', 'Close preferences drawer');
    closeBtn.addEventListener('click', () => drawer.classList.remove('open'));

    header.appendChild(title);
    header.appendChild(closeBtn);
    drawer.appendChild(header);

    const p = plan.preferences;

    // Helper to generate a chip group
    function makeRadioGroup(titleText, name, options, activeVal) {
        const group = document.createElement('div');
        group.className = 'pref-group';
        group.appendChild(createTextEl('span', titleText, 'pref-label'));
        const chipContainer = document.createElement('div');
        chipContainer.className = 'chip-group';

        options.forEach(opt => {
            const label = document.createElement('label');
            label.className = 'chip';
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = name;
            radio.value = opt.value;
            if (opt.value === activeVal) radio.checked = true;
            const span = createTextEl('span', opt.label);
            label.appendChild(radio);
            label.appendChild(span);
            chipContainer.appendChild(label);
        });

        group.appendChild(chipContainer);
        return group;
    }

    // Travel Style
    drawer.appendChild(makeRadioGroup('Travel Style', 'drawerTravelStyle', [
        { value: 'Relaxed', label: '🌿 Relaxed' },
        { value: 'Explorer', label: '🧭 Explorer' },
        { value: 'Adventure', label: '🧗 Adventure' },
        { value: 'Cultural', label: '🏛️ Cultural' }
    ], p.travelStyle));

    // Companions
    drawer.appendChild(makeRadioGroup('Companions', 'drawerCompanions', [
        { value: 'Solo', label: '🎒 Solo' },
        { value: 'Couple', label: '💑 Couple' },
        { value: 'Friends', label: '🎉 Friends' },
        { value: 'Family', label: '👨‍👩‍👧 Family' }
    ], p.companions));

    // Pace
    drawer.appendChild(makeRadioGroup('Daily Pace (Energy Budget)', 'drawerPace', [
        { value: 'Light', label: '☕ Light (4 pts)' },
        { value: 'Balanced', label: '⚖️ Balanced (6 pts)' },
        { value: 'Packed', label: '⚡ Packed (8 pts)' }
    ], p.dailyPace));

    // Interests
    const intGroup = document.createElement('div');
    intGroup.className = 'pref-group';
    intGroup.appendChild(createTextEl('span', 'Interests', 'pref-label'));
    const intChips = document.createElement('div');
    intChips.className = 'chip-group';

    const interestOptions = [
        'Culture and History', 'Food and Dining', 'Nature and Outdoors',
        'Adventure', 'Shopping', 'Nightlife', 'Photography', 'Spiritual Experiences'
    ];

    interestOptions.forEach(intName => {
        const label = document.createElement('label');
        label.className = 'chip';
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.name = 'drawerInterests';
        cb.value = intName;
        if (p.interests && p.interests.includes(intName)) cb.checked = true;
        const span = createTextEl('span', intName);
        label.appendChild(cb);
        label.appendChild(span);
        intChips.appendChild(label);
    });
    intGroup.appendChild(intChips);
    drawer.appendChild(intGroup);

    // Actions
    const actionRow = document.createElement('div');
    actionRow.className = 'drawer-actions';

    const regenBtn = document.createElement('button');
    regenBtn.type = 'button';
    regenBtn.className = 'btn';
    regenBtn.style.flex = '1';
    regenBtn.textContent = '🔄 Regenerate Itinerary';
    regenBtn.addEventListener('click', () => {
        const styleEl = drawer.querySelector('input[name="drawerTravelStyle"]:checked');
        const compEl = drawer.querySelector('input[name="drawerCompanions"]:checked');
        const paceEl = drawer.querySelector('input[name="drawerPace"]:checked');
        const checkedInts = Array.from(drawer.querySelectorAll('input[name="drawerInterests"]:checked')).map(el => el.value);

        const newPrefs = {
            travelStyle: styleEl ? styleEl.value : p.travelStyle,
            companions: compEl ? compEl.value : p.companions,
            dailyPace: paceEl ? paceEl.value : p.dailyPace,
            interests: checkedInts.length > 0 ? checkedInts : p.interests
        };

        drawer.classList.remove('open');
        onRegenerate(newPrefs);
    });

    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.className = 'btn-secondary';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => drawer.classList.remove('open'));

    actionRow.appendChild(regenBtn);
    actionRow.appendChild(cancelBtn);
    drawer.appendChild(actionRow);

    container.appendChild(drawer);
}

// ==========================================
// 6.5 INTERACTIVE MAP MODULE (STAGE 4)
// ==========================================

const DESTINATION_COORDINATES = {
    jaipur: {
        center: [26.9124, 75.7873],
        zoom: 12,
        regionName: "Jaipur, Rajasthan, India",
        landmarks: {
            "Amber Fort & Maota Lake View": [26.9855, 75.8513],
            "City Palace & Jantar Mantar": [26.9258, 75.8237],
            "Hawa Mahal & Johari Bazaar Walk": [26.9239, 75.8267],
            "Nahargarh Fort Sunset Overlook": [26.9373, 75.8155],
            "Jal Mahal Promenade & Photography": [26.9656, 75.8458],
            "Albert Hall Museum & Ram Niwas Garden": [26.9116, 75.8193],
            "Chokhi Dhani Ethnic Cultural Village": [26.7674, 75.8322]
        }
    },
    goa: {
        center: [15.4909, 73.8278],
        zoom: 11,
        regionName: "Goa, India",
        landmarks: {
            "Fort Aguada & Sinquerim Lighthouse": [15.4925, 73.7738],
            "Calangute & Baga Beach Coastal Walk": [15.5439, 73.7553],
            "Basilica of Bom Jesus & Old Goa Heritage Walk": [15.5009, 73.9116],
            "Dudhsagar Waterfalls Jeep Trail": [15.3144, 74.3143],
            "Anjuna Flea Market & Sunset Stroll": [15.5786, 73.7414],
            "Fontainhas Latin Quarter Heritage Walk": [15.4989, 73.8340],
            "Palolem Beach Relaxation & Kayaking": [15.0100, 74.0232]
        }
    },
    delhi: {
        center: [28.6139, 77.2090],
        zoom: 12,
        regionName: "Delhi NCR, India",
        landmarks: {
            "Red Fort & Old Delhi Heritage Walk": [28.6562, 77.2410],
            "Chandni Chowk Street Food Trail": [28.6506, 77.2303],
            "Humayun's Tomb & Sunder Nursery": [28.5933, 77.2507],
            "Qutub Minar Complex & Mehrauli Archaeological Park": [28.5245, 77.1855],
            "India Gate & Kartavya Path Stroll": [28.6129, 77.2295],
            "Lotus Temple & Tranquil Meditation Gardens": [28.5535, 77.2588],
            "Akshardham Temple Exhibition & Light Show": [28.6127, 77.2773]
        }
    },
    manali: {
        center: [32.2396, 77.1887],
        zoom: 12,
        regionName: "Manali, Himachal Pradesh, India",
        landmarks: {
            "Hadimba Devi Temple & Cedar Forest Trail": [32.2483, 77.1804],
            "Old Manali Village & Riverside Cafe Trail": [32.2530, 77.1750],
            "Solang Valley High-Altitude Adventure Park": [32.3166, 77.1575],
            "Jogini Waterfall Nature Hike": [32.2680, 77.1950],
            "Vashisht Hot Springs & Temple Complex": [32.2625, 77.1983],
            "Rohtang Pass Snow View Excursion": [32.3716, 77.2466]
        }
    },
    paris: {
        center: [48.8566, 2.3522],
        zoom: 12,
        regionName: "Paris, France",
        landmarks: {
            "Eiffel Tower & Champ de Mars Promenade": [48.8584, 2.2945],
            "Louvre Museum Masterpieces Tour": [48.8606, 2.3376],
            "Montmartre & Sacré-Cœur Hilltop Walk": [48.8867, 2.3431],
            "Seine River Sightseeing Cruise": [48.8583, 2.2945],
            "Notre-Dame Cathedral & Île de la Cité": [48.8530, 2.3499],
            "Musée d'Orsay Impressionist Collection": [48.8599, 2.3266],
            "Champs-Élysées & Arc de Triomphe": [48.8738, 2.2950]
        }
    }
};

let activeLeafletMap = null;

function renderItineraryMap(container, plan) {
    if (!container) return;
    container.innerHTML = '';

    const mapCard = document.createElement('div');
    mapCard.className = 'map-section card';
    mapCard.id = 'map-card-wrapper';

    // Header Row
    const headerRow = document.createElement('div');
    headerRow.className = 'map-header-row';

    const titleGroup = document.createElement('div');
    const mapTitle = createTextEl('h2', '🗺️ Interactive Destination Map', 'map-title');
    const mapNotice = createTextEl('p', `Geographical landmark orientation for ${plan.destination}. Complete activity descriptions remain organized in the schedule cards below.`, 'weather-disclaimer');
    titleGroup.appendChild(mapTitle);
    titleGroup.appendChild(mapNotice);
    headerRow.appendChild(titleGroup);
    mapCard.appendChild(headerRow);

    // Fallback check: if Leaflet is not loaded or offline
    if (typeof window.L === 'undefined') {
        const fallbackBox = document.createElement('div');
        fallbackBox.className = 'map-fallback-notice';
        const fbIcon = createTextEl('div', '🗺️', 'map-fallback-icon');
        const fbTitle = createTextEl('div', 'Interactive Map Offline / CDN Unavailable', 'map-fallback-title');
        const fbDesc = createTextEl('p', 'OpenStreetMap tile services are currently unreachable or offline. Your full itinerary schedule and details are fully accessible in the cards below.', 'map-fallback-desc');
        fallbackBox.appendChild(fbIcon);
        fallbackBox.appendChild(fbTitle);
        fallbackBox.appendChild(fbDesc);
        mapCard.appendChild(fallbackBox);
        container.appendChild(mapCard);
        return;
    }

    // Filter Bar: All Days vs Day-by-Day
    const filterRow = document.createElement('div');
    filterRow.className = 'map-filter-row';
    const filterLabel = createTextEl('span', 'Filter Map by Day:', 'map-filter-label');
    filterRow.appendChild(filterLabel);

    const filterBtnGroup = document.createElement('div');
    filterBtnGroup.className = 'map-filter-btn-group';

    const allBtn = document.createElement('button');
    allBtn.type = 'button';
    allBtn.className = 'map-filter-btn active';
    allBtn.textContent = 'All Days';
    filterBtnGroup.appendChild(allBtn);

    plan.days.forEach(d => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'map-filter-btn';
        btn.textContent = `Day ${d.dayNumber}`;
        btn.setAttribute('data-day', String(d.dayNumber));
        filterBtnGroup.appendChild(btn);
    });

    filterRow.appendChild(filterBtnGroup);
    mapCard.appendChild(filterRow);

    // Map canvas container
    const mapDiv = document.createElement('div');
    mapDiv.id = 'itinerary-map';
    mapDiv.className = 'itinerary-map-canvas';
    mapCard.appendChild(mapDiv);

    // Explicit Disclaimer Notice (Requirement 5)
    const disclaimer = createTextEl('div', 'ℹ️ Map Disclaimer: Markers indicate approximate verified landmark locations for geographical orientation. Dashed sequence lines illustrate visit order, not turn-by-turn driving or walking directions.', 'map-disclaimer');
    mapCard.appendChild(disclaimer);

    container.appendChild(mapCard);

    // Resolve destination coordinates
    const destKey = plan.destination.toLowerCase().trim();
    const destMeta = DESTINATION_COORDINATES[destKey] || {
        center: [20.5937, 78.9629],
        zoom: 6,
        regionName: plan.destination,
        landmarks: {}
    };

    // Clean up any existing Leaflet map instance
    if (activeLeafletMap) {
        try {
            activeLeafletMap.remove();
        } catch (_) {}
        activeLeafletMap = null;
    }

    try {
        const map = window.L.map(mapDiv).setView(destMeta.center, destMeta.zoom);
        activeLeafletMap = map;

        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'
        }).addTo(map);

        const markerGroup = window.L.featureGroup().addTo(map);
        let routePolyline = null;

        function updateMapMarkers(selectedDay) {
            markerGroup.clearLayers();
            if (routePolyline) {
                map.removeLayer(routePolyline);
                routePolyline = null;
            }

            const pointsForLine = [];

            plan.days.forEach(day => {
                if (selectedDay !== 'all' && day.dayNumber !== parseInt(selectedDay, 10)) {
                    return;
                }

                day.activities.forEach(act => {
                    let coords = destMeta.landmarks[act.title];
                    let isApprox = false;

                    if (!coords) {
                        // Offset approximate coordinates based on destination center
                        const hash = (act.title + act.period).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                        const offsetLat = ((hash % 100) - 50) * 0.0008;
                        const offsetLng = (((hash * 7) % 100) - 50) * 0.0008;
                        coords = [destMeta.center[0] + offsetLat, destMeta.center[1] + offsetLng];
                        isApprox = true;
                    }

                    pointsForLine.push(coords);

                    const popupContainer = document.createElement('div');
                    popupContainer.className = 'map-popup-card';
                    popupContainer.appendChild(createTextEl('span', `Day ${day.dayNumber} • ${act.period}`, 'map-popup-badge'));
                    popupContainer.appendChild(createTextEl('h4', act.title, 'map-popup-title'));
                    popupContainer.appendChild(createTextEl('p', `⏱️ ${act.duration} • Energy: ${act.intensity} pt${act.intensity > 1 ? 's' : ''}`, 'map-popup-meta'));
                    popupContainer.appendChild(createTextEl('p', `${act.description.slice(0, 110)}...`, 'map-popup-desc'));
                    popupContainer.appendChild(createTextEl('span', isApprox ? '📍 Approximate vicinity location' : '📍 Verified landmark coordinate', 'map-popup-approx'));

                    window.L.marker(coords)
                        .bindPopup(popupContainer)
                        .addTo(markerGroup);
                });
            });

            if (pointsForLine.length >= 2) {
                routePolyline = window.L.polyline(pointsForLine, {
                    color: '#6366f1',
                    weight: 3,
                    opacity: 0.75,
                    dashArray: '6, 8',
                    lineJoin: 'round'
                }).addTo(map);
            }

            if (markerGroup.getLayers().length > 0) {
                map.fitBounds(markerGroup.getBounds().pad(0.15));
            } else {
                map.setView(destMeta.center, destMeta.zoom);
            }
        }

        updateMapMarkers('all');

        filterBtnGroup.querySelectorAll('.map-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtnGroup.querySelectorAll('.map-filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const dayVal = btn.getAttribute('data-day') || 'all';
                updateMapMarkers(dayVal);
            });
        });

        setTimeout(() => {
            if (activeLeafletMap) activeLeafletMap.invalidateSize();
        }, 300);

    } catch (mapErr) {
        console.warn('Leaflet map initialization warning:', mapErr);
        mapDiv.style.display = 'none';
        const errNotice = createTextEl('div', 'ℹ️ Interactive map could not be displayed. All itinerary details remain available below.', 'map-fallback-notice');
        mapCard.appendChild(errNotice);
    }
}

// Render Day Cards with Energy Summary & Explainable Recommendation Badges
function renderItineraryDays(container, plan) {
    const existingList = document.querySelector('.itinerary-days-list');
    if (existingList) existingList.remove();

    const daysContainer = document.createElement('div');
    daysContainer.className = 'itinerary-days-list';

    plan.days.forEach((dayPlan) => {
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card card';

        // 1. Day Header
        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-card-header';
        const dayTitle = createTextEl('h2', dayPlan.theme, 'day-title');
        const dayDate = createTextEl('span', dayPlan.dateString, 'day-date-badge');
        dayHeader.appendChild(dayTitle);
        dayHeader.appendChild(dayDate);
        dayCard.appendChild(dayHeader);

        // 2. Daily Energy Summary Widget (Stage 2)
        const energySummary = document.createElement('div');
        energySummary.className = 'day-energy-summary';

        const summaryHeader = document.createElement('div');
        summaryHeader.className = 'energy-summary-header';

        const energyBadge = createTextEl('span', `⚡ ${dayPlan.energy.level}`, `energy-badge ${dayPlan.energy.badgeClass}`);
        const energyPoints = createTextEl('span', `${dayPlan.energy.pointsUsed} / ${dayPlan.energy.pointsLimit} Energy Points`, 'energy-stat-pill');
        summaryHeader.appendChild(energyBadge);
        summaryHeader.appendChild(energyPoints);
        energySummary.appendChild(summaryHeader);

        // Progress meter
        const meterContainer = document.createElement('div');
        meterContainer.className = 'energy-meter-container';
        meterContainer.setAttribute('role', 'progressbar');
        meterContainer.setAttribute('aria-valuenow', String(dayPlan.energy.pointsUsed));
        meterContainer.setAttribute('aria-valuemin', '0');
        meterContainer.setAttribute('aria-valuemax', String(dayPlan.energy.pointsLimit));
        meterContainer.setAttribute('aria-label', `Energy usage: ${dayPlan.energy.pointsUsed} out of ${dayPlan.energy.pointsLimit} points`);

        const meterFill = document.createElement('div');
        meterFill.className = `energy-meter-fill ${dayPlan.energy.meterFillClass}`;
        meterFill.style.width = `${dayPlan.energy.percentage}%`;
        meterContainer.appendChild(meterFill);
        energySummary.appendChild(meterContainer);

        // Stats Row
        const statsRow = document.createElement('div');
        statsRow.className = 'energy-stats-row';
        statsRow.appendChild(createTextEl('span', `⏱️ ~${dayPlan.energy.scheduledHours} hrs scheduled`, 'energy-stat-pill'));
        statsRow.appendChild(createTextEl('span', `🎯 ${dayPlan.energy.activityCount} ${dayPlan.energy.activityCount === 1 ? 'activity' : 'activities'}${dayPlan.energy.hasMealBreak ? ' + 1 meal break' : ''}`, 'energy-stat-pill'));
        statsRow.appendChild(createTextEl('span', `🌿 Pacing: ${plan.preferences.dailyPace}`, 'energy-stat-pill'));
        energySummary.appendChild(statsRow);

        // Exceeded explanatory note
        if (dayPlan.energy.exceededNote) {
            const alertBox = createTextEl('div', dayPlan.energy.exceededNote, 'energy-alert-box');
            energySummary.appendChild(alertBox);
        }

        dayCard.appendChild(energySummary);

        // 3. Activities List
        const activityList = document.createElement('div');
        activityList.className = 'activity-list';

        dayPlan.activities.forEach((act) => {
            const actItem = document.createElement('div');
            actItem.className = 'activity-item';

            // Activity Header
            const actHeader = document.createElement('div');
            actHeader.className = 'activity-header';

            const periodPill = createTextEl('span', act.period, `period-pill period-${act.period.toLowerCase().replace(/\s+/g, '-')}`);
            const categoryPill = createTextEl('span', act.category, 'category-pill');
            const durationPill = createTextEl('span', `⏱️ ${act.duration}`, 'duration-pill-small');

            actHeader.appendChild(periodPill);
            actHeader.appendChild(categoryPill);
            actHeader.appendChild(durationPill);

            const actTitle = createTextEl('h3', act.title, 'activity-title');
            const actDesc = createTextEl('p', act.description, 'activity-desc');

            // Metadata Badges (Stage 2)
            const badgesRow = document.createElement('div');
            badgesRow.className = 'activity-badges';

            const intensityLabel = act.intensity === 1 ? 'Low Energy (1)' : (act.intensity === 2 ? 'Moderate Energy (2)' : 'High Energy (3)');
            const intensityPill = createTextEl('span', `Intensity: ${intensityLabel}`, `intensity-pill intensity-${act.intensity}`);
            badgesRow.appendChild(intensityPill);

            if (act.costEstimate) {
                badgesRow.appendChild(createTextEl('span', `Cost: ${act.costEstimate}`, 'cost-pill'));
            }

            const envText = act.isOutdoor ? 'Outdoor' : 'Indoor';
            badgesRow.appendChild(createTextEl('span', envText, 'env-pill'));

            if (act.isOptional) {
                badgesRow.appendChild(createTextEl('span', 'Optional Activity', 'optional-badge'));
            }

            // Dynamic Recommendation Explanation (Stage 2)
            const recBox = document.createElement('div');
            recBox.className = 'recommendation-tag';
            const recIcon = createTextEl('span', '💡', 'rec-icon');
            const recText = createTextEl('span', act.explanation);
            recBox.appendChild(recIcon);
            recBox.appendChild(recText);

            actItem.appendChild(actHeader);
            actItem.appendChild(actTitle);
            actItem.appendChild(actDesc);
            actItem.appendChild(badgesRow);
            actItem.appendChild(recBox);

            activityList.appendChild(actItem);
        });

        dayCard.appendChild(activityList);
        daysContainer.appendChild(dayCard);
    });

    container.appendChild(daysContainer);
}

// Render Empty State
function renderEmptyState(container) {
    container.innerHTML = '';
    const emptyCard = document.createElement('div');
    emptyCard.className = 'empty-state card';

    const icon = createTextEl('div', '🧭', 'empty-icon');
    const title = createTextEl('h2', 'No Trip Selected Yet', 'empty-title');
    const desc = createTextEl('p', 'It seems you arrived here without configuring a trip. Head back to the planner to choose a destination, dates, and preferences, or view your saved trips library!', 'empty-desc');

    const actions = document.createElement('div');
    actions.className = 'overview-actions';
    actions.style.justifyContent = 'center';
    actions.style.marginTop = '20px';

    const link = document.createElement('a');
    link.href = 'index.html';
    link.className = 'btn';
    link.textContent = 'Go to Trip Planner';

    const myTripsLink = document.createElement('a');
    myTripsLink.href = 'my-trips.html';
    myTripsLink.className = 'btn-secondary';
    myTripsLink.textContent = '📂 View Saved Trips';

    actions.appendChild(link);
    actions.appendChild(myTripsLink);

    emptyCard.appendChild(icon);
    emptyCard.appendChild(title);
    emptyCard.appendChild(desc);
    emptyCard.appendChild(actions);
    container.appendChild(emptyCard);
}

// Toast notification helper
function showToast(message, isError) {
    let toast = document.getElementById('toast-message');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-message';
        toast.setAttribute('role', 'alert');
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.className = 'toast-notification ' + (isError ? 'toast-error' : 'toast-success');
    toast.style.display = 'block';
    setTimeout(() => {
        if (toast) toast.style.display = 'none';
    }, 4000);
}

// ==========================================
// 7. BUDGET PLANNER MODULE (STAGE 3 & 4)
// ==========================================

const SUPPORTED_CURRENCIES = [
    { code: 'INR', symbol: '₹', label: 'INR (₹)' },
    { code: 'USD', symbol: '$', label: 'USD ($)' },
    { code: 'EUR', symbol: '€', label: 'EUR (€)' },
    { code: 'GBP', symbol: '£', label: 'GBP (£)' },
    { code: 'AED', symbol: 'AED', label: 'AED' },
    { code: 'CAD', symbol: 'C$', label: 'CAD (C$)' },
    { code: 'AUD', symbol: 'A$', label: 'AUD (A$)' }
];

// Curated & transparent destination-appropriate spending presets (Stage 4)
const BUDGET_TIER_PRESETS = {
    jaipur: {
        Budget: { label: '🎒 Budget', desc: 'Hostels, local thalis & auto-rickshaws', acc: 1500, food: 600, trans: 1500, act: 1000, misc: 800, curr: '₹', code: 'INR' },
        Standard: { label: '🏨 Standard', desc: 'Heritage stays, authentic dining & cabs', acc: 3500, food: 1200, trans: 3000, act: 2500, misc: 1500, curr: '₹', code: 'INR' },
        Premium: { label: '👑 Premium', desc: 'Palace hotels, private chauffeur & fine dining', acc: 8500, food: 2800, trans: 6000, act: 5500, misc: 3500, curr: '₹', code: 'INR' }
    },
    goa: {
        Budget: { label: '🎒 Budget', desc: 'Beach cottages, scooter rentals & beach cafes', acc: 1800, food: 800, trans: 1800, act: 1200, misc: 1000, curr: '₹', code: 'INR' },
        Standard: { label: '🏨 Standard', desc: 'Seaside resorts, coastal dining & private cabs', acc: 4000, food: 1500, trans: 3500, act: 3000, misc: 2000, curr: '₹', code: 'INR' },
        Premium: { label: '👑 Premium', desc: 'Luxury oceanfront villas, cruises & upscale dining', acc: 9500, food: 3200, trans: 7000, act: 6000, misc: 4000, curr: '₹', code: 'INR' }
    },
    delhi: {
        Budget: { label: '🎒 Budget', desc: 'B&B lodgings, metro passes & street food', acc: 1600, food: 700, trans: 1500, act: 1200, misc: 1000, curr: '₹', code: 'INR' },
        Standard: { label: '🏨 Standard', desc: 'Central 4-star stays, app cabs & heritage bistros', acc: 3800, food: 1400, trans: 3200, act: 2500, misc: 2000, curr: '₹', code: 'INR' },
        Premium: { label: '👑 Premium', desc: '5-star diplomatic quarter hotels & private tours', acc: 9000, food: 3000, trans: 6500, act: 5000, misc: 4000, curr: '₹', code: 'INR' }
    },
    manali: {
        Budget: { label: '🎒 Budget', desc: 'Mountain homestays, local buses & cafes', acc: 1500, food: 650, trans: 2000, act: 1800, misc: 1000, curr: '₹', code: 'INR' },
        Standard: { label: '🏨 Standard', desc: 'Valley view chalets, taxi tours & mountain sports', acc: 3200, food: 1200, trans: 4000, act: 3500, misc: 2000, curr: '₹', code: 'INR' },
        Premium: { label: '👑 Premium', desc: 'Cedar luxury suites, private 4x4 & adventure packages', acc: 7500, food: 2600, trans: 7500, act: 6500, misc: 3500, curr: '₹', code: 'INR' }
    },
    paris: {
        Budget: { label: '🎒 Budget', desc: 'Cozy hostels, bakeries & metro carnets', acc: 70, food: 35, trans: 45, act: 40, misc: 30, curr: '€', code: 'EUR' },
        Standard: { label: '🏨 Standard', desc: 'Boutique arrondissements, bistros & museum passes', acc: 150, food: 70, trans: 80, act: 75, misc: 60, curr: '€', code: 'EUR' },
        Premium: { label: '👑 Premium', desc: 'Haussmannian luxury suites, river cruise & haute cuisine', acc: 350, food: 150, trans: 200, act: 180, misc: 140, curr: '€', code: 'EUR' }
    },
    default: {
        Budget: { label: '🎒 Budget', desc: 'Affordable accommodations & budget transit', acc: 1600, food: 650, trans: 1800, act: 1200, misc: 1000, curr: '₹', code: 'INR' },
        Standard: { label: '🏨 Standard', desc: 'Comfortable hotels & balanced dining/activities', acc: 3500, food: 1300, trans: 3200, act: 2500, misc: 1800, curr: '₹', code: 'INR' },
        Premium: { label: '👑 Premium', desc: 'Upscale stays & premium experiences', acc: 8500, food: 3000, trans: 6500, act: 5500, misc: 3500, curr: '₹', code: 'INR' }
    }
};

function getDefaultBudget(plan) {
    const days = Math.max(1, parseInt(plan.durationDays, 10) || 1);
    const nights = days > 1 ? days - 1 : 1;
    const destKey = (plan.destination || '').toLowerCase().trim();
    const presetGroup = BUDGET_TIER_PRESETS[destKey] || BUDGET_TIER_PRESETS.default;
    const standardPreset = presetGroup.Standard;

    const accommodationPerNight = standardPreset.acc;
    const foodPerDay = standardPreset.food;
    const transportation = standardPreset.trans;
    const activities = standardPreset.act;
    const miscellaneous = standardPreset.misc;

    const accommodationTotal = accommodationPerNight * nights;
    const foodTotal = foodPerDay * days;
    const estimatedExpenditure = accommodationTotal + foodTotal + transportation + activities + miscellaneous;
    const roundStep = standardPreset.curr === '₹' ? 1000 : 50;
    const totalBudget = Math.ceil((estimatedExpenditure * 1.15) / roundStep) * roundStep;
    const remainingBudget = totalBudget - estimatedExpenditure;
    const utilizationPercent = totalBudget > 0 ? Math.round(((estimatedExpenditure / totalBudget) * 100) * 10) / 10 : 0;

    return {
        currency: standardPreset.curr,
        currencyCode: standardPreset.code,
        totalBudget: totalBudget,
        accommodationPerNight: accommodationPerNight,
        foodPerDay: foodPerDay,
        transportation: transportation,
        activities: activities,
        miscellaneous: miscellaneous,
        days: days,
        nights: nights,
        accommodationTotal: accommodationTotal,
        foodTotal: foodTotal,
        estimatedExpenditure: estimatedExpenditure,
        remainingBudget: remainingBudget,
        utilizationPercent: utilizationPercent
    };
}

function calculateBudget(rawBudget, durationDays) {
    const days = Math.max(1, parseInt(durationDays, 10) || 1);
    const nights = days > 1 ? days - 1 : 1;

    const currency = (rawBudget && rawBudget.currency) || '₹';
    const currencyCode = (rawBudget && rawBudget.currencyCode) || 'INR';

    function parseSafe(val) {
        if (val === '' || val === null || val === undefined) return 0;
        const num = Number(val);
        if (isNaN(num)) return 0;
        return Math.max(0, num);
    }

    const totalBudget = parseSafe(rawBudget ? rawBudget.totalBudget : 0);
    const accommodationPerNight = parseSafe(rawBudget ? rawBudget.accommodationPerNight : 0);
    const foodPerDay = parseSafe(rawBudget ? rawBudget.foodPerDay : 0);
    const transportation = parseSafe(rawBudget ? rawBudget.transportation : 0);
    const activities = parseSafe(rawBudget ? rawBudget.activities : 0);
    const miscellaneous = parseSafe(rawBudget ? rawBudget.miscellaneous : 0);

    const accommodationTotal = accommodationPerNight * nights;
    const foodTotal = foodPerDay * days;
    const estimatedExpenditure = accommodationTotal + foodTotal + transportation + activities + miscellaneous;
    const remainingBudget = totalBudget - estimatedExpenditure;
    const utilizationPercent = totalBudget > 0 ? Math.round(((estimatedExpenditure / totalBudget) * 100) * 10) / 10 : 0;

    return {
        currency: currency,
        currencyCode: currencyCode,
        totalBudget: totalBudget,
        accommodationPerNight: accommodationPerNight,
        foodPerDay: foodPerDay,
        transportation: transportation,
        activities: activities,
        miscellaneous: miscellaneous,
        days: days,
        nights: nights,
        accommodationTotal: accommodationTotal,
        foodTotal: foodTotal,
        estimatedExpenditure: estimatedExpenditure,
        remainingBudget: remainingBudget,
        utilizationPercent: utilizationPercent
    };
}

function renderBudgetPlanner(container, plan, budgetData, onBudgetChange) {
    container.innerHTML = '';

    const budgetCard = document.createElement('div');
    budgetCard.className = 'budget-section card';
    budgetCard.id = 'budget-section';

    let currentBudget = calculateBudget(budgetData, plan.durationDays);

    // 1. Header Row
    const headerRow = document.createElement('div');
    headerRow.className = 'budget-header-row';

    const titleGroup = document.createElement('div');
    const title = createTextEl('h2', '💰 Trip Budget Planner & Cost Estimator', 'budget-title');
    const notice = createTextEl('p', 'Interactive cost calculator. Values are editable illustrative estimates to help you plan realistically.', 'weather-disclaimer');
    titleGroup.appendChild(title);
    titleGroup.appendChild(notice);

    const currGroup = document.createElement('div');
    currGroup.className = 'currency-select-group';
    currGroup.appendChild(createTextEl('label', 'Currency:'));

    const currSelect = document.createElement('select');
    currSelect.className = 'currency-select';
    currSelect.id = 'budget-currency-select';

    SUPPORTED_CURRENCIES.forEach(curr => {
        const opt = document.createElement('option');
        opt.value = curr.code;
        opt.textContent = curr.label;
        if (curr.code === currentBudget.currencyCode) opt.selected = true;
        currSelect.appendChild(opt);
    });

    currGroup.appendChild(currSelect);
    headerRow.appendChild(titleGroup);
    headerRow.appendChild(currGroup);
    budgetCard.appendChild(headerRow);

    // 2. Summary Stats Cards
    const statsGrid = document.createElement('div');
    statsGrid.className = 'budget-summary-grid';

    function createStatBox(label, id) {
        const box = document.createElement('div');
        box.className = 'budget-stat-box';
        const lbl = createTextEl('div', label, 'budget-stat-label');
        const val = createTextEl('div', '', 'budget-stat-value');
        val.id = id;
        box.appendChild(lbl);
        box.appendChild(val);
        return box;
    }

    statsGrid.appendChild(createStatBox('Total Budget', 'stat-budget-total'));
    statsGrid.appendChild(createStatBox('Estimated Expenditure', 'stat-budget-exp'));
    statsGrid.appendChild(createStatBox('Remaining Balance', 'stat-budget-remaining'));
    statsGrid.appendChild(createStatBox('Budget Utilization', 'stat-budget-util'));
    budgetCard.appendChild(statsGrid);

    // 3. Visual Progress Meter
    const meterBar = document.createElement('div');
    meterBar.className = 'budget-meter-bar';
    const meterFill = document.createElement('div');
    meterFill.className = 'budget-meter-fill';
    meterFill.id = 'budget-meter-fill';
    meterBar.appendChild(meterFill);
    budgetCard.appendChild(meterBar);

    // 4. Over-budget Warning Alert Box
    const alertBox = document.createElement('div');
    alertBox.className = 'budget-alert-box';
    alertBox.id = 'budget-alert-box';
    alertBox.style.display = 'none';
    budgetCard.appendChild(alertBox);

    // 4.5 Spending Presets Row (Stage 4)
    const destKey = (plan.destination || '').toLowerCase().trim();
    const destPresets = BUDGET_TIER_PRESETS[destKey] || BUDGET_TIER_PRESETS.default;

    const presetsContainer = document.createElement('div');
    presetsContainer.className = 'budget-presets-container';

    const presetsTitle = createTextEl('div', `⚡ Spending Presets (Illustrative estimates for ${plan.destination}):`, 'budget-presets-title');
    presetsContainer.appendChild(presetsTitle);

    const presetBtnGroup = document.createElement('div');
    presetBtnGroup.className = 'budget-presets-btn-group';

    ['Budget', 'Standard', 'Premium'].forEach(tierKey => {
        const preset = destPresets[tierKey];
        if (!preset) return;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'budget-preset-btn';
        btn.title = preset.desc;

        const nameSpan = createTextEl('span', preset.label, 'preset-btn-name');
        const descSpan = createTextEl('span', preset.desc, 'preset-btn-desc');
        btn.appendChild(nameSpan);
        btn.appendChild(descSpan);

        btn.addEventListener('click', () => {
            const nights = currentBudget.nights;
            const days = currentBudget.days;
            const roundStep = preset.curr === '₹' ? 1000 : 50;

            const accNight = preset.acc;
            const foodDay = preset.food;
            const trans = preset.trans;
            const act = preset.act;
            const misc = preset.misc;

            const estExp = (accNight * nights) + (foodDay * days) + trans + act + misc;
            const total = Math.ceil((estExp * 1.15) / roundStep) * roundStep;

            // Update input elements
            const totalInp = document.getElementById('input-total-budget');
            const accInp = document.getElementById('input-acc-per-night');
            const foodInp = document.getElementById('input-food-per-day');
            const transInp = document.getElementById('input-transportation');
            const actInp = document.getElementById('input-activities');
            const miscInp = document.getElementById('input-miscellaneous');

            if (totalInp) totalInp.value = total;
            if (accInp) accInp.value = accNight;
            if (foodInp) foodInp.value = foodDay;
            if (transInp) transInp.value = trans;
            if (actInp) actInp.value = act;
            if (miscInp) miscInp.value = misc;

            if (preset.code && preset.code !== currentBudget.currencyCode) {
                const found = SUPPORTED_CURRENCIES.find(c => c.code === preset.code);
                if (found) {
                    currentBudget.currency = found.symbol;
                    currentBudget.currencyCode = found.code;
                    currSelect.value = found.code;
                }
            }

            handleInputChange();
            showToast(`Applied ${tierKey} spending preset for ${plan.destination}.`);
        });

        presetBtnGroup.appendChild(btn);
    });

    presetsContainer.appendChild(presetBtnGroup);
    budgetCard.appendChild(presetsContainer);

    // 5. Input Fields Grid
    const inputsGrid = document.createElement('div');
    inputsGrid.className = 'budget-grid';

    function createBudgetField(id, labelText, helperText, initialVal) {
        const field = document.createElement('div');
        field.className = 'budget-field-group';

        const label = document.createElement('label');
        label.htmlFor = id;
        label.textContent = labelText;
        if (helperText) {
            const small = createTextEl('small', ` ${helperText}`, 'saved-trip-int-text');
            label.appendChild(small);
        }

        const wrapper = document.createElement('div');
        wrapper.className = 'budget-input-wrapper';

        const sym = createTextEl('span', currentBudget.currency, 'budget-curr-symbol budget-sym-marker');

        const input = document.createElement('input');
        input.type = 'number';
        input.min = '0';
        input.step = '50';
        input.id = id;
        input.className = 'budget-input';
        input.value = initialVal > 0 ? initialVal : '';

        wrapper.appendChild(sym);
        wrapper.appendChild(input);
        field.appendChild(label);
        field.appendChild(wrapper);
        return field;
    }

    const nightsLabel = `(${currentBudget.nights} ${currentBudget.nights === 1 ? 'night' : 'nights'})`;
    const daysLabel = `(${currentBudget.days} ${currentBudget.days === 1 ? 'day' : 'days'})`;

    inputsGrid.appendChild(createBudgetField('input-total-budget', 'Total Planned Budget', '(Spending limit)', currentBudget.totalBudget));
    inputsGrid.appendChild(createBudgetField('input-acc-per-night', 'Accommodation / Night', nightsLabel, currentBudget.accommodationPerNight));
    inputsGrid.appendChild(createBudgetField('input-food-per-day', 'Food & Dining / Day', daysLabel, currentBudget.foodPerDay));
    inputsGrid.appendChild(createBudgetField('input-transportation', 'Transportation', '(Local transit & transfers)', currentBudget.transportation));
    inputsGrid.appendChild(createBudgetField('input-activities', 'Activities & Sightseeing', '(Entry fees & tours)', currentBudget.activities));
    inputsGrid.appendChild(createBudgetField('input-miscellaneous', 'Miscellaneous & Shopping', '(Souvenirs & buffer)', currentBudget.miscellaneous));

    budgetCard.appendChild(inputsGrid);

    // 6. Subtotals & Breakdown Row
    const breakdownRow = document.createElement('div');
    breakdownRow.className = 'energy-stats-row';
    breakdownRow.id = 'budget-breakdown-row';
    budgetCard.appendChild(breakdownRow);

    // Dynamic UI refresher function without destroying input focus
    function updateBudgetDisplay() {
        const curr = currentBudget.currency;

        // Currency symbol update
        budgetCard.querySelectorAll('.budget-sym-marker').forEach(symEl => {
            symEl.textContent = curr;
        });

        // Stats boxes
        const totalEl = document.getElementById('stat-budget-total');
        const expEl = document.getElementById('stat-budget-exp');
        const remEl = document.getElementById('stat-budget-remaining');
        const utilEl = document.getElementById('stat-budget-util');

        if (totalEl) totalEl.textContent = `${curr}${currentBudget.totalBudget.toLocaleString()}`;
        if (expEl) expEl.textContent = `${curr}${currentBudget.estimatedExpenditure.toLocaleString()}`;
        if (remEl) {
            remEl.textContent = `${curr}${currentBudget.remainingBudget.toLocaleString()}`;
            remEl.className = 'budget-stat-value ' + (currentBudget.remainingBudget >= 0 ? 'stat-positive' : 'stat-negative');
        }
        if (utilEl) utilEl.textContent = `${currentBudget.utilizationPercent}%`;

        // Meter fill
        const meterFillEl = document.getElementById('budget-meter-fill');
        if (meterFillEl) {
            const fillWidth = Math.min(100, Math.max(0, currentBudget.utilizationPercent));
            meterFillEl.style.width = `${fillWidth}%`;
            if (currentBudget.utilizationPercent > 100) {
                meterFillEl.classList.add('meter-warning');
            } else {
                meterFillEl.classList.remove('meter-warning');
            }
        }

        // Over-budget alert
        const alertBoxEl = document.getElementById('budget-alert-box');
        if (alertBoxEl) {
            if (currentBudget.remainingBudget < 0 && currentBudget.totalBudget > 0) {
                const deficit = Math.abs(currentBudget.remainingBudget).toLocaleString();
                alertBoxEl.textContent = `⚠️ Over Budget Warning: Your estimated expenditures exceed your allocated budget by ${curr}${deficit} (${currentBudget.utilizationPercent}% utilized). Consider adjusting accommodation, dining, or shopping allocations.`;
                alertBoxEl.style.display = 'block';
            } else if (currentBudget.totalBudget === 0 && currentBudget.estimatedExpenditure > 0) {
                alertBoxEl.textContent = `ℹ️ Note: Total budget is set to 0. Estimated trip cost is ${curr}${currentBudget.estimatedExpenditure.toLocaleString()}.`;
                alertBoxEl.style.display = 'block';
            } else {
                alertBoxEl.style.display = 'none';
            }
        }

        // Subtotals Breakdown
        const breakdownEl = document.getElementById('budget-breakdown-row');
        if (breakdownEl) {
            breakdownEl.innerHTML = '';
            const accChip = createTextEl('span', `🏨 Accommodation: ${curr}${currentBudget.accommodationTotal.toLocaleString()} (${currentBudget.nights}n × ${curr}${currentBudget.accommodationPerNight.toLocaleString()})`, 'energy-stat-pill');
            const foodChip = createTextEl('span', `🍽️ Food: ${curr}${currentBudget.foodTotal.toLocaleString()} (${currentBudget.days}d × ${curr}${currentBudget.foodPerDay.toLocaleString()})`, 'energy-stat-pill');
            const transChip = createTextEl('span', `🚗 Transport: ${curr}${currentBudget.transportation.toLocaleString()}`, 'energy-stat-pill');
            const actChip = createTextEl('span', `🎟️ Activities: ${curr}${currentBudget.activities.toLocaleString()}`, 'energy-stat-pill');
            const miscChip = createTextEl('span', `🛍️ Misc: ${curr}${currentBudget.miscellaneous.toLocaleString()}`, 'energy-stat-pill');

            breakdownEl.appendChild(accChip);
            breakdownEl.appendChild(foodChip);
            breakdownEl.appendChild(transChip);
            breakdownEl.appendChild(actChip);
            breakdownEl.appendChild(miscChip);
        }
    }

    // Input change orchestrator
    function handleInputChange() {
        const totalVal = document.getElementById('input-total-budget').value;
        const accVal = document.getElementById('input-acc-per-night').value;
        const foodVal = document.getElementById('input-food-per-day').value;
        const transVal = document.getElementById('input-transportation').value;
        const actVal = document.getElementById('input-activities').value;
        const miscVal = document.getElementById('input-miscellaneous').value;

        const updatedRaw = {
            currency: currentBudget.currency,
            currencyCode: currentBudget.currencyCode,
            totalBudget: totalVal,
            accommodationPerNight: accVal,
            foodPerDay: foodVal,
            transportation: transVal,
            activities: actVal,
            miscellaneous: miscVal
        };

        currentBudget = calculateBudget(updatedRaw, plan.durationDays);
        updateBudgetDisplay();

        if (typeof onBudgetChange === 'function') {
            onBudgetChange(currentBudget);
        }
    }

    // Wire input listeners
    ['input-total-budget', 'input-acc-per-night', 'input-food-per-day', 'input-transportation', 'input-activities', 'input-miscellaneous'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', handleInputChange);
        }
    });

    // Currency selector listener
    currSelect.addEventListener('change', () => {
        const selectedCode = currSelect.value;
        const found = SUPPORTED_CURRENCIES.find(c => c.code === selectedCode);
        if (found) {
            currentBudget.currency = found.symbol;
            currentBudget.currencyCode = found.code;
            updateBudgetDisplay();
            if (typeof onBudgetChange === 'function') {
                onBudgetChange(currentBudget);
            }
        }
    });

    // Initial render
    container.appendChild(budgetCard);
    updateBudgetDisplay();
}

// ==========================================
// 8. PERSONALIZED PACKING CHECKLIST MODULE (STAGE 3)
// ==========================================

const CHECKLIST_CATEGORIES = [
    { name: 'Travel Documents & Essentials', icon: '📄' },
    { name: 'Clothing & Footwear', icon: '👕' },
    { name: 'Toiletries & Personal Care', icon: '🧴' },
    { name: 'Electronics', icon: '🔌' },
    { name: 'Activity-Specific Equipment', icon: '🎯' },
    { name: 'Optional & Leisure Items', icon: '🎒' }
];

function generateDefaultChecklist(plan) {
    const days = Math.max(1, parseInt(plan.durationDays, 10) || 1);
    const dest = (plan.destination || '').toLowerCase();
    const prefs = plan.preferences || {};
    const style = prefs.travelStyle || 'Explorer';
    const comp = prefs.companions || 'Couple';
    const ints = Array.isArray(prefs.interests) ? prefs.interests : [];

    const items = [];

    function addItem(id, name, category, isCustom = false) {
        items.push({
            id: id,
            name: name,
            category: category,
            checked: false,
            isCustom: isCustom
        });
    }

    // 1. Travel Documents & Essentials
    addItem('doc_id', 'Government Photo ID / Passport & Required Visas', 'Travel Documents & Essentials');
    addItem('doc_tickets', 'Flight, Train, or Intercity Bus Tickets', 'Travel Documents & Essentials');
    addItem('doc_hotel', 'Hotel / Lodging Booking Confirmations', 'Travel Documents & Essentials');
    addItem('doc_cash', 'Local Cash & Primary Debit / Credit Card', 'Travel Documents & Essentials');
    addItem('doc_backup_card', 'Emergency Backup Card & Embassy / Bank Numbers', 'Travel Documents & Essentials');
    addItem('doc_insurance', 'Travel Insurance Policy Card & Emergency Contacts', 'Travel Documents & Essentials');

    // 2. Clothing & Footwear
    const outfitCount = Math.min(days + 1, 8);
    const underCount = Math.min(days + 1, 8);
    addItem('cloth_outfits', `${outfitCount} sets of comfortable daily travel outfits`, 'Clothing & Footwear');
    addItem('cloth_undergarments', `${underCount} sets of daily undergarments & socks`, 'Clothing & Footwear');
    addItem('cloth_shoes', 'Comfortable, broken-in walking sneakers', 'Clothing & Footwear');
    addItem('cloth_sleepwear', 'Lightweight comfortable sleepwear', 'Clothing & Footwear');
    addItem('cloth_rain', 'Compact windproof umbrella or light rain poncho', 'Clothing & Footwear');

    if (days >= 5) {
        addItem('cloth_laundry', 'Travel laundry bag & travel detergent sheets', 'Clothing & Footwear');
    }

    if (dest.includes('manali') || dest.includes('shimla') || dest.includes('kashmir') || dest.includes('leh')) {
        addItem('cloth_winter_jacket', 'Insulated down or heavy fleece jacket', 'Clothing & Footwear');
        addItem('cloth_thermals', 'Thermal innerwear tops & bottoms', 'Clothing & Footwear');
        addItem('cloth_winter_acc', 'Woolen beanie cap, neck muffler & insulated gloves', 'Clothing & Footwear');
    } else if (dest.includes('goa') || dest.includes('kerala') || dest.includes('beach') || dest.includes('phuket')) {
        addItem('cloth_swimwear', 'Swimwear & beach cover-ups (2 pairs)', 'Clothing & Footwear');
        addItem('cloth_sandals', 'Breathable water sandals or beach flip-flops', 'Clothing & Footwear');
        addItem('cloth_sunhat', 'Wide-brim UV sun hat & sunglasses', 'Clothing & Footwear');
    } else if (dest.includes('paris') || dest.includes('rome') || dest.includes('london')) {
        addItem('cloth_evening', 'Smart-casual evening dinner attire', 'Clothing & Footwear');
        addItem('cloth_light_jacket', 'Versatile blazer or seasonal trench coat', 'Clothing & Footwear');
    } else {
        addItem('cloth_breathable', 'Breathable lightweight cotton / linen shirts', 'Clothing & Footwear');
        addItem('cloth_sunglasses', 'UV protection sunglasses & summer cap', 'Clothing & Footwear');
    }

    // 3. Toiletries & Personal Care
    addItem('toil_toothbrush', 'Toothbrush, travel toothpaste & dental floss', 'Toiletries & Personal Care');
    addItem('toil_wash', 'Travel shampoo, conditioner & body wash', 'Toiletries & Personal Care');
    addItem('toil_deo', 'Deodorant & daily hygiene essentials', 'Toiletries & Personal Care');
    addItem('toil_sunscreen', 'Broad-spectrum Sunscreen SPF 50+', 'Toiletries & Personal Care');
    addItem('toil_meds', 'Personal prescription medications & basic first-aid (band-aids, pain relief)', 'Toiletries & Personal Care');
    addItem('toil_sanitizer', 'Pocket hand sanitizer & disinfectant wet wipes', 'Toiletries & Personal Care');
    addItem('toil_lip', 'Hydrating lip balm & moisturizer lotion', 'Toiletries & Personal Care');

    if (dest.includes('manali')) {
        addItem('toil_cold_cream', 'Heavy cold cream & petroleum jelly for mountain winds', 'Toiletries & Personal Care');
    }
    if (dest.includes('goa') || style === 'Adventure' || ints.includes('Nature and Outdoors')) {
        addItem('toil_repellent', 'Mosquito & insect repellent spray', 'Toiletries & Personal Care');
    }

    // 4. Electronics
    addItem('elec_phone_charger', 'Smartphone with heavy-duty fast charging cable', 'Electronics');
    addItem('elec_powerbank', 'High-capacity 10,000–20,000 mAh portable power bank', 'Electronics');
    addItem('elec_headphones', 'Noise-canceling earphones / headphones', 'Electronics');
    addItem('elec_adapter', 'Universal multi-pin travel plug adapter', 'Electronics');

    // 5. Activity-Specific Equipment
    if (ints.includes('Photography')) {
        addItem('act_camera', 'DSLR / Mirrorless camera body & prime/zoom lenses', 'Activity-Specific Equipment');
        addItem('act_camera_mem', 'Extra high-speed SD memory cards & card reader', 'Activity-Specific Equipment');
        addItem('act_camera_bat', 'Spare camera batteries, battery charger & lens cleaning kit', 'Activity-Specific Equipment');
    }

    if (style === 'Adventure' || ints.includes('Adventure') || ints.includes('Nature and Outdoors') || dest.includes('manali')) {
        addItem('act_trek_boots', 'High-traction ankle-support trekking boots', 'Activity-Specific Equipment');
        addItem('act_daypack', '20L–30L ergonomic daypack with integrated rain cover', 'Activity-Specific Equipment');
        addItem('act_water_bottle', 'Insulated stainless steel refillable water flask', 'Activity-Specific Equipment');
        addItem('act_trek_poles', 'Collapsible lightweight trekking poles', 'Activity-Specific Equipment');
    }

    if (dest.includes('goa') || ints.includes('Adventure')) {
        addItem('act_dry_bag', 'Waterproof dry bag or sealed phone pouch', 'Activity-Specific Equipment');
        addItem('act_beach_towel', 'Microfiber fast-dry compact towel', 'Activity-Specific Equipment');
    }

    if (style === 'Cultural' || dest.includes('jaipur') || dest.includes('delhi')) {
        addItem('act_temple_shawl', 'Modest temple shawl / scarf covering shoulders & knees', 'Activity-Specific Equipment');
        addItem('act_temple_slipon', 'Easy slip-on socks for heated temple stone walks', 'Activity-Specific Equipment');
    }

    if (comp === 'Family') {
        addItem('act_family_meds', 'Family pediatric emergency kit, thermometer & motion-sickness meds', 'Activity-Specific Equipment');
        addItem('act_kids_ent', 'Kids coloring kit, travel games or downloaded movies', 'Activity-Specific Equipment');
        addItem('act_family_snacks', 'Wholesome travel snacks, juice packs & extra wet wipes', 'Activity-Specific Equipment');
    }

    if (comp === 'Solo') {
        addItem('act_solo_alarm', 'Portable door stop safety lock or personal whistle/alarm', 'Activity-Specific Equipment');
        addItem('act_solo_docs', 'Physical paper copy of emergency numbers & embassy info', 'Activity-Specific Equipment');
    }

    // 6. Optional & Leisure Items
    addItem('opt_tote', 'Foldable reusable compact shopping tote bag', 'Optional & Leisure Items');
    addItem('opt_pillow', 'Memory foam travel neck pillow & contoured eye mask', 'Optional & Leisure Items');
    addItem('opt_reading', 'Paperback book, magazine, or loaded e-reader', 'Optional & Leisure Items');
    addItem('opt_journal', 'Travel journal notepad & pen for memories', 'Optional & Leisure Items');

    return items;
}

function reconcileChecklist(plan, existingChecklist) {
    const defaults = generateDefaultChecklist(plan);
    if (!Array.isArray(existingChecklist) || existingChecklist.length === 0) {
        return defaults;
    }

    const stateMap = new Map();
    const customItems = [];

    existingChecklist.forEach(item => {
        if (!item) return;
        if (item.isCustom) {
            customItems.push(item);
        } else {
            if (item.id) stateMap.set(item.id, Boolean(item.checked));
            if (item.name) stateMap.set(item.name.toLowerCase().trim(), Boolean(item.checked));
        }
    });

    const merged = defaults.map(item => {
        let isChecked = false;
        if (stateMap.has(item.id)) {
            isChecked = stateMap.get(item.id);
        } else if (stateMap.has(item.name.toLowerCase().trim())) {
            isChecked = stateMap.get(item.name.toLowerCase().trim());
        }
        return Object.assign({}, item, { checked: isChecked });
    });

    return merged.concat(customItems);
}

function renderPackingChecklist(container, plan, checklistItems, onChecklistChange) {
    container.innerHTML = '';

    const section = document.createElement('div');
    section.className = 'checklist-section card';
    section.id = 'checklist-section';

    let currentItems = Array.isArray(checklistItems) ? checklistItems : generateDefaultChecklist(plan);

    // 1. Top Header Row
    const headerRow = document.createElement('div');
    headerRow.className = 'checklist-top-header';

    const titleGroup = document.createElement('div');
    const title = createTextEl('h2', '🎒 Personalized Packing Checklist', 'checklist-title');
    const notice = createTextEl('p', `Curated specifically for ${plan.destination} (${plan.durationDays} days, ${plan.preferences.travelStyle} style, ${plan.preferences.companions}).`, 'weather-disclaimer');
    titleGroup.appendChild(title);
    titleGroup.appendChild(notice);

    const progressPill = createTextEl('span', '', 'checklist-progress-pill');
    progressPill.id = 'checklist-progress-pill';

    headerRow.appendChild(titleGroup);
    headerRow.appendChild(progressPill);
    section.appendChild(headerRow);

    // 2. Progress Meter Bar
    const meterBar = document.createElement('div');
    meterBar.className = 'energy-meter-container';
    const meterFill = document.createElement('div');
    meterFill.className = 'energy-meter-fill fill-light';
    meterFill.id = 'checklist-meter-fill';
    meterBar.appendChild(meterFill);
    section.appendChild(meterBar);

    // 3. Batch Controls Row
    const controlsRow = document.createElement('div');
    controlsRow.className = 'checklist-controls';

    const markAllBtn = document.createElement('button');
    markAllBtn.type = 'button';
    markAllBtn.className = 'btn-secondary';
    markAllBtn.textContent = '✓ Mark All Complete';
    markAllBtn.addEventListener('click', () => {
        currentItems.forEach(i => { i.checked = true; });
        renderCategories();
        notifyChange();
    });

    const uncheckAllBtn = document.createElement('button');
    uncheckAllBtn.type = 'button';
    uncheckAllBtn.className = 'btn-secondary';
    uncheckAllBtn.textContent = '↺ Uncheck All';
    uncheckAllBtn.addEventListener('click', () => {
        currentItems.forEach(i => { i.checked = false; });
        renderCategories();
        notifyChange();
    });

    controlsRow.appendChild(markAllBtn);
    controlsRow.appendChild(uncheckAllBtn);
    section.appendChild(controlsRow);

    // 4. Categories Container
    const catContainer = document.createElement('div');
    catContainer.className = 'checklist-categories-container';
    catContainer.id = 'checklist-cat-container';
    section.appendChild(catContainer);

    // 5. Add Custom Item Form
    const addForm = document.createElement('form');
    addForm.className = 'checklist-add-form';
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputEl = document.getElementById('custom-item-name');
        const catSelectEl = document.getElementById('custom-item-cat');
        const text = inputEl ? inputEl.value.trim() : '';
        const cat = catSelectEl ? catSelectEl.value : 'Optional & Leisure Items';

        if (!text) return;

        const newItem = {
            id: 'custom_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 6),
            name: text,
            category: cat,
            checked: false,
            isCustom: true
        };

        currentItems.push(newItem);
        if (inputEl) inputEl.value = '';
        renderCategories();
        notifyChange();
    });

    const addInput = document.createElement('input');
    addInput.type = 'text';
    addInput.placeholder = 'Add custom item (e.g. Drone, Prescription glasses, Power strip)...';
    addInput.className = 'checklist-add-input';
    addInput.id = 'custom-item-name';

    const addCatSelect = document.createElement('select');
    addCatSelect.className = 'checklist-add-select';
    addCatSelect.id = 'custom-item-cat';

    CHECKLIST_CATEGORIES.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat.name;
        opt.textContent = `${cat.icon} ${cat.name}`;
        addCatSelect.appendChild(opt);
    });

    const addBtn = document.createElement('button');
    addBtn.type = 'submit';
    addBtn.className = 'btn-secondary';
    addBtn.textContent = '+ Add Item';

    addForm.appendChild(addInput);
    addForm.appendChild(addCatSelect);
    addForm.appendChild(addBtn);
    section.appendChild(addForm);

    function notifyChange() {
        if (typeof onChecklistChange === 'function') {
            onChecklistChange(currentItems);
        }
    }

    function updateProgress() {
        const total = currentItems.length;
        const checked = currentItems.filter(i => i.checked).length;
        const pct = total > 0 ? Math.round((checked / total) * 100) : 0;

        const pill = document.getElementById('checklist-progress-pill');
        if (pill) pill.textContent = `Packed: ${checked} / ${total} items (${pct}%)`;

        const fill = document.getElementById('checklist-meter-fill');
        if (fill) fill.style.width = `${pct}%`;
    }

    function renderCategories() {
        catContainer.innerHTML = '';

        CHECKLIST_CATEGORIES.forEach(catInfo => {
            const catItems = currentItems.filter(i => i.category === catInfo.name);
            if (catItems.length === 0) return;

            const card = document.createElement('div');
            card.className = 'checklist-category-card';

            const catTitle = createTextEl('div', `${catInfo.icon} ${catInfo.name} (${catItems.filter(i => i.checked).length}/${catItems.length})`, 'checklist-cat-title');
            card.appendChild(catTitle);

            const grid = document.createElement('div');
            grid.className = 'checklist-items-grid';

            catItems.forEach(item => {
                const row = document.createElement('div');
                row.className = 'checklist-item-row';

                const label = document.createElement('label');
                label.className = 'checklist-item-left';

                const cb = document.createElement('input');
                cb.type = 'checkbox';
                cb.checked = Boolean(item.checked);
                cb.addEventListener('change', () => {
                    item.checked = cb.checked;
                    spanText.className = 'checklist-item-text' + (item.checked ? ' item-checked' : '');
                    updateProgress();
                    catTitle.textContent = `${catInfo.icon} ${catInfo.name} (${catItems.filter(i => i.checked).length}/${catItems.length})`;
                    notifyChange();
                });

                const spanText = createTextEl('span', item.name, 'checklist-item-text' + (item.checked ? ' item-checked' : ''));

                label.appendChild(cb);
                label.appendChild(spanText);

                if (item.isCustom) {
                    label.appendChild(createTextEl('span', 'Custom', 'optional-badge'));
                }

                const delBtn = document.createElement('button');
                delBtn.type = 'button';
                delBtn.className = 'checklist-delete-btn';
                delBtn.textContent = '✕';
                delBtn.title = 'Remove item';
                delBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    currentItems = currentItems.filter(i => i.id !== item.id);
                    renderCategories();
                    notifyChange();
                });

                row.appendChild(label);
                row.appendChild(delBtn);
                grid.appendChild(row);
            });

            card.appendChild(grid);
            catContainer.appendChild(card);
        });

        updateProgress();
    }

    container.appendChild(section);
    renderCategories();
}

// ==========================================
// 10. INITIALIZATION & STAGE 3 ORCHESTRATOR
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
    const mainContainer = document.getElementById('itinerary-content');
    if (!mainContainer) return;

    // 1. Retrieve trip data from TravisoStorage or fallback
    let trip = null;
    let currentTripId = null;
    let isTripSaved = false;
    let tripCreatedAt = null;

    try {
        if (window.TravisoStorage) {
            const activeId = window.TravisoStorage.getActiveTripId();
            if (activeId) {
                const savedRecord = window.TravisoStorage.getTripById(activeId);
                if (savedRecord) {
                    trip = savedRecord;
                    currentTripId = savedRecord.id;
                    tripCreatedAt = savedRecord.createdAt;
                    isTripSaved = true;
                }
            }

            if (!trip) {
                const pending = window.TravisoStorage.getPendingTrip();
                if (pending) {
                    trip = pending;
                    if (pending.id) {
                        currentTripId = pending.id;
                        // Check if it's already in saved library
                        const checkSaved = window.TravisoStorage.getTripById(pending.id);
                        if (checkSaved) {
                            isTripSaved = true;
                            tripCreatedAt = checkSaved.createdAt;
                            if (!trip.budget && checkSaved.budget) trip.budget = checkSaved.budget;
                            if (!trip.packingChecklist && checkSaved.packingChecklist) trip.packingChecklist = checkSaved.packingChecklist;
                        }
                    }
                }
            }
        }

        // Fallback to raw localStorage
        if (!trip) {
            const rawPending = localStorage.getItem('traviso_pending_trip');
            if (rawPending) {
                trip = JSON.parse(rawPending);
                if (trip && trip.id) currentTripId = trip.id;
            } else {
                const legacyDest = localStorage.getItem('destination');
                const legacyStart = localStorage.getItem('startDate');
                const legacyEnd = localStorage.getItem('endDate');
                const legacyDur = localStorage.getItem('durationDays');

                if (legacyDest && legacyStart && legacyEnd) {
                    const dur = legacyDur ? parseInt(legacyDur, 10) : 3;
                    trip = {
                        destination: legacyDest,
                        startDate: legacyStart,
                        endDate: legacyEnd,
                        durationDays: isNaN(dur) || dur < 1 ? 3 : dur,
                        preferences: {
                            travelStyle: "Explorer",
                            companions: "Couple",
                            dailyPace: "Balanced",
                            interests: ["Culture and History", "Food and Dining"]
                        }
                    };
                }
            }
        }
    } catch (e) {
        console.warn('Failed parsing trip from storage:', e);
    }

    if (!trip || !trip.destination || !trip.startDate || !trip.endDate) {
        renderEmptyState(mainContainer);
        return;
    }

    if (!trip.durationDays || isNaN(trip.durationDays) || trip.durationDays < 1) {
        const sTime = new Date(trip.startDate).getTime();
        const eTime = new Date(trip.endDate).getTime();
        trip.durationDays = Math.max(1, Math.round((eTime - sTime) / (1000 * 60 * 60 * 24)) + 1);
    }

    // Cached weather state
    let cachedWeatherState = trip.weatherSnapshot ? { loading: false, success: true, data: trip.weatherSnapshot } : { loading: true };

    // 2. Generate personalized plan
    let currentPlan = trip.itineraryPlan || generateItineraryPlan(trip.destination, trip.durationDays, trip.startDate, trip.endDate, trip.preferences);

    // 3. Initialize Budget and Packing Checklist
    let currentBudget = trip.budget ? calculateBudget(trip.budget, currentPlan.durationDays) : getDefaultBudget(currentPlan);
    let currentChecklist = reconcileChecklist(currentPlan, trip.packingChecklist);

    // 4. Section Containers
    mainContainer.innerHTML = '';

    const overviewContainer = document.createElement('div');
    overviewContainer.id = 'overview-section';
    mainContainer.appendChild(overviewContainer);

    const drawerContainer = document.createElement('div');
    drawerContainer.id = 'drawer-container';
    mainContainer.appendChild(drawerContainer);

    const mapContainer = document.createElement('div');
    mapContainer.id = 'map-section';
    mainContainer.appendChild(mapContainer);

    const daysContainer = document.createElement('div');
    daysContainer.id = 'days-section';
    mainContainer.appendChild(daysContainer);

    const budgetContainer = document.createElement('div');
    budgetContainer.id = 'budget-wrapper';
    mainContainer.appendChild(budgetContainer);

    const checklistContainer = document.createElement('div');
    checklistContainer.id = 'checklist-wrapper';
    mainContainer.appendChild(checklistContainer);

    // Save Trip Action Handler
    function handleSaveTrip() {
        if (!window.TravisoStorage) {
            showToast('Storage module not available.', true);
            return;
        }

        const tripData = {
            id: currentTripId || undefined,
            destination: currentPlan.destination,
            startDate: currentPlan.startDate,
            endDate: currentPlan.endDate,
            durationDays: currentPlan.durationDays,
            preferences: currentPlan.preferences,
            itineraryPlan: currentPlan,
            weatherSnapshot: cachedWeatherState.success ? cachedWeatherState.data : (trip.weatherSnapshot || null),
            budget: currentBudget,
            packingChecklist: currentChecklist,
            createdAt: tripCreatedAt || new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        const res = window.TravisoStorage.saveTrip(tripData);
        if (res.success && res.trip) {
            currentTripId = res.trip.id;
            tripCreatedAt = res.trip.createdAt;
            isTripSaved = true;

            // Re-render header to update button state
            renderOverviewHeader(overviewContainer, currentPlan, cachedWeatherState, togglePreferencesDrawer, handleSaveTrip, isTripSaved);
            showToast(`Trip to ${currentPlan.destination} was saved to My Trips!`);
        } else {
            showToast(res.error || 'Failed to save trip to browser storage.', true);
        }
    }

    // Auto-persist updates if already saved
    function autoPersistIfSaved() {
        if (isTripSaved && currentTripId && window.TravisoStorage) {
            const tripData = {
                id: currentTripId,
                destination: currentPlan.destination,
                startDate: currentPlan.startDate,
                endDate: currentPlan.endDate,
                durationDays: currentPlan.durationDays,
                preferences: currentPlan.preferences,
                itineraryPlan: currentPlan,
                weatherSnapshot: cachedWeatherState.success ? cachedWeatherState.data : (trip.weatherSnapshot || null),
                budget: currentBudget,
                packingChecklist: currentChecklist,
                createdAt: tripCreatedAt || new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            window.TravisoStorage.saveTrip(tripData);
        }

        // Also update pending trip in case user navigates
        if (window.TravisoStorage) {
            window.TravisoStorage.setPendingTrip(Object.assign({}, trip, {
                id: currentTripId || undefined,
                preferences: currentPlan.preferences,
                itineraryPlan: currentPlan,
                budget: currentBudget,
                packingChecklist: currentChecklist
            }));
        }
    }

    // Drawer toggle handler
    function togglePreferencesDrawer() {
        const drawer = document.getElementById('preferences-drawer');
        if (drawer) {
            drawer.classList.toggle('open');
            if (drawer.classList.contains('open')) {
                drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }

    // In-place regeneration callback (Stage 2 & 3)
    function handleRegeneration(newPreferences) {
        trip.preferences = newPreferences;

        // Recalculate plan with scoring engine & energy balancing
        currentPlan = generateItineraryPlan(trip.destination, trip.durationDays, trip.startDate, trip.endDate, newPreferences);

        // Reconcile checklist preserving custom items and completed states
        currentChecklist = reconcileChecklist(currentPlan, currentChecklist);

        // Recalculate budget maintaining user inputs
        currentBudget = calculateBudget(currentBudget, currentPlan.durationDays);

        // Re-render all views
        renderOverviewHeader(overviewContainer, currentPlan, cachedWeatherState, togglePreferencesDrawer, handleSaveTrip, isTripSaved);
        renderPreferenceDrawer(drawerContainer, currentPlan, handleRegeneration);
        renderItineraryMap(mapContainer, currentPlan);
        renderItineraryDays(daysContainer, currentPlan);
        renderBudgetPlanner(budgetContainer, currentPlan, currentBudget, (updatedBudget) => {
            currentBudget = updatedBudget;
            autoPersistIfSaved();
        });
        renderPackingChecklist(checklistContainer, currentPlan, currentChecklist, (updatedChecklist) => {
            currentChecklist = updatedChecklist;
            autoPersistIfSaved();
        });

        autoPersistIfSaved();
        showToast('Itinerary regenerated based on your updated preferences!');
    }

    // Budget change handler
    function handleBudgetChange(updatedBudget) {
        currentBudget = updatedBudget;
        autoPersistIfSaved();
    }

    // Checklist change handler
    function handleChecklistChange(updatedChecklist) {
        currentChecklist = updatedChecklist;
        autoPersistIfSaved();
    }

    // Render Initial View
    renderOverviewHeader(overviewContainer, currentPlan, cachedWeatherState, togglePreferencesDrawer, handleSaveTrip, isTripSaved);
    renderPreferenceDrawer(drawerContainer, currentPlan, handleRegeneration);
    renderItineraryMap(mapContainer, currentPlan);
    renderItineraryDays(daysContainer, currentPlan);
    renderBudgetPlanner(budgetContainer, currentPlan, currentBudget, handleBudgetChange);
    renderPackingChecklist(checklistContainer, currentPlan, currentChecklist, handleChecklistChange);

    // 5. Fetch Weather Asynchronously if not already cached
    if (!trip.weatherSnapshot) {
        const weatherResult = await fetchCurrentWeather(currentPlan.destination);
        if (weatherResult.success) {
            cachedWeatherState = { loading: false, success: true, data: weatherResult.data };
        } else {
            cachedWeatherState = { loading: false, success: false, error: weatherResult.error };
        }
        renderOverviewHeader(overviewContainer, currentPlan, cachedWeatherState, togglePreferencesDrawer, handleSaveTrip, isTripSaved);
        autoPersistIfSaved();
    }
});
