-- Seed data for SNR Automation platform

-- Insert demo tenant
INSERT INTO tenants (id, name, slug, theme, settings, subscription_tier) VALUES 
(
    '550e8400-e29b-41d4-a716-446655440000',
    'Demo Store',
    'demo-store',
    'modern',
    '{"currency": "USD", "timezone": "America/New_York", "tax_rate": 0.08}',
    'premium'
);

-- Insert super admin user
INSERT INTO users (id, email, password_hash, name, role, email_verified) VALUES 
(
    '550e8400-e29b-41d4-a716-446655440001',
    'admin@snrautomation.com',
    '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/hL.hl.vHW', -- password: admin123
    'SNR Admin',
    'super_admin',
    true
);

-- Insert demo store owner
INSERT INTO users (id, email, password_hash, name, role, email_verified) VALUES 
(
    '550e8400-e29b-41d4-a716-446655440002',
    'owner@demo-store.com',
    '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/hL.hl.vHW', -- password: owner123
    'Demo Store Owner',
    'store_owner',
    true
);

-- Link store owner to tenant
INSERT INTO tenant_users (tenant_id, user_id, role, permissions) VALUES 
(
    '550e8400-e29b-41d4-a716-446655440000',
    '550e8400-e29b-41d4-a716-446655440002',
    'store_owner',
    '{"manage_products": true, "manage_orders": true, "manage_customers": true, "view_analytics": true}'
);

-- Insert demo categories
INSERT INTO categories (id, tenant_id, name, slug, description, sort_order) VALUES 
(
    '550e8400-e29b-41d4-a716-446655440010',
    '550e8400-e29b-41d4-a716-446655440000',
    'Electronics',
    'electronics',
    'Latest electronic gadgets and devices',
    1
),
(
    '550e8400-e29b-41d4-a716-446655440011',
    '550e8400-e29b-41d4-a716-446655440000',
    'Clothing',
    'clothing',
    'Fashion and apparel for all occasions',
    2
),
(
    '550e8400-e29b-41d4-a716-446655440012',
    '550e8400-e29b-41d4-a716-446655440000',
    'Home & Garden',
    'home-garden',
    'Everything for your home and garden',
    3
);

-- Insert demo products
INSERT INTO products (id, tenant_id, name, slug, description, short_description, sku, price, compare_price, inventory_quantity, images, is_featured) VALUES 
(
    '550e8400-e29b-41d4-a716-446655440020',
    '550e8400-e29b-41d4-a716-446655440000',
    'Wireless Bluetooth Headphones',
    'wireless-bluetooth-headphones',
    'Premium quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
    'Premium wireless headphones with noise cancellation',
    'WBH-001',
    199.99,
    249.99,
    50,
    '["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500"]',
    true
),
(
    '550e8400-e29b-41d4-a716-446655440021',
    '550e8400-e29b-41d4-a716-446655440000',
    'Organic Cotton T-Shirt',
    'organic-cotton-t-shirt',
    'Comfortable and sustainable organic cotton t-shirt. Available in multiple colors and sizes.',
    'Sustainable organic cotton t-shirt',
    'OCT-001',
    29.99,
    39.99,
    100,
    '["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=500"]',
    true
),
(
    '550e8400-e29b-41d4-a716-446655440022',
    '550e8400-e29b-41d4-a716-446655440000',
    'Smart Plant Pot',
    'smart-plant-pot',
    'IoT-enabled plant pot that monitors soil moisture, light levels, and sends notifications to your phone.',
    'Smart IoT plant pot with monitoring',
    'SPP-001',
    79.99,
    99.99,
    25,
    '["https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500", "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500"]',
    false
);

-- Link products to categories
INSERT INTO product_categories (product_id, category_id) VALUES 
('550e8400-e29b-41d4-a716-446655440020', '550e8400-e29b-41d4-a716-446655440010'),
('550e8400-e29b-41d4-a716-446655440021', '550e8400-e29b-41d4-a716-446655440011'),
('550e8400-e29b-41d4-a716-446655440022', '550e8400-e29b-41d4-a716-446655440012');

-- Insert product variants for t-shirt
INSERT INTO product_variants (id, product_id, name, sku, price, options, inventory_quantity) VALUES 
(
    '550e8400-e29b-41d4-a716-446655440030',
    '550e8400-e29b-41d4-a716-446655440021',
    'Black - Small',
    'OCT-001-BLK-S',
    29.99,
    '{"color": "Black", "size": "Small"}',
    25
),
(
    '550e8400-e29b-41d4-a716-446655440031',
    '550e8400-e29b-41d4-a716-446655440021',
    'Black - Medium',
    'OCT-001-BLK-M',
    29.99,
    '{"color": "Black", "size": "Medium"}',
    30
),
(
    '550e8400-e29b-41d4-a716-446655440032',
    '550e8400-e29b-41d4-a716-446655440021',
    'White - Small',
    'OCT-001-WHT-S',
    29.99,
    '{"color": "White", "size": "Small"}',
    20
),
(
    '550e8400-e29b-41d4-a716-446655440033',
    '550e8400-e29b-41d4-a716-446655440021',
    'White - Medium',
    'OCT-001-WHT-M',
    29.99,
    '{"color": "White", "size": "Medium"}',
    25
);

-- Insert demo customer
INSERT INTO customers (id, tenant_id, email, first_name, last_name, phone, accepts_marketing) VALUES 
(
    '550e8400-e29b-41d4-a716-446655440040',
    '550e8400-e29b-41d4-a716-446655440000',
    'customer@example.com',
    'John',
    'Doe',
    '+1-555-0123',
    true
);

-- Insert customer address
INSERT INTO customer_addresses (customer_id, type, first_name, last_name, address_line_1, city, state, postal_code, country, is_default) VALUES 
(
    '550e8400-e29b-41d4-a716-446655440040',
    'shipping',
    'John',
    'Doe',
    '123 Main Street',
    'New York',
    'NY',
    '10001',
    'US',
    true
);

-- Insert demo order
INSERT INTO orders (id, tenant_id, customer_id, order_number, status, payment_status, subtotal, tax_amount, shipping_amount, total_amount, shipping_address, billing_address) VALUES 
(
    '550e8400-e29b-41d4-a716-446655440050',
    '550e8400-e29b-41d4-a716-446655440000',
    '550e8400-e29b-41d4-a716-446655440040',
    'SNR-001',
    'confirmed',
    'paid',
    229.98,
    18.40,
    9.99,
    258.37,
    '{"first_name": "John", "last_name": "Doe", "address_line_1": "123 Main Street", "city": "New York", "state": "NY", "postal_code": "10001", "country": "US"}',
    '{"first_name": "John", "last_name": "Doe", "address_line_1": "123 Main Street", "city": "New York", "state": "NY", "postal_code": "10001", "country": "US"}'
);

-- Insert order items
INSERT INTO order_items (order_id, product_id, variant_id, quantity, price, total, product_name, product_sku, variant_name) VALUES 
(
    '550e8400-e29b-41d4-a716-446655440050',
    '550e8400-e29b-41d4-a716-446655440020',
    NULL,
    1,
    199.99,
    199.99,
    'Wireless Bluetooth Headphones',
    'WBH-001',
    NULL
),
(
    '550e8400-e29b-41d4-a716-446655440050',
    '550e8400-e29b-41d4-a716-446655440021',
    '550e8400-e29b-41d4-a716-446655440030',
    1,
    29.99,
    29.99,
    'Organic Cotton T-Shirt',
    'OCT-001',
    'Black - Small'
);

-- Insert demo discount code
INSERT INTO discount_codes (tenant_id, code, type, value, minimum_amount, usage_limit, starts_at, ends_at) VALUES 
(
    '550e8400-e29b-41d4-a716-446655440000',
    'WELCOME10',
    'percentage',
    10.00,
    50.00,
    100,
    NOW() - INTERVAL '1 day',
    NOW() + INTERVAL '30 days'
);
