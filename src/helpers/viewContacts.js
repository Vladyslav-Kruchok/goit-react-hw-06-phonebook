const viewContacts = (filterValue, itemValue) => {
    const lowerCaseFilter = filterValue.toLowerCase();
    const viewContacts = itemValue ? itemValue.filter(
    item => item.name.toLowerCase().includes(lowerCaseFilter)) : [{}];
    return viewContacts;      
  };
export default viewContacts;