
export { getUsers }

import Vue from 'vue'

async function getUsers() {
  let users = await Vue.axios.get('/api/users')
  console.log('service get users:', JSON.stringify(users.data));
  return users.data;

}