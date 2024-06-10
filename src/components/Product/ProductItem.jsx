import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "./productSlice";

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

  return (
    <div>
      <span>
        {product.nom} - {product.prix}€
      </span>
      <button onClick={handleDelete} className="btn btn-danger btn-sm">Supprimer</button>
      <button onClick={handleEdit} className="btn btn-info btn-sm">Modifier le produit</button>

      {/* et là les  2 nouveaux champs d'affichent uniquement si on veut modifier le produit
        on lui rentre les nouvelles valeurs et on sauvegarde notre édition */}
      {isEditing && (
        <div>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(parseFloat(e.target.value))}
          />
          <button onClick={handleSave}>Enregistrer</button>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
