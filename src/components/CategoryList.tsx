import React from 'react';
import { Category } from '../types';
import { useStore } from '../store/useStore';

interface CategoryListProps {
  categories: Category[];
}

export function CategoryList({ categories }: CategoryListProps) {
  const { selectedCategory, setSelectedCategory } = useStore();

  return (
    <div className="flex overflow-x-auto gap-4 p-4 bg-white shadow-sm">
      <button
        onClick={() => setSelectedCategory(null)}
        className={`flex-shrink-0 px-4 py-2 rounded-full ${
          selectedCategory === null
            ? 'bg-primary text-white'
            : 'bg-gray-100 text-gray-700'
        }`}
      >
        All / الكل
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`flex-shrink-0 px-4 py-2 rounded-full ${
            selectedCategory === category.id
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          {category.name} / {category.name_ar}
        </button>
      ))}
    </div>
  );
}