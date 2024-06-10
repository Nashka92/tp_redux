import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./productSlice";
import "bootstrap/dist/css/bootstrap.css";

// Pour ajouter de nouveaux produits
const AddProduct = () => {
  const [nom, setNom] = useState(""); //useState pour définir le champ nom (vide par défaut)
  const [prix, setPrix] = useState(""); //useState pour définir le champ prix (vide par défaut)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ nom, prix: parseFloat(prix) }));
    setNom("");
    setPrix("");
  };

  return (
    <div>
      <h2>Ajouter un produit</h2>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="nom" class="form-label">
            Nom du produit
          </label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Nom du produit"
            class="form-control"
            id="nom"
          />
        </div>
        <div class="mb-3">
          <label for="prix" class="form-label">
            Prix du produit
          </label>
          <input
            type="number"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
            placeholder="Prix"
            class="form-control"
            id="nom"
          />
        </div>

        <button type="submit" class="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
