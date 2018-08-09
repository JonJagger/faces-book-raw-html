$(() => {

  const faces = $('faces');

  const makeFace = function(name) {
    return $('<img>', {
      title:name,
        src:`img/2018/${name}.jpg`,
      class:"face"
    });
  };

  faces.append(makeFace("Thiru"));

});
