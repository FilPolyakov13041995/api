let users = [
    {
        id: 1,
        name: "Helen Adams",
        age: 24,
        address: "Brest, France",
        status: false
    },
    {
        id: 2,
        name: "Phil Adams",
        age: 29,
        address: "Brest, France",
        status: false
    },
    {
        id: 3,
        name: "Marfa Adams",
        age: 0,
        address: "Brest, France",
        status: false
    }
];

let nextId = 4;

const resolvers = {
    Query: {
        users: () => users
    },
    Mutation: {
        createUser: (_, { name, age, address, status }) => {
          const newUser = {
              id: nextId++,
              name,
              age,
              address,
              status
            }
            users.push(newUser);
            return newUser;
        },
        updateUser: (_, {  id, ...fieldsToUpdate }) => {
            const user = users.find(user => user.id === id);
            if(user) {
                Object.assign(user, fieldsToUpdate);
                return user;
            }
            return null;
        },
        deleteUser: (_, { id }) => {
            const userIndex = users.findIndex(user => user.id === id);
            if(userIndex !== -1) {
                const deleteUser = users[userIndex];
                users.splice(userIndex, 1);
                return deleteUser;
            }
            return null;
        }
    }
};
module.exports = { resolvers };