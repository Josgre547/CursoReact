import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  where,
  query,
  updateDoc,
  deleteDoc,
  writeBatch,
  increment,
} from "firebase/firestore";
import { db } from "./config";

const articulosRef = collection(db, "items");

export const getArticulos = async (category) => {
  const q = category
    ? query(articulosRef, where("category", "==", category))
    : articulosRef;

  let articulos = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    articulos = [...articulos, { ...doc.data(), id: doc.id }];
  });

  return articulos;
};

export const getArticulo = async (id) => {
  const document = doc(db, "items", id);
  const docSnap = await getDoc(document);
  if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };

  return null;
};

export const updateArticulo = async (id, item) => {
  const newArticulo = await updateDoc(doc(db, "items", id), item);
  return;
};

export const deleteArticulo = async (id) => {
  return await deleteDoc(doc(db, "items", id));
};

export const updateManyArticulos = async ( items ) => {
  const batch = writeBatch(db);
  
  items.forEach(({id, qty})=>{ 
    batch.update(doc(db, "items", id), {
      stock: increment(-qty)
    })
  })

  batch.commit();
}
