import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "./productSlice";
import Modal from "react-modal";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false); // Pour gérer l'état d'édition , initialisé a false par défaut mais a true lorsqu'on l'appelle
  const [newName, setNewName] = useState(product.nom); // Pour gérer l'état d'édition du nom
  const [newPrice, setNewPrice] = useState(product.prix); // Pour gérer l'état d'édition du prix

  const handleDelete = () => {
    dispatch(deleteProduct({ id: product.id }));
  };

  // Quand IsEditing est vrai, les deux champs de saisi apparaît pour update le prix + nom
  // Il se déclenche a true seulement à partir du moment où on clique sur "modifier le prix" dans le return
  const handleEdit = () => {
    setIsEditing(true);
  };

  // cette fonction envoie les nouvelles valeurs au store redux
  const handleSave = () => {
    dispatch(updateProduct({ id: product.id, nom: newName, prix: newPrice }));
    setIsEditing(false);
  };

  // Pour fermer la modal
  const closeModal = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <span>
        {product.nom} - {product.prix}€
      </span>
      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        Supprimer
      </button>
      <button onClick={handleEdit} className="btn btn-info btn-sm">
        Modifier le produit
      </button>

      {/* et là les  2 nouveaux champs d'affichent uniquement si on veut modifier le produit
        on lui rentre les nouvelles valeurs et on sauvegarde notre édition */}
      <Modal
        isOpen={isEditing}
        onRequestClose={closeModal}
        contentLabel="Modifier le produit"
        ariaHideApp={false}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "300px",
          },
        }}
      >
        <h2>Modifier le produit</h2>
        <form>
          <label>Nom du nouveau produit</label>
          <input
            className="border"
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <label>Prix du nouveau produit</label>
          <input
            className="border"
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(parseFloat(e.target.value))}
          />
          <button
            type="button"
            onClick={handleSave}
            className="btn btn-secondary"
          >
            Enregistrer
          </button>
          <button type="button" onClick={closeModal} className="btn btn-light">
            Fermer
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ProductItem;
