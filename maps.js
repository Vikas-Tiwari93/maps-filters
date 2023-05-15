const users = [
  {
    id: 1,
    name: 'Aman',
    city: 'Pune',
  },
  {
    id: 2,
    name: 'Rahul',
    city: 'Delhi',
  },
  {
    id: 3,
    name: 'Abhinav',
    city: 'Dehradun',
  },
];

const orders = [
  {
    orderId: 101,
    userId: 1,
    productName: 'iPhone 12 Pro',
  },
  {
    orderId: 102,
    userId: 1,
    productName: 'iPhone 13 Pro',
  },
  {
    orderId: 103,
    userId: 1,
    productName: 'iPhone 14 Pro',
  },
  {
    orderId: 104,
    userId: 2,
    productName: 'Samsung S23',
  },
];

const result = [
  {
    userId: 1,
    name: 'Aman',
    orders: [
      {
        orderId: 101,
        productName: 'iPhone 12 Pro',
      },
      {
        orderId: 102,
        productName: 'iPhone 13 Pro',
      },
      {
        orderId: 103,
        productName: 'iPhone 14 Pro',
      },
    ],
  },
  {
    userId: 2,
    name: 'Rahul',
    orders: [
      {
        orderId: 104,
        productName: 'Samsung S23',
      },
    ],
  },
  {
    userId: 3,
    name: 'Abhinav',
    orders: [],
  },
];

// Write a program to form a result array using map & filter or anyting but map is a must
// Use abobe users & orders array

const getResult = users.map((elm) => {
  const orderfilter = orders
    .filter((ordersfil) => {
      if (ordersfil.userId === elm.id) {
        return true;
      }
      return false;
    })
    .map((filElm) => {
      const orderid = filElm.orderId;
      const productname = filElm.productName;
      const userid = filElm.userId;
      return { orderid, productname };
    });

  console.log(orderfilter, 'haskjnasn');
  const newobj = {};
  newobj['name'] = elm.name;
  newobj['userId'] = elm.id;
  newobj['orders'] = orderfilter;
  return newobj;
});

console.log(getResult);
