/*
  # Create Content Management Tables

  ## Summary
  Creates tables for managing dynamic website content including blog posts, 
  customer testimonials, and frequently asked questions.

  ## New Tables
  
  ### `blog_posts`
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Blog post title
  - `slug` (text, unique) - URL-friendly slug
  - `excerpt` (text) - Short description
  - `content` (text) - Full blog content
  - `cover_image` (text) - Cover image URL
  - `read_time` (integer) - Estimated read time in minutes
  - `published` (boolean) - Publication status
  - `published_at` (timestamptz) - Publication date
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp
  
  ### `testimonials`
  - `id` (uuid, primary key) - Unique identifier
  - `customer_name` (text) - Customer name
  - `quote` (text) - Testimonial text
  - `rating` (integer) - Star rating (1-5)
  - `car_model` (text) - Customer's car model
  - `city` (text) - Customer's city
  - `featured` (boolean) - Whether to show on homepage
  - `created_at` (timestamptz) - Creation timestamp
  
  ### `faqs`
  - `id` (uuid, primary key) - Unique identifier
  - `question` (text) - FAQ question
  - `answer` (text) - FAQ answer
  - `category` (text) - Category (pricing, service, payments, etc.)
  - `display_order` (integer) - Sort order
  - `active` (boolean) - Whether to display
  - `created_at` (timestamptz) - Creation timestamp

  ## Security
  - Enable RLS on all tables
  - Add policies for public read access
  - Restrict write access (admin only - to be implemented)
*/

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  cover_image text,
  read_time integer DEFAULT 5,
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  quote text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  car_model text NOT NULL,
  city text NOT NULL,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view testimonials"
  ON testimonials
  FOR SELECT
  USING (true);

-- Create faqs table
CREATE TABLE IF NOT EXISTS faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  answer text NOT NULL,
  category text DEFAULT 'general',
  display_order integer DEFAULT 0,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active FAQs"
  ON faqs
  FOR SELECT
  USING (active = true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(featured);
CREATE INDEX IF NOT EXISTS idx_faqs_display_order ON faqs(display_order);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, cover_image, read_time, published, published_at)
VALUES 
  (
    '5 Signs Your Car Needs Immediate Service',
    '5-signs-car-needs-service',
    'Learn to identify critical warning signs that indicate your vehicle requires immediate attention from professionals.',
    'Your car communicates with you through various warning signs. Ignoring these signals can lead to costly repairs down the line. Here are five critical signs that your vehicle needs immediate professional attention...',
    'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg',
    6,
    true,
    now()
  ),
  (
    'Understanding OEM vs Aftermarket Parts',
    'oem-vs-aftermarket-parts',
    'A comprehensive guide to help you make informed decisions about replacement parts for your vehicle.',
    'When it comes to vehicle repairs, choosing between OEM and aftermarket parts can be confusing. This guide will help you understand the differences and make the right choice for your vehicle...',
    'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg',
    8,
    true,
    now() - interval '3 days'
  ),
  (
    'How to Extend Your Engine Life',
    'extend-engine-life',
    'Simple maintenance tips and best practices to keep your engine running smoothly for years to come.',
    'Your engine is the heart of your vehicle. With proper care and maintenance, you can significantly extend its lifespan and avoid expensive repairs. Here are proven strategies...',
    'https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg',
    5,
    true,
    now() - interval '7 days'
  );

-- Insert sample testimonials
INSERT INTO testimonials (customer_name, quote, rating, car_model, city, featured)
VALUES 
  (
    'Rajesh Kumar',
    'Exceptional service! They diagnosed my engine issue within 2 hours and provided a transparent estimate via their system. The Stripe payment was seamless.',
    5,
    'Honda City',
    'Bangalore',
    true
  ),
  (
    'Priya Sharma',
    'Best car service experience ever. Live updates kept me informed, and they used genuine OEM parts. My AC is running perfectly now.',
    5,
    'Maruti Swift',
    'Mumbai',
    true
  ),
  (
    'Amit Patel',
    'Quick turnaround and fair pricing. I appreciated the detailed breakdown of all costs before work began. Highly recommend!',
    5,
    'Hyundai Creta',
    'Pune',
    true
  ),
  (
    'Sneha Reddy',
    'Professional team and modern facilities. They fixed my brake issue same day and sent me reminders for next service. Very impressed!',
    5,
    'Toyota Fortuner',
    'Hyderabad',
    true
  ),
  (
    'Vikram Singh',
    'Transparent pricing and quality work. The online payment through Stripe was very convenient. Will definitely return for future services.',
    4,
    'Mahindra XUV500',
    'Delhi',
    true
  );

-- Insert sample FAQs
INSERT INTO faqs (question, answer, category, display_order, active)
VALUES 
  (
    'How long does a typical diagnostic take?',
    'Most diagnostics are completed within 2-4 hours. For complex issues, we may need up to 24 hours. You''ll receive live updates throughout the process.',
    'service',
    1,
    true
  ),
  (
    'Do you use OEM or aftermarket parts?',
    'We primarily use genuine OEM parts to ensure quality and longevity. Aftermarket options are available upon request and will be clearly indicated in your estimate.',
    'parts',
    2,
    true
  ),
  (
    'How does the payment process work?',
    'After diagnosis, you''ll receive a detailed estimate via our system. You can review and approve it, then pay securely using UPI or Stripe. Work begins only after your approval.',
    'payments',
    3,
    true
  ),
  (
    'What is your warranty policy?',
    'All repairs come with a 6-month or 10,000 km warranty (whichever comes first). OEM parts carry manufacturer warranties. Full details are provided with your service receipt.',
    'warranty',
    4,
    true
  ),
  (
    'Can I get same-day service?',
    'Yes! For most general services and repairs, we offer same-day completion. Book your slot in the morning, and your car will typically be ready by evening.',
    'service',
    5,
    true
  ),
  (
    'What payment methods do you accept?',
    'We accept UPI, credit/debit cards via Stripe, and cash. Online payment is encouraged for contactless transactions and instant receipts.',
    'payments',
    6,
    true
  ),
  (
    'Do you provide pickup and drop services?',
    'Yes, we offer complimentary pickup and drop within a 5km radius for services above ₹5,000. Additional charges apply for locations beyond this range.',
    'service',
    7,
    true
  ),
  (
    'What if I''m not satisfied with the service?',
    'Customer satisfaction is our priority. If you''re not satisfied, contact us within 7 days. We''ll re-inspect and resolve any issues at no additional cost.',
    'warranty',
    8,
    true
  ),
  (
    'How often should I service my car?',
    'We recommend servicing every 6 months or 10,000 km, whichever comes first. Our system sends automated reminders based on your last service date.',
    'service',
    9,
    true
  ),
  (
    'Are your technicians certified?',
    'Yes, all our technicians are certified and undergo regular training. They have extensive experience with all major car brands and models.',
    'general',
    10,
    true
  );
