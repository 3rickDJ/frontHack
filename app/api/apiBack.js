import axios from 'axios';

// const API = process.env.NEXT_PUBLIC_API_CRM
console.log(process.env.NEXT_PUBLIC_BACK)
const API = process.env.NEXT_PUBLIC_BACK

console.log('hola')
console.log(process.env.NEXT_PUBLIC_BACK)
console.log('hola')
export default axios.create({
  baseURL: `${API}/api`,
})