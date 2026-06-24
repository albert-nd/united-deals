const FilterSidebar = ({
  categories,
  setSelectedCategory
}) => {
  return (
    <div className="p-4 bg-white w-64">

      <h2 className="font-bold mb-4">
        Categories
      </h2>

      <button onClick={() => setSelectedCategory('all')}>
        All
      </button>

      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className="block mt-2"
        >
          {cat}
        </button>
      ))}

    </div>
  )
}

export default FilterSidebar