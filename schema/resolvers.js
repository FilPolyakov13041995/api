const users = [
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

const resolvers = {
    Query: {
        users: () => users
    },
    Mutation: {
        updateUser: (_, {  id, name, age, address, status }) => {
            const user = this.users.find(user => user.id === id);
            if(user) {
                if(name !== undefined) user.name = name;
                if(age !== undefined) user.age = age;
                if(address !== undefined) user.address = address;
                if(status !== undefined) user.status = status;
                return user;
            }
            return null;
        }
    }
};
module.exports = { resolvers };