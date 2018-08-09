$(() => {

  const makeFace = function(name) {
    return $("<img>", {
      title:name,
        src:`img/2018/${name}.jpg`,
      class:"face"
    });
  };

  const names = [
    "Akshat",
    "Karthika",
    "Sanjana",
    "Mahidher",
    "Akhil",
    "Keerthana",
    "RVishnuPriya",
    "Anushree",
    "Mariah",
    "Aishu",
    "Rishi",
    "Jon",
    "Pavithrann",
    "Sindhu",
    "Rishi",
    "Supriya",
    "Shruti",
    "Santhosh",
    "Supriya",
    "Gayatri",
    "Vishnu",
    "Varsha",
    "John",
    "Ameya",
    "Sudeep",
    "Janani",
    "Thiru",
    "Thamizh"
  ];

  const faces = $("faces");

  names.forEach(function(name) {
    faces.append(makeFace(name));
  });

});
