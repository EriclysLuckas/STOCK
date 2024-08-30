// src/hooks/useUtils.js
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase-config'; // Importe a configuração do Firebase

export default function useUtils() {
  const [base, setBase] = useState([]);

  // Buscar dados da coleção "products"
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBase(products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Adicionar um novo produto
  const addProduct = async (newProduct) => {
    try {
      const docRef = await addDoc(collection(db, 'products'), newProduct);
      console.log("Document written with ID: ", docRef.id);
      fetchData();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // Deletar um produto pelo ID
  const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, 'products', id));
      console.log("Document deleted with ID: ", id);
      fetchData();
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  // Obter um produto pelo ID
  const getProductId = async (id) => {
    try {
      const docRef = doc(db, 'products', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error getting document: ", error);
      return null;
    }
  };

  // Atualizar um produto pelo ID
  const updateProduct = async (id, updatedProduct) => {
    try {
      const docRef = doc(db, 'products', id);
      await updateDoc(docRef, updatedProduct);
      console.log("Document updated with ID: ", id);
      fetchData();
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return { base, addProduct, deleteProduct, getProductId, updateProduct };
}
