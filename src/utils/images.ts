// Placeholder images for IIT JEE coaching website
// Using Unsplash API for educational/student images

export const IMAGES = {
  // Hero/Banner Images
  hero: {
    main: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=600&fit=crop',
    students: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop',
    classroom: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&h=600&fit=crop',
    success: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop',
    library: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=600&fit=crop'
  },
  
  // Program Images
  programs: {
    classroom: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop',
    online: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=600&fit=crop',
    integrated: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
    crash: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop'
  },
  
  // Faculty Images (diverse team)
  faculty: {
    male1: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    female1: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    male2: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop',
    female2: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    male3: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    female3: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
  },
  
  // Student Success Images
  students: {
    studying: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    celebrating: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
    group: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&fit=crop',
    discussion: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop'
  },
  
  // Facility Images
  facilities: {
    classroom: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
    library: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop',
    lab: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
    building: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop'
  },
  
  // Icons and Illustrations
  icons: {
    books: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=400&fit=crop',
    certificates: 'https://images.unsplash.com/photo-1554224311-beee4ece8db7?w=400&h=400&fit=crop',
    trophy: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop'
  },
  
  // Placeholder for missing images
  placeholder: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop'
};

// Helper function to get image
export const getImage = (category: string, name: string): string => {
  return (IMAGES as any)[category]?.[name] || IMAGES.placeholder;
};

export default IMAGES;

