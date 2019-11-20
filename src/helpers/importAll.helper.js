const importAll = (r, categoryname) => {
  
  r.keys().forEach((s, i, arr) => categoryname[i] = r(s))

  return categoryname
  
}
export const importAllHash = (r, categoryname) => {
  
  
  r.keys().forEach((s, i, arr) => categoryname[i] = r(s))
  
 
  return categoryname
  
}


export default importAll