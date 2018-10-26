const arr = [
  'Sed ut perspiciatis unde',
  'quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,',
  'consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore',
  'Sed ut perspiciatis unde omnis iste natu',
  'nesciunt. Neque porro quisquam est, qui dolorem ipsum quia it amet,',
  'consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore',
  'Sed ut perspiciatis unde omnis iste natu',
  ' dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam ipsum quia dolor sit amet,',
  'consectetur',
];

// Modification du Array.prototype pour y ajouter une nouvelle méthode.
Array.prototype.getShortMessage = function () {
  // retourne un nouveau tableau sur la base d'éléments filtrés selon une condition se trouvant dans la fonction de callback.
  return this.filter(elem => elem.length < 50 )
};


console.log(arr.getShortMessage());
