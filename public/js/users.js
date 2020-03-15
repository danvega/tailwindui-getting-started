let users = [];

async function loadUsers() {
  const response = await fetch("db/users.json");
  users = await response.json();
  userToTableRow();
}

function userToTableRow() {
  const tbody = document.querySelector("tbody");
  users.forEach(user => {
    tbody.innerHTML += createRow(user);
  });
}

function createRow(user) {
  return `
  <tr>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <img class="h-10 w-10 rounded-full" src="${user.avatar}" alt="" />
        </div>
        <div class="ml-4">
          <div id="fullName" class="text-sm leading-5 font-medium text-gray-900">${user.name}</div>
          <div id="email" class="text-sm leading-5 text-gray-500">${user.email}</div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <div class="text-sm leading-5 text-gray-900">${user.title}</div>
      <div class="text-sm leading-5 text-gray-500">${user.department}</div>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        ${user.status}
      </span>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
        ${user.role}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
      <a href="#" class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">Edit</a>
    </td>
  </tr>
  `;
}

loadUsers();
