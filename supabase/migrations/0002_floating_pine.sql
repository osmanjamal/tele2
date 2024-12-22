-- Insert sample categories
INSERT INTO categories (name, name_ar, image_url) VALUES
('Mahashi', 'محاشي', 'https://example.com/mahashi.jpg'),
('Appetizers', 'مقبلات', 'https://example.com/appetizers.jpg'),
('Drinks', 'مشروبات', 'https://example.com/drinks.jpg');

-- Insert sample menu items
INSERT INTO menu_items (category_id, name, name_ar, description, description_ar, price, image_url) VALUES
((SELECT id FROM categories WHERE name = 'Mahashi'), 'Grape Leaves', 'ورق عنب', 'Stuffed grape leaves with rice and herbs', 'ورق عنب محشي بالأرز والأعشاب', 15.00, 'https://example.com/grape-leaves.jpg'),
((SELECT id FROM categories WHERE name = 'Appetizers'), 'Hummus', 'حمص', 'Creamy chickpea dip', 'حمص بطحينة كريمي', 10.00, 'https://example.com/hummus.jpg'),
((SELECT id FROM categories WHERE name = 'Drinks'), 'Mint Tea', 'شاي بالنعناع', 'Fresh mint tea', 'شاي طازج بالنعناع', 5.00, 'https://example.com/mint-tea.jpg');