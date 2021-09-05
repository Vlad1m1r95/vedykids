const convertableString = (string) => {

 const html = new DOMParser().parseFromString(string, "text/xml")
 return html
}

export default convertableString