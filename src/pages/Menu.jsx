import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Menu() {
  const { type, category } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const itemsPerPage = 4;

  useEffect(() => {
    fetch('/menuData.json')
      .then(res => res.json())
      .then(data => {
const filtered = data.filter(item =>
  item.type === type && (category === 'all' || item.category === category)
);
        setMenuItems(filtered);
        setCurrentPage(1);
      })
      .catch(err => console.error('Failed to load menu data:', err));
  }, [type, category]);

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirst, indexOfLast);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 text-capitalize">
        {category} {type} Menu
      </h2>

      <div className="mb-4 text-center">
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="Search food item..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {currentItems.length === 0 ? (
        <p className="text-center text-muted">No items found.</p>
      ) : (
        <div className="row">
          {currentItems.map(item => (
            <div className="col-md-6 col-lg-4 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <img src={item.image} alt={item.name} className="img-fluid mb-2" />
                  <p className="card-text">{item.description}</p>
                  <p className="fw-bold">₹{item.price}</p>
                  <span className={`badge ${item.category === 'veg' ? 'bg-success' : 'bg-danger'}`}>
                    {item.category.toUpperCase()}
                  </span>
                </div>
                <div className="card-footer text-center bg-white">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#detailsModal"
                    onClick={() => setSelectedItem(item)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            {[...Array(totalPages).keys()].map(num => (
              <li
                key={num}
                className={`page-item ${currentPage === num + 1 ? 'active' : ''}`}
              >
                <button className="page-link" onClick={() => setCurrentPage(num + 1)}>
                  {num + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Modal */}
      <div className="modal fade" id="detailsModal" tabIndex="-1" aria-labelledby="detailsModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {selectedItem && (
              <>
                <div className="modal-header">
                  <h5 className="modal-title" id="detailsModalLabel">{selectedItem.name}</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <p><strong>Description:</strong> {selectedItem.description}</p>
                  <p><strong>Price:</strong> ₹{selectedItem.price}</p>
                  <p>
                    <strong>Category:</strong>{' '}
                    <span className={`badge ${selectedItem.category === 'veg' ? 'bg-success' : 'bg-danger'}`}>
                      {selectedItem.category.toUpperCase()}
                    </span>
                  </p>
                  {selectedItem.ingredients && (
                    <p><strong>Ingredients:</strong> {selectedItem.ingredients.join(', ')}</p>
                  )}
                  {selectedItem.spiceLevel && (
                    <p><strong>Spice Level:</strong> {selectedItem.spiceLevel}</p>
                  )}                  

                  {selectedItem.rating && (
                    <p><strong>Rating:</strong> {selectedItem.rating}</p>
                  )}

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
