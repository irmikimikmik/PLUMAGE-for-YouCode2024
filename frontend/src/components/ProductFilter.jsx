export default function Filter(onSortChange) {
    return (
        <div className="flex justify-between items-center mb-4">
            <div className="flex gap-4 items-center">
                <span className="ml-8">Product</span>
                <div className="border-l h-5 border-gray-400"></div> {/* Thin vertical line */}
                <span>Color</span>
                <div className="border-l h-5 border-gray-400"></div> {/* Thin vertical line */}
                <span>Rating</span>
                <div className="border-l h-5 border-gray-400"></div> {/* Thin vertical line */}
                <span>Size</span>
            </div>
            <div>
                <label htmlFor="sort">Sort:</label>
                <select id="sort" onChange={onSortChange} className="ml-2 p-1 border rounded">
                    <option value="default">Select</option>
                    <option value="priceLowHigh">Price: Low to High</option>
                    <option value="priceHighLow">Price: High to Low</option>
                    <option value="ratingHighLow">Rating: High to Low</option>
                </select>
            </div>
        </div>
    );
}
