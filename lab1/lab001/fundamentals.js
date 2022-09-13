// const aCar = { 
//   owner: "Joe Bloggs", 
//   type: 'Toyota Corolla 1.8', 
//   registration: '201WD1058',
//   year: "201",
//   countyCode: "WD",
//   number: "1058"
// };

// console.log("Reg.=" + aCar.year + "-" + aCar.countyCode + "-" + aCar.number);

const aCar = {
  owner: "Joe Bloggs",
  address: "3 Walkers Lane",
  previous_owners: [
    // "Pat Smith - 1 Main Street",
    // "Sheila Dwyer - 2 High Street"
    {name: "Pat Smith", address: "1 Main Street"},
    {name: "Sheila Dwyer", address: "2 High Street"}
  ],
  type: 'Toyota Corolla 1.8', 
  registration: '201WD1058',
  year: "201",
  countyCode: "WD",
  number: "1058"
};
console.log('First owner : ' + aCar.previous_owners[0].name + " - " + aCar.previous_owners[0].address )