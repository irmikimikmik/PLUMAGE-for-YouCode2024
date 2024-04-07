export default function Filter({ onSortChange }) {
    return (
        <div className="px-12 flex justify-between items-center mb-4">
            <div className="flex gap-4 items-center">
                <select className="ml-2 p-1 border rounded">
                    <option value="all">All Products</option>
                    <option value="jackets">Jackets</option>
                    <option value="shoes">Shoes</option>
                    <option value="shoes">Pants</option>
                </select>
                <div className="border-l h-5 border-gray-400"></div> {/* Thin vertical line */}
                <select className="ml-2 p-1 border rounded">
                    <option value="all">All Ratings</option>
                    <option value="4stars">4 Stars & Up</option>
                    <option value="3stars">3 Stars & Up</option>
                    {/* Add more rating options as needed */}
                </select>
                <div className="border-l h-5 border-gray-400"></div> {/* Thin vertical line */}            
        
                <select className="ml-2 p-1 border rounded">
                    <option value="all">My Colors</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="white">Red</option>
                    <option value="white">Blue</option>
                </select>
                <div className="border-l h-5 border-gray-400"></div> {/* Thin vertical line */}
                
                <select className="ml-2 p-1 border rounded">
                    <option value="all">My Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="large">XLarge</option>
                </select>
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
