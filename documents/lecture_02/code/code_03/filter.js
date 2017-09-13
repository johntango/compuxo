var employees = [
  {name: 'peter', salary: 100000},
  {name: 'bruce', salary: 425000},
  {name: 'hanna', salary: 750000},
  {name: 'james', salary: 550800}    
];

function isBigEnough(element) {
	var comparison = element.salary >= 500000;
  	return comparison;  
}

var filtered = employees.filter(isBigEnough);
console.log(JSON.stringify(filtered));