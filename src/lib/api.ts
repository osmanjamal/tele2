import { supabase } from './supabase';

export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('created_at', { ascending: true });
    
  if (error) {
    throw error;
  }
  
  return data;
}

export async function getMenuItems(categoryId?: string) {
  let query = supabase
    .from('menu_items')
    .select('*')
    .order('created_at', { ascending: true });
    
  if (categoryId) {
    query = query.eq('category_id', categoryId);
  }
  
  const { data, error } = await query;
  
  if (error) {
    throw error;
  }
  
  return data;
}