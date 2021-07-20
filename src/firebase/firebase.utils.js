import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA17nfX-CQRcTidZUL0HiDRJkoD4wBYgN0",
  authDomain: "heroku-deploy-f8c52.firebaseapp.com",
  projectId: "heroku-deploy-f8c52",
  storageBucket: "heroku-deploy-f8c52.appspot.com",
  messagingSenderId: "983952159141",
  appId: "1:983952159141:web:abf5538fed6949fc47f84c",
  measurementId: "G-4HJRYCWV07",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const addCollectionAndDocument = (collectionKey, data) => {
  if (!collectionKey) return;

  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  // data is in array form:
  data.forEach(({ title, items }) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, {
      title,
      items,
    });
  });
  batch.commit();

  return collectionRef;
};

export const sectionsForReducer = (snapshot) => {
  if (!snapshot) return;

  const transformedSections = snapshot.docs.map((doc) => {
    const { title, imageUrl } = doc.data();
    return {
      id: doc.id,
      linkUrl: encodeURI(title.toLowerCase()),
      title,
      imageUrl,
    };
  });

  return transformedSections;
};

export const collectionsForReducer = (snapshot) => {
  if (!snapshot) return;

  const transformedCollections = snapshot.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routePath: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });

  return transformedCollections.reduce((Accumulator, collection) => {
    Accumulator[collection.title.toLowerCase()] = collection;
    return Accumulator;
  }, {});
};
