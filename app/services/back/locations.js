import apiBack from "../../api/apiBack";

const PATH = '/locations';

const getLocations = () => {
  return apiBack({
    url: `${PATH}?populate=*`,
    method: 'GET'
  })
}



export {
  getLocations
} 
