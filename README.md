# firestore-query-test

![License](https://img.shields.io/badge/firebase--admin-9.11.1-orange)

Execute firstore database queries to check out simple datas.  
Of course, you can use filters given by firestore database console, but it does not support many things such as multiple where(). This is a tool to overcome these limits.

## Setup
---
Save your private key file below /cert.  
get your key file from Firebase console, at Settings > Service Accounts.  


## Usage example
---
### Get multiple document data in collection 
```js
firestore()
    .collection('users')
    .where('status', '==', 1)
    .where('gender','==', 'M')
    .orderBy('timestamp','desc')
    .get()
    .then((res) => {
        console.log(getCollectionData(res));
    })
```

### Get single document data in collection
```js
firestore()
    .collection('users')
    .doc('8pxpIp0TAc2QhQEeDKeN')
    .get()
    .then((res) => {
        console.log(getDocData(res));
    })
```

## License
---
MIT