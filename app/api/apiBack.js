import axios from 'axios';

const API = "https://my-strapi-project2-i37b2ut65q-uc.a.run.app/"

export default axios.create({
  baseURL: `${API}/api`,
})