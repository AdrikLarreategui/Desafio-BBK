// import axios from "axios";

// const API_URL = "http://localhost:8080";

const usersArray = [
  {
    username: "user1",
    email: "user1@user1.com",
    password: "user1",
    role: "candidate",
    tokens: [],
  },
  {
    username: "user2",
    email: "user2@user2.com",
    password: "user2",
    role: "candidate",
    tokens: [],
  },
  {
    username: "user3",
    email: "user3@user3.com",
    password: "user3",
    role: "candidate",
    tokens: [],
  },
  {
    username: "company1",
    email: "company1@company1.com",
    password: "company1",
    role: "company",
    tokens: [],
  },
  {
    username: "company2",
    email: "company2@company2.com",
    password: "company2",
    role: "company",
    tokens: [],
  },
  {
    username: "company3",
    email: "company3@company3.com",
    password: "company3",
    role: "company",
    tokens: [],
  },
];

const register = async (userData) => {
  try {
    const existingUser = usersArray.find(
      (user) => user.email === userData.email
    );
    if (existingUser) {
      throw new Error("Email already exists");
    }

    const newUser = {
      username: userData.username,
      email: userData.email,
      password: "111@111.com",
      role: "user",
      tokens: [],
    };
    usersArray.push(newUser);
    console.log(newUser);
    console.log(usersArray);
    return userData;
  } catch (error) {
    throw error;
  }
};

const login = async (userData) => {
  try {
    const user = usersArray.find(
      (user) =>
        user.email === userData.email && user.password === userData.password
    );

    if (!user) {
      throw new Error("Invalid email or password");
    }

    user.tokens.push("123456789" + user.username);
    const lastToken = user.tokens[user.tokens.length - 1];
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(lastToken));

    console.log(user);
    return user;
  } catch (error) {
    throw error;
  }
};

const authService = {
  login,
  register,
};
export default authService;
