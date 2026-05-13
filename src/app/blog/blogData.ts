export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateTime: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
  article?: BlogArticleContent;
};

export type BlogArticleContent = {
  intro: string;
  sections: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
    variant?: "default" | "dark" | "gold";
  }[];
  closing: {
    title: string;
    text: string;
  };
};

export const blogCategories = [
  "Luxury Residential Painting",
  "Exterior Painting Florida Homes",
  "Interior Painting & Finishes",
  "Cabinet Painting & Refinishing",
  "Stucco & Siding Painting",
  "Pressure Washing & Surface Preparation",
  "Wood Staining & Clear Coating",
  "High-End Painting Projects",
  "Coastal Home Painting (Anna Maria, Siesta Key)",
  "HOA & Community Painting Standards",
  "Painting Tips for Florida Homes",
  "Before & After Painting Projects",
].map((label) => ({
  label,
  slug: getCategorySlug(label),
}));

export const blogPosts = [
  {
    slug: "exterior-painting-lakewood-ranch-specialized-approach",
    title:
      "Why Exterior Painting in Lakewood Ranch, FL Requires a Specialized Approach",
    excerpt:
      "Lakewood Ranch homes need more than a fresh coat of paint. Learn how climate, HOA standards, surface preparation, and premium coatings affect exterior painting results.",
    date: "May 4, 2026",
    dateTime: "2026-05-04",
    readTime: "8 min read",
    category: "Exterior Painting Florida Homes",
    image: "/LakewoodRanch/house-exterior-painting-lakewood-ranch.jpg",
    imageAlt: "Exterior painting project for a Lakewood Ranch Florida home",
  },
  {
    slug: "florida-painting-prep-guide",
    title:
      "Florida Painting Prep: How to Make Interior, Exterior, and Cabinet Paint Last",
    excerpt:
      "A practical guide for homeowners who want smoother finishes, better adhesion, cleaner lines, and paint systems built for Florida heat, humidity, and daily wear.",
    date: "May 4, 2026",
    dateTime: "2026-05-04",
    readTime: "6 min read",
    category: "Painting Tips for Florida Homes",
    image: "/services/professional-interior-painting.jpg",
    imageAlt:
      "Professional painting preparation for a residential project in Florida",
  },
  {
    slug: "luxury-residential-painting-details-that-elevate-a-home",
    title: "Luxury Residential Painting Details That Make a Home Feel Finished",
    excerpt:
      "A practical look at the preparation, color control, trim lines, sheen choices, and project standards that separate luxury residential painting from basic repainting.",
    date: "May 12, 2026",
    dateTime: "2026-05-12",
    readTime: "6 min read",
    category: "Luxury Residential Painting",
    image: "/home/luxury-exterior-painting-anna-maria.jpg",
    imageAlt: "Luxury residential exterior painting project in Florida",
    article: {
      intro:
        "Luxury residential painting is not only about using premium paint. The final result depends on surface preparation, color balance, protection, straight lines, consistent sheen, and a crew that treats the home like a finished space from the first day.",
      sections: [
        {
          title: "Luxury starts with preparation",
          paragraphs: [
            "A high-end finish shows every shortcut. Walls need patching and sanding, trim needs clean caulk lines, cabinets need bonding prep, and exterior surfaces need washing before coatings are applied.",
            "When prep is handled correctly, the paint does more than change color. It creates a smoother, cleaner surface that looks intentional in natural light and artificial light.",
          ],
        },
        {
          title: "The details homeowners notice every day",
          paragraphs: [
            "Edges around trim, doors, ceilings, baseboards, windows, and cabinets are the details people notice after the project is complete. Luxury painting keeps those transitions crisp and consistent.",
          ],
          bullets: [
            "Clean cut lines where wall color meets trim or ceiling.",
            "Consistent sheen across visible wall planes.",
            "Protected floors, fixtures, landscaping, and furniture.",
            "A final walkthrough before the project is considered complete.",
          ],
          variant: "gold",
        },
        {
          title: "Color and sheen should support the architecture",
          paragraphs: [
            "The best color choice is the one that works with the home, not against it. Light direction, flooring, cabinetry, stone, roof color, and exterior surroundings all affect how paint reads after it dries.",
            "Sheen matters too. A finish that is too shiny can highlight imperfections, while a finish that is too flat may not hold up in high-use areas.",
          ],
        },
        {
          title: "Why project management matters",
          paragraphs: [
            "A polished painting project depends on communication. Homeowners should know what areas are being painted, what prep is included, how the job site will be protected, and how the final inspection will be handled.",
          ],
          variant: "dark",
        },
      ],
      closing: {
        title: "The luxury result is built before the final coat",
        text: "When preparation, product selection, protection, and workmanship line up, a paint project feels cleaner, more durable, and more valuable long after the crew leaves.",
      },
    },
  },
  {
    slug: "interior-painting-finishes-guide-for-florida-homes",
    title: "Interior Painting and Finish Choices for Florida Homes",
    excerpt:
      "How to choose interior paint finishes for walls, ceilings, trim, doors, and high-use spaces while keeping rooms clean, durable, and comfortable.",
    date: "May 12, 2026",
    dateTime: "2026-05-12",
    readTime: "5 min read",
    category: "Interior Painting & Finishes",
    image: "/services/living-room-painting-manatee-county.jpg",
    imageAlt: "Interior living room painting project in Manatee County",
    article: {
      intro:
        "Interior painting should improve how a home feels every day. The right finish can make rooms brighter, cleaner, easier to maintain, and more connected from one space to the next.",
      sections: [
        {
          title: "Start with how the room is used",
          paragraphs: [
            "A guest bedroom, kitchen, bathroom, living room, and hallway do not need the same finish. High-touch areas usually need better washability, while low-traffic spaces can focus more on softness and light control.",
          ],
        },
        {
          title: "Common finish decisions",
          paragraphs: [
            "Most homeowners compare flat, matte, eggshell, satin, and semi-gloss finishes. Each option affects durability, reflection, and how much wall texture is visible.",
          ],
          bullets: [
            "Flat or matte can soften walls and reduce glare.",
            "Eggshell is common for living areas and bedrooms.",
            "Satin works well where more cleaning may be needed.",
            "Semi-gloss is often used on trim, doors, and detail work.",
          ],
          variant: "gold",
        },
        {
          title: "Prep controls the final look",
          paragraphs: [
            "Even the best paint will not hide poor drywall patches, rough sanding, dust, or uneven texture. Interior prep should include protection, repairs, sanding, spot priming, and careful cleanup before finish coats.",
          ],
        },
        {
          title: "A smooth interior project should feel organized",
          paragraphs: [
            "Because interior painting happens inside daily living spaces, the process matters. Furniture protection, room sequencing, clean masking, and clear communication help reduce disruption.",
          ],
          variant: "dark",
        },
      ],
      closing: {
        title: "Interior painting is part design, part discipline",
        text: "A better interior repaint comes from pairing the right color and sheen with careful prep, clean protection, and consistent application.",
      },
    },
  },
  {
    slug: "cabinet-painting-refinishing-before-you-start",
    title: "Cabinet Painting and Refinishing: What Homeowners Should Know First",
    excerpt:
      "Cabinet painting can transform a kitchen, but lasting results depend on degreasing, sanding, bonding primer, sprayed finishes, and proper cure time.",
    date: "May 12, 2026",
    dateTime: "2026-05-12",
    readTime: "6 min read",
    category: "Cabinet Painting & Refinishing",
    image: "/services/kitchen-cabinet-painting-manatee-county-fl.jpg",
    imageAlt: "Kitchen cabinet painting and refinishing project in Florida",
    article: {
      intro:
        "Cabinet painting is one of the highest-impact upgrades in a kitchen, but it is also one of the least forgiving. Cabinets are touched every day, so the coating system has to bond, cure, and hold up.",
      sections: [
        {
          title: "Cabinets are not painted like walls",
          paragraphs: [
            "Kitchen cabinets collect oils, cleaners, cooking residue, and daily wear. A professional cabinet refinishing process should start with cleaning and degreasing before sanding or deglossing.",
          ],
        },
        {
          title: "A stronger cabinet system includes",
          paragraphs: [
            "The goal is a finish that looks clean and resists early chipping. That takes a step-by-step process rather than a quick color change.",
          ],
          bullets: [
            "Door and drawer removal with clear labeling.",
            "Degreasing before sanding or bonding primer.",
            "Sprayed finish coats for a smoother result.",
            "Proper drying and cure time before heavy use.",
          ],
          variant: "gold",
        },
        {
          title: "Color changes affect the whole kitchen",
          paragraphs: [
            "Cabinet color should work with counters, backsplash, flooring, wall color, lighting, and hardware. White, warm greige, deep green, charcoal, and two-tone palettes can all work when the surrounding finishes support them.",
          ],
        },
        {
          title: "The finish has to survive real life",
          paragraphs: [
            "A cabinet project should be planned around durability. Doors, drawer fronts, edges, and handles need special attention because those are the areas that fail first when prep is rushed.",
          ],
          variant: "dark",
        },
      ],
      closing: {
        title: "Cabinet refinishing is a system",
        text: "The best cabinet results come from careful prep, the right primer, controlled application, and enough time for the coating to cure properly.",
      },
    },
  },
  {
    slug: "stucco-siding-painting-florida-homeowners-guide",
    title: "Stucco and Siding Painting: A Florida Homeowner Guide",
    excerpt:
      "Stucco and siding need different prep, repair, primer, and coating decisions. Learn what matters before repainting a Florida exterior.",
    date: "May 12, 2026",
    dateTime: "2026-05-12",
    readTime: "6 min read",
    category: "Stucco & Siding Painting",
    image: "/palmeto/stucco-painting-palmetto.jpg",
    imageAlt: "Stucco exterior painting project in Palmetto Florida",
    article: {
      intro:
        "Stucco and siding both protect the home, but they age differently. A lasting exterior repaint starts by understanding the surface, repairing problem areas, and choosing coatings that match Florida exposure.",
      sections: [
        {
          title: "Stucco needs crack control and surface evaluation",
          paragraphs: [
            "Hairline cracking, chalky paint, moisture staining, and previous coating failure should be reviewed before painting. Small problems can become visible again if they are simply covered.",
          ],
        },
        {
          title: "Siding requires adhesion-focused prep",
          paragraphs: [
            "Siding may need washing, scraping, sanding, caulking, and primer depending on material and condition. The wrong prep can cause peeling around edges, laps, and trim transitions.",
          ],
          bullets: [
            "Wash mildew, dirt, and chalky residue.",
            "Repair cracks, gaps, and failed caulk joints.",
            "Prime bare or problem areas when needed.",
            "Use coatings selected for sun, humidity, and rain cycles.",
          ],
          variant: "gold",
        },
        {
          title: "Moisture is the hidden issue",
          paragraphs: [
            "Exterior paint can only perform when the surface is ready. Trapped moisture, failed sealant, and poor drainage can shorten the life of any coating system.",
          ],
        },
        {
          title: "Florida exteriors need durable planning",
          paragraphs: [
            "UV exposure, afternoon storms, and humidity make exterior painting a system decision. Prep, primer, caulk, and finish coats have to work together.",
          ],
          variant: "dark",
        },
      ],
      closing: {
        title: "The surface decides the plan",
        text: "A strong exterior repaint starts by respecting the condition and material of the home before choosing the final color.",
      },
    },
  },
  {
    slug: "pressure-washing-surface-preparation-before-exterior-paint",
    title: "Pressure Washing and Surface Preparation Before Exterior Paint",
    excerpt:
      "Why washing, cleaning, sanding, caulking, and spot priming are essential before painting Florida exteriors.",
    date: "May 12, 2026",
    dateTime: "2026-05-12",
    readTime: "5 min read",
    category: "Pressure Washing & Surface Preparation",
    image: "/sarasota/preparation-sarasota.jpeg",
    imageAlt: "Surface preparation before painting in Sarasota Florida",
    article: {
      intro:
        "Pressure washing is not just a cleanup step. Before exterior paint, it helps remove the dirt, mildew, chalk, and loose residue that can interfere with adhesion.",
      sections: [
        {
          title: "Paint needs a clean surface to bond",
          paragraphs: [
            "Florida homes collect pollen, salt air residue, mildew, dust, and chalky old paint. If those materials stay on the surface, the new coating may bond to contamination instead of the home.",
          ],
        },
        {
          title: "Prep does not stop at washing",
          paragraphs: [
            "After cleaning, the surface still needs inspection. Cracks, gaps, peeling areas, bare spots, and failed caulk should be handled before finish coats.",
          ],
          bullets: [
            "Wash exterior surfaces and allow proper drying.",
            "Scrape or sand loose and failing paint.",
            "Seal cracks and joints with appropriate caulk.",
            "Spot prime bare or repaired areas as needed.",
          ],
          variant: "gold",
        },
        {
          title: "The goal is adhesion and consistency",
          paragraphs: [
            "Good surface preparation helps paint lay down more evenly and last longer. It also helps the final color look more consistent across stucco, trim, fascia, doors, and siding.",
          ],
        },
        {
          title: "Rushed prep is expensive later",
          paragraphs: [
            "Skipping prep can lead to peeling, flashing, uneven texture, and early maintenance. The time saved at the beginning is usually paid back through touchups or repainting.",
          ],
          variant: "dark",
        },
      ],
      closing: {
        title: "Better prep creates better paint performance",
        text: "A durable exterior paint job starts with cleaning and surface correction before the first finish coat is opened.",
      },
    },
  },
  {
    slug: "wood-staining-clear-coating-florida-maintenance",
    title: "Wood Staining and Clear Coating in Florida: What to Consider",
    excerpt:
      "Wood stain and clear coating need careful prep, product selection, and maintenance planning in Florida sun and humidity.",
    date: "May 12, 2026",
    dateTime: "2026-05-12",
    readTime: "5 min read",
    category: "Wood Staining & Clear Coating",
    image: "/parrish/Lluxury-interior-painting.jpg",
    imageAlt: "Interior wood ceiling and finish detail in a Florida home",
    article: {
      intro:
        "Wood brings warmth to a home, but Florida sun, humidity, and daily use can be hard on stained and clear-coated surfaces. A good result starts with realistic expectations and careful prep.",
      sections: [
        {
          title: "Stain highlights the surface underneath",
          paragraphs: [
            "Paint can hide some visual variation, but stain usually reveals grain, patching, sanding marks, and previous finish differences. That makes prep especially important.",
          ],
        },
        {
          title: "Clear coating is protection, not just shine",
          paragraphs: [
            "Clear finishes help protect wood while keeping the natural look visible. The right product depends on interior or exterior use, exposure, desired sheen, and maintenance expectations.",
          ],
          bullets: [
            "Sand consistently with the final appearance in mind.",
            "Test color and sheen before committing to a full area.",
            "Match product choice to moisture and UV exposure.",
            "Plan maintenance before the finish starts failing.",
          ],
          variant: "gold",
        },
        {
          title: "Exterior wood needs extra attention",
          paragraphs: [
            "Doors, beams, railings, and exterior wood details can break down quickly when exposed to sun and rain. Those areas need routine inspection and a finish plan that accepts Florida maintenance realities.",
          ],
        },
        {
          title: "Interior wood should support the design",
          paragraphs: [
            "Inside the home, stained wood should coordinate with flooring, cabinetry, wall color, and lighting. The finish should feel intentional rather than disconnected from the rest of the space.",
          ],
          variant: "dark",
        },
      ],
      closing: {
        title: "Wood finishes reward patience",
        text: "The best stain and clear coat results come from controlled prep, sample testing, and choosing a finish that fits the surface and exposure.",
      },
    },
  },
  {
    slug: "high-end-painting-project-planning-guide",
    title: "How to Plan a High-End Painting Project Without Surprises",
    excerpt:
      "High-end painting projects need clear scope, surface review, protection plans, color decisions, product selection, and final walkthrough standards.",
    date: "May 12, 2026",
    dateTime: "2026-05-12",
    readTime: "6 min read",
    category: "High-End Painting Projects",
    image: "/bradenton/luxury-exterior-painting-bradenton-02.jpg.jpg",
    imageAlt: "High-end exterior painting project in Bradenton Florida",
    article: {
      intro:
        "High-end painting projects run smoother when decisions are made before the crew arrives. Scope, colors, finishes, access, protection, and expectations should all be clear from the start.",
      sections: [
        {
          title: "Start with a complete scope",
          paragraphs: [
            "A high-end estimate should identify the areas being painted, the preparation included, the products being used, and any repairs or exclusions that affect the final result.",
          ],
        },
        {
          title: "Decisions to make early",
          paragraphs: [
            "The more decisions that are handled before production starts, the cleaner the project feels. This is especially important for occupied homes and detailed properties.",
          ],
          bullets: [
            "Final colors and sheen levels.",
            "Which rooms, elevations, trim, doors, or cabinets are included.",
            "How furniture, floors, landscaping, and fixtures will be protected.",
            "Daily access, parking, pets, and homeowner communication.",
          ],
          variant: "gold",
        },
        {
          title: "Protection is part of the finish",
          paragraphs: [
            "Luxury work should not leave damage behind. Floors, counters, landscaping, hardware, fixtures, windows, and finished surfaces should be protected before painting begins.",
          ],
        },
        {
          title: "The walkthrough should be planned",
          paragraphs: [
            "A professional final walkthrough gives the homeowner and crew a clear opportunity to review coverage, edges, cleanup, and small touchups before completion.",
          ],
          variant: "dark",
        },
      ],
      closing: {
        title: "A premium result comes from a controlled process",
        text: "When project planning is clear, the painting experience feels cleaner, calmer, and more professional from estimate to final inspection.",
      },
    },
  },
  {
    slug: "coastal-home-painting-anna-maria-siesta-key-guide",
    title: "Coastal Home Painting for Anna Maria and Siesta Key Properties",
    excerpt:
      "Coastal homes need paint planning around salt air, UV exposure, moisture, color approvals, exterior materials, and long-term maintenance.",
    date: "May 12, 2026",
    dateTime: "2026-05-12",
    readTime: "6 min read",
    category: "Coastal Home Painting (Anna Maria, Siesta Key)",
    image: "/siesta/siesta-exterior-home.jpeg",
    imageAlt: "Coastal exterior painting project in Siesta Key Florida",
    article: {
      intro:
        "Coastal homes in places like Anna Maria and Siesta Key need paint systems that handle sun, humidity, salt air, wind-driven rain, and the visual expectations of premium coastal neighborhoods.",
      sections: [
        {
          title: "Coastal exposure is different",
          paragraphs: [
            "Salt air, strong UV, and moisture can accelerate fading, chalking, mildew, and coating breakdown. Exterior painting near the coast should be planned around exposure, not just color.",
          ],
        },
        {
          title: "Important coastal painting priorities",
          paragraphs: [
            "The right plan depends on the surface condition, previous coatings, architectural details, and community requirements.",
          ],
          bullets: [
            "Wash and remove salt, mildew, and chalky residue.",
            "Repair failed caulk and surface cracks before painting.",
            "Choose colors and products that fit coastal exposure.",
            "Review community or HOA standards before final color approval.",
          ],
          variant: "gold",
        },
        {
          title: "Color should fit the setting",
          paragraphs: [
            "Coastal color palettes often work best when they feel bright, clean, and connected to the home's roof, stone, landscaping, and neighborhood character.",
          ],
        },
        {
          title: "Maintenance should be realistic",
          paragraphs: [
            "Coastal properties usually need more frequent inspection than inland homes. Washing, sealant checks, and touchup planning can help preserve the finish longer.",
          ],
          variant: "dark",
        },
      ],
      closing: {
        title: "Coastal painting is about protection and presentation",
        text: "A strong coastal paint project should improve curb appeal while helping the home handle the exposure that comes with living near the water.",
      },
    },
  },
  {
    slug: "hoa-community-painting-standards-homeowner-guide",
    title: "HOA and Community Painting Standards: What Homeowners Should Review",
    excerpt:
      "Before repainting in an HOA community, homeowners should review colors, sheen, approvals, timelines, repair standards, and finish expectations.",
    date: "May 12, 2026",
    dateTime: "2026-05-12",
    readTime: "5 min read",
    category: "HOA & Community Painting Standards",
    image: "/LakewoodRanch/house-exterior-painting-lakewood-ranch.jpg",
    imageAlt: "HOA community exterior painting project in Lakewood Ranch",
    article: {
      intro:
        "HOA painting standards protect the look of the community, but they can also add steps before a homeowner repaints. A smoother project starts by reviewing the rules early.",
      sections: [
        {
          title: "Approvals should happen before scheduling",
          paragraphs: [
            "Many communities require approved color palettes, submittal forms, board review, or specific paint placement rules for body, trim, doors, shutters, and accents.",
          ],
        },
        {
          title: "Common HOA painting requirements",
          paragraphs: [
            "Every community is different, but most standards are designed to keep homes consistent and maintained.",
          ],
          bullets: [
            "Approved body, trim, accent, and front door colors.",
            "Rules for sheen or finish appearance.",
            "Timeline expectations for faded or failing paint.",
            "Requirements for clean lines, repaired surfaces, and completed work.",
          ],
          variant: "gold",
        },
        {
          title: "The estimate should match the approved scope",
          paragraphs: [
            "Once colors are approved, the painting scope should match what the homeowner submitted. Changes during production can create issues if they do not match the community approval.",
          ],
        },
        {
          title: "Quality matters in visible communities",
          paragraphs: [
            "In HOA neighborhoods, exterior paint is part of the shared street view. Clean prep, consistent application, and sharp details help the finished home meet both homeowner and community expectations.",
          ],
          variant: "dark",
        },
      ],
      closing: {
        title: "HOA painting is easier with early planning",
        text: "Before repainting, confirm the approval process, color rules, and scope so the project can move forward without unnecessary delays.",
      },
    },
  },
  {
    slug: "before-after-painting-projects-what-to-look-for",
    title: "Before and After Painting Projects: What to Look For",
    excerpt:
      "Before-and-after painting photos should show more than color change. Learn how to evaluate prep, coverage, trim lines, sheen, cleanup, and finish quality.",
    date: "May 12, 2026",
    dateTime: "2026-05-12",
    readTime: "5 min read",
    category: "Before & After Painting Projects",
    image: "/services/house-exterior-painting-manatee-county.jpg",
    imageAlt: "Before and after style exterior painting project in Manatee County",
    article: {
      intro:
        "Before-and-after photos are useful, but the best projects show more than a dramatic color change. They reveal preparation, coverage, detail work, and how well the finish supports the home.",
      sections: [
        {
          title: "Look beyond the new color",
          paragraphs: [
            "A strong after photo should show clean transitions, even coverage, repaired problem areas, and a finish that fits the architecture. Color alone does not prove quality.",
          ],
        },
        {
          title: "Details that matter in project photos",
          paragraphs: [
            "When reviewing completed work, look for signs that the project was planned and executed carefully.",
          ],
          bullets: [
            "Straight trim and ceiling lines.",
            "Consistent sheen across large surfaces.",
            "No visible paint on hardware, fixtures, or floors.",
            "Exterior cracks, gaps, and failed caulk addressed before paint.",
          ],
          variant: "gold",
        },
        {
          title: "Good prep may be hidden, but results show it",
          paragraphs: [
            "Sanding, caulking, washing, priming, and protection may not be obvious in a finished photo, but they influence how smooth, clean, and durable the result looks.",
          ],
        },
        {
          title: "The best after photos still look good up close",
          paragraphs: [
            "Wide photos show impact. Close photos show workmanship. Homeowners should care about both because daily living happens close to walls, trim, doors, cabinets, and exterior entries.",
          ],
          variant: "dark",
        },
      ],
      closing: {
        title: "A good transformation is more than dramatic",
        text: "The best painting projects improve the home visually while also showing clean prep, careful protection, and detail-focused execution.",
      },
    },
  },
] satisfies BlogPost[];

export const featuredBlogPost = blogPosts[0]!;

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getCategorySlug(category: string) {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getBlogCategory(slug: string) {
  return blogCategories.find((category) => category.slug === slug);
}

export function getBlogPostsByCategory(categorySlug: string) {
  return blogPosts.filter(
    (post) => getCategorySlug(post.category) === categorySlug,
  );
}

export function getPopulatedBlogCategories() {
  return blogCategories.filter(
    (category) => getBlogPostsByCategory(category.slug).length > 0,
  );
}
