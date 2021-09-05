function importAll (r) {
  r.keys().forEach(r);
}

const fruit =  importAll(require.context('./../img/categoryL1/fruit/', true, /\.(png|jpe?g|svg)$/));
  